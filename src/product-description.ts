import type { ProductContent, ThemeName, ProductSchema } from './types';
import { themes } from './themes';

export class ProductDescription extends HTMLElement {
  private _content: ProductContent;
  private _error: string | null;
  private _theme: ThemeName;
  private _shadow: ShadowRoot;
  private static globalStyles: string = '';

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._content = {};
    this._error = null;
    this._theme = 'default';
    this.render();
  }

  static get observedAttributes(): string[] {
    return ['title', 'description', 'features', 'image-url', 'theme', 'price', 'currency'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      if (name === 'theme' && this.isValidTheme(newValue)) {
        this._theme = newValue;
      } else {
        this._content[name] = newValue ?? undefined;
      }
      this.render();
    }
  }

  private isValidTheme(theme: string | null): theme is ThemeName {
    return theme !== null && ['default', 'modern', 'minimal', 'dark', 'elegant', 'feature-heavy'].includes(theme);
  }

  private generateSchema(): string {
    const schema: ProductSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this._content.title,
      description: this._content.description,
      image: this._content['image-url'],
    };

    if (this._content.features) {
      try {
        const features: string[] = JSON.parse(this._content.features);
        if (features.length > 0) {
          schema.additionalProperty = features.map(feature => ({
            '@type': 'PropertyValue',
            name: feature
          }));
        }
      } catch (e) {
        console.warn('Invalid features format');
      }
    }

    if (this._content.price) {
      schema.offers = {
        '@type': 'Offer',
        price: this._content.price,
        priceCurrency: this._content.currency || 'USD'
      };
    }

    return JSON.stringify(schema);
  }

  private generateFallbackContent(): string {
    try {
      const features: string[] = this._content.features ? JSON.parse(this._content.features) : [];
      return `
        <div class="product-seo-content">
          <h2>${this._content.title || ''}</h2>
          <p>${this._content.description || ''}</p>
          ${features.length > 0 ? `
            <ul>
              ${features.map((feature: string) => `<li>${feature}</li>`).join('')}
            </ul>
          ` : ''}
          ${this._content['image-url'] ? `
            <img src="${this._content['image-url']}" 
                 alt="${this._content.title || 'Product image'}"
                 width="800" height="600"
                 loading="lazy" />
          ` : ''}
        </div>
      `;
    } catch (e) {
      return '';
    }
  }

  private getThemeStyles(): string {
    return themes[this._theme] || themes.default;
  }

  private render(): void {
    const styles = `
      ${ProductDescription.globalStyles}
      :host {
        display: block;
        font-family: var(--pd-font-family, system-ui, -apple-system, sans-serif);
        max-width: var(--pd-max-width, 800px);
        margin: 0 auto;
        padding: var(--pd-padding, 20px);
        box-sizing: border-box;
      }
      .product-seo-content {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .product-image {
        width: 100%;
        height: auto;
        max-height: var(--pd-image-max-height, 400px);
        object-fit: cover;
        display: block;
      }
      .product-content {
        padding: var(--pd-content-padding, 20px);
      }
      .product-title {
        margin: 0 0 16px 0;
        color: var(--pd-title-color, inherit);
        font-size: var(--pd-title-font-size, inherit);
        font-weight: var(--pd-title-font-weight, inherit);
      }
      .product-description {
        font-size: var(--pd-description-font-size, 16px);
        line-height: var(--pd-description-line-height, 1.6);
        margin: 0 0 20px 0;
        color: var(--pd-description-color, inherit);
      }
      .features-list {
        margin: 0;
        padding: 0 0 0 20px;
        list-style-position: outside;
      }
      .features-list li {
        margin: 8px 0;
        color: var(--pd-features-color, inherit);
      }
      .error-message {
        color: var(--pd-error-color, #dc2626);
        padding: 10px;
        background: var(--pd-error-bg, #fee2e2);
        border-radius: 4px;
        margin: 10px 0;
      }
      ${this.getThemeStyles()}
    `;

    try {
      const features: string[] = this._content.features ? JSON.parse(this._content.features) : [];
      
      // Add Schema.org markup
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = this.generateSchema();
      document.head.appendChild(schemaScript);

      // Generate the appropriate layout based on theme
      let content = '';
      if (this._theme === 'feature-heavy') {
        content = `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ''}
            
            <!-- Intro Section -->
            <div class="product-intro" itemprop="description">
              ${this._content.description || ''}
            </div>

            <!-- Key Features Section -->
            <section class="key-features-section">
              <h2>Key Features</h2>
              <div class="key-features-grid">
                ${features.map(feature => `
                  <div class="key-feature-item" itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
                    <span itemprop="name">${feature}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Flex Sections -->
            <div class="flex-sections">
              <div class="flex-section">
                <div class="flex-section-content">
                  <h2 class="product-title" itemprop="name">${this._content.title || ''}</h2>
                  <p>${this._content.description || ''}</p>
                </div>
                ${this._content['image-url'] ? `
                  <div class="flex-section-image">
                    <img 
                      src="${this._content['image-url']}" 
                      alt="${this._content.title || 'Product image'}"
                      loading="lazy"
                      itemprop="image"
                    >
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Features & Specifications -->
            <section class="specs-table">
              <h2>Features & Specifications</h2>
              ${features.map((feature, index) => `
                <div class="specs-row">
                  <div class="specs-cell">
                    <span class="specs-label">Feature ${index + 1}</span>
                  </div>
                  <div class="specs-cell">
                    <span class="specs-value">${feature}</span>
                  </div>
                </div>
              `).join('')}
              ${this._content.price ? `
                <div class="specs-row">
                  <div class="specs-cell">
                    <span class="specs-label">Price</span>
                  </div>
                  <div class="specs-cell">
                    <span class="specs-value">${this._content.price} ${this._content.currency || 'USD'}</span>
                  </div>
                </div>
              ` : ''}
            </section>

            <!-- Contents Section -->
            <section class="contents-section">
              <h2>Contents</h2>
              <ul class="contents-list">
                ${features.map(feature => `
                  <li class="contents-item">${feature}</li>
                `).join('')}
              </ul>
            </section>
          </article>
        `;
      } else {
        // Original layout for other themes
        content = `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ''}
            ${this._content['image-url'] ? `
              <img 
                class="product-image" 
                src="${this._content['image-url']}" 
                alt="${this._content.title || 'Product image'}"
                loading="lazy"
                itemprop="image"
              >
            ` : ''}
            <div class="product-content">
              ${this._content.title ? `
                <h2 class="product-title" itemprop="name">${this._content.title}</h2>
              ` : ''}
              ${this._content.description ? `
                <p class="product-description" itemprop="description">${this._content.description}</p>
              ` : ''}
              ${features.length > 0 ? `
                <ul class="features-list">
                  ${features.map(feature => `
                    <li itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
                      <span itemprop="name">${feature}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          </article>
        `;
      }

      this._shadow.innerHTML = `
        <style>${styles}</style>
        ${this.generateFallbackContent()}
        ${content}
      `;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this._error = `Error rendering product description: ${errorMessage}`;
      this._shadow.innerHTML = `
        <style>${styles}</style>
        <div class="error-message">${this._error}</div>
      `;
    }
  }

  // Add static method to set global styles
  static setGlobalStyles(styles: {
    fontFamily?: string;
    titleColor?: string;
    titleFontSize?: string;
    descriptionColor?: string;
    descriptionFontSize?: string;
    featuresColor?: string;
  }): void {
    this.globalStyles = `
      :host {
        ${styles.fontFamily ? `--pd-font-family: ${styles.fontFamily};` : ''}
        ${styles.titleColor ? `--pd-title-color: ${styles.titleColor};` : ''}
        ${styles.titleFontSize ? `--pd-title-font-size: ${styles.titleFontSize};` : ''}
        ${styles.descriptionColor ? `--pd-description-color: ${styles.descriptionColor};` : ''}
        ${styles.descriptionFontSize ? `--pd-description-font-size: ${styles.descriptionFontSize};` : ''}
        ${styles.featuresColor ? `--pd-features-color: ${styles.featuresColor};` : ''}
      }
    `;
    
    // Update all existing instances
    document.querySelectorAll('product-description').forEach((element) => {
      if (element instanceof ProductDescription) {
        element.render();
      }
    });
  }

  // Add static method to reset global styles
  static resetGlobalStyles(): void {
    this.globalStyles = '';
    // Update all existing instances
    document.querySelectorAll('product-description').forEach((element) => {
      if (element instanceof ProductDescription) {
        element.render();
      }
    });
  }
}

// Register the custom element
customElements.define('product-description', ProductDescription); 