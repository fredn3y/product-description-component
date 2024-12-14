import type { ProductContent, ThemeName, ProductSchema } from './types';
import { themes } from './themes/theme-styles';

export class ProductDescription extends HTMLElement {
  private _content: ProductContent;
  private _error: string | null;
  private _theme: ThemeName;
  private _shadow: ShadowRoot;

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
    return theme !== null && ['default', 'modern', 'minimal', 'dark', 'elegant'].includes(theme);
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
      :host {
        display: block;
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
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
        max-height: 400px;
        object-fit: cover;
        display: block;
      }
      .product-content {
        padding: 20px;
      }
      .product-title {
        margin: 0 0 16px 0;
      }
      .product-description {
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 20px 0;
      }
      .features-list {
        margin: 0;
        padding: 0 0 0 20px;
        list-style-position: outside;
      }
      .features-list li {
        margin: 8px 0;
      }
      .error-message {
        color: #dc2626;
        padding: 10px;
        background: #fee2e2;
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

      this._shadow.innerHTML = `
        <style>${styles}</style>
        ${this.generateFallbackContent()}
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
                ${features.map((feature: string) => `
                  <li itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
                    <span itemprop="name">${feature}</span>
                  </li>
                `).join('')}
              </ul>
            ` : ''}
          </div>
        </article>
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
}

// Register the custom element
customElements.define('product-description', ProductDescription); 