import { SchemaGenerator, ProductContent, ProductSchema } from '../types';
import { LoggerService } from './Logger';

export class SchemaGeneratorService implements SchemaGenerator {
  private content: ProductContent;
  private logger: LoggerService;

  constructor(content: ProductContent) {
    this.content = content;
    this.logger = new LoggerService();
  }

  generateProductSchema(): string {
    const schema: ProductSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.content.title,
      description: this.content.description,
      image: this.content['image-url'],
    };

    if (this.content.features) {
      try {
        const features: string[] = JSON.parse(this.content.features);
        if (features.length > 0) {
          schema.additionalProperty = features.map(feature => ({
            '@type': 'PropertyValue',
            name: feature
          }));
        }
      } catch (e) {
        this.logger.warn('Invalid features format');
      }
    }

    if (this.content.price) {
      schema.offers = {
        '@type': 'Offer',
        price: this.content.price,
        priceCurrency: this.content.currency || 'USD'
      };
    }

    return JSON.stringify(schema);
  }

  generateFallbackContent(): string {
    try {
      const features: string[] = this.content.features ? JSON.parse(this.content.features) : [];
      return `
        <div class="product-seo-content">
          <h2>${this.content.title || ''}</h2>
          <p>${this.content.description || ''}</p>
          ${features.length > 0 ? `
            <ul>
              ${features.map((feature: string) => `<li>${feature}</li>`).join('')}
            </ul>
          ` : ''}
          ${this.content['image-url'] ? `
            <img src="${this.content['image-url']}" 
                 alt="${this.content.title || 'Product image'}"
                 width="800" height="600"
                 loading="lazy" />
          ` : ''}
        </div>
      `;
    } catch (e) {
      this.logger.error('Error generating fallback content', e);
      return '';
    }
  }
} 