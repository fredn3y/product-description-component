import type { ProductContent, ProductData, GlobalStyles } from './types';
import {
  ErrorHandlerService,
  LoggerService,
  SchemaGeneratorService,
  TemplateGeneratorService,
  ThemeManagerService
} from './services';

export class ProductDescription extends HTMLElement {
  private _content: ProductContent;
  private _error: string | null;
  private _theme: 'feature-heavy' | 'simple';
  private _shadow: ShadowRoot;
  private static globalStyles: string = '';

  // Services
  private logger: LoggerService;
  private errorHandler: ErrorHandlerService;
  private themeManager: ThemeManagerService;
  private templateGenerator: TemplateGeneratorService;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._content = {};
    this._error = null;
    this._theme = 'simple';

    // Initialize services
    this.logger = new LoggerService();
    this.errorHandler = new ErrorHandlerService();
    this.themeManager = new ThemeManagerService();
    this.templateGenerator = new TemplateGeneratorService();

    this.render();
  }

  static get observedAttributes(): string[] {
    return ['title', 'description', 'features', 'image-url', 'theme', 'price', 'currency', 'data'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      if (name === 'theme' && this.themeManager.validateTheme(newValue)) {
        this._theme = newValue;
      } else {
        this._content[name] = newValue ?? undefined;
      }
      this.render();
    }
  }

  private generateStyles(): string {
    return `
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
      .error-message {
        color: var(--pd-error-color, #dc2626);
        padding: 10px;
        background: var(--pd-error-bg, #fee2e2);
        border-radius: 4px;
        margin: 10px 0;
      }
      ${this.themeManager.getThemeStyles(this._theme)}
    `;
  }

  private render(): void {
    this.logger.debug('Rendering with theme:', this._theme);

    try {
      const data: ProductData = this._content.data ? JSON.parse(this._content.data) : {};
      this.logger.debug('Parsed data:', data);
      
      // Generate Schema.org markup
      const schemaGenerator = new SchemaGeneratorService(this._content);
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = schemaGenerator.generateProductSchema();
      document.head.appendChild(schemaScript);

      // Generate content
      const content = this.templateGenerator.generateFullTemplate(data);
      this.logger.debug('Generated content:', content);

      // Update shadow DOM
      this._shadow.innerHTML = `
        <style>${this.generateStyles()}</style>
        ${schemaGenerator.generateFallbackContent()}
        ${content}
      `;
    } catch (error) {
      this._error = this.errorHandler.handleRenderError(error);
      this._shadow.innerHTML = `
        <style>${this.generateStyles()}</style>
        <div class="error-message">${this._error}</div>
      `;
    }
  }

  // Static methods for global styles
  static setGlobalStyles(styles: GlobalStyles): void {
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

  static resetGlobalStyles(): void {
    this.globalStyles = '';
    document.querySelectorAll('product-description').forEach((element) => {
      if (element instanceof ProductDescription) {
        element.render();
      }
    });
  }
}

// Register the custom element
customElements.define('product-description', ProductDescription); 