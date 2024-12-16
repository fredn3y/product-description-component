import { TemplateGenerator, ProductData, ProductHighlight } from '../types';
import { LoggerService } from './Logger';

export class TemplateGeneratorService implements TemplateGenerator {
  private logger: LoggerService;

  constructor() {
    this.logger = new LoggerService();
  }

  generateHighlightsSection(data: ProductData): string {
    this.logger.debug('Generating highlights section');
    return Object.entries(data.productHighlights || {}).map(([_key, highlight]: [string, ProductHighlight]) => `
      <div class="highlight-block">
        <div class="highlight-content">
          <h3 class="highlight-title">${highlight.title}</h3>
          <p class="highlight-description">${highlight.description}</p>
        </div>
        ${highlight.image ? `
          <div class="highlight-image">
            <img src="${highlight.image}" alt="${highlight.title}" loading="lazy">
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  generateSpecificationsSection(data: ProductData): string {
    this.logger.debug('Generating specifications section');
    return Object.entries(data.specifications ?? {}).map(([key, value]) => `
      <div class="specs-row">
        <div class="specs-label">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
        <div class="specs-value">${value}</div>
      </div>
    `).join('');
  }

  generateContentsSection(data: ProductData): string {
    this.logger.debug('Generating contents section');
    return (data.contents?.colors ?? []).map((item: string) => `
      <li class="contents-item">${item}</li>
    `).join('');
  }

  generateFullTemplate(data: ProductData): string {
    this.logger.debug('Generating full template', data);
    return `
      <article class="product-container" itemscope itemtype="https://schema.org/Product">
        <!-- Introduction Section -->
        <div class="product-intro" itemprop="description">
          ${data.description || data.introduction || data.productName || ''}
        </div>

        <!-- Product Highlights Section -->
        <section class="product-highlights">
          ${this.generateHighlightsSection(data)}
        </section>

        <!-- Features & Specifications Section -->
        <section class="specifications-section">
          <h2 class="section-title">Features & Specifications</h2>
          <div class="specs-table">
            ${this.generateSpecificationsSection(data)}
          </div>
        </section>

        <!-- Contents Section -->
        <section class="contents-section">
          <h2 class="section-title">Package Contents</h2>
          <ul class="contents-list">
            ${this.generateContentsSection(data)}
          </ul>
        </section>
      </article>
    `;
  }
} 