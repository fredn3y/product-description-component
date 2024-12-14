import type { ThemeStyles } from '../types';

export const themes: ThemeStyles = {
  default: `
    .product-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .product-title {
      font-size: 24px;
      font-weight: 600;
      color: #1a1a1a;
    }
    .product-description {
      color: #4a4a4a;
    }
    .features-list li {
      color: #4a4a4a;
    }
  `,
  modern: `
    .product-container {
      background: linear-gradient(145deg, #ffffff, #f5f5f5);
      border-radius: 16px;
      box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
      overflow: hidden;
    }
    .product-title {
      font-size: 28px;
      font-weight: 700;
      color: #2d3748;
      letter-spacing: -0.5px;
    }
    .product-description {
      color: #4a5568;
      font-size: 17px;
    }
    .features-list li {
      color: #4a5568;
      position: relative;
      padding-left: 24px;
    }
    .features-list li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #4299e1;
    }
  `,
  minimal: `
    .product-container {
      background: none;
      border: 1px solid #e2e8f0;
      border-radius: 0;
      overflow: hidden;
    }
    .product-title {
      font-size: 24px;
      font-weight: 500;
      color: #000;
      border-bottom: 2px solid #000;
      padding-bottom: 8px;
      margin-bottom: 24px;
    }
    .product-description {
      color: #2d3748;
      font-size: 16px;
      line-height: 1.8;
    }
    .features-list {
      list-style-type: none;
      padding: 0;
    }
    .features-list li {
      color: #2d3748;
      padding: 8px 0;
      border-bottom: 1px solid #e2e8f0;
    }
  `,
  dark: `
    .product-container {
      background: #1a202c;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      overflow: hidden;
    }
    .product-title {
      font-size: 26px;
      font-weight: 600;
      color: #fff;
    }
    .product-description {
      color: #cbd5e0;
    }
    .features-list li {
      color: #cbd5e0;
    }
    .features-list li::marker {
      color: #4299e1;
    }
  `,
  elegant: `
    .product-container {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 0;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      overflow: hidden;
      position: relative;
    }
    .product-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }
    .product-title {
      font-size: 28px;
      font-weight: 600;
      color: #1a202c;
      font-family: 'Georgia', serif;
    }
    .product-description {
      color: #4a5568;
      font-size: 16px;
      line-height: 1.8;
      font-family: 'Georgia', serif;
    }
    .features-list li {
      color: #4a5568;
      padding: 4px 0;
      font-family: 'Georgia', serif;
    }
  `,
  'feature-heavy': `
    .product-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .product-intro {
      margin-bottom: 40px;
      color: #374151;
      font-size: 1.125rem;
      line-height: 1.75;
    }

    .key-features-section {
      margin: 40px 0;
    }

    .key-features-section h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 24px;
    }

    .key-features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .key-feature-item {
      padding: 20px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .key-feature-item i {
      font-size: 1.5rem;
      color: #3b82f6;
    }

    .flex-sections {
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin: 40px 0;
    }

    .flex-section {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .flex-section:nth-child(even) {
      flex-direction: row-reverse;
    }

    .flex-section-content {
      flex: 1;
    }

    .flex-section-image {
      flex: 1;
      border-radius: 8px;
      overflow: hidden;
    }

    .flex-section-image img {
      width: 100%;
      height: auto;
      display: block;
    }

    .specs-table {
      width: 100%;
      margin: 40px 0;
      border-collapse: separate;
      border-spacing: 0;
    }

    .specs-table h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 24px;
    }

    .specs-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-bottom: 1px solid #e5e7eb;
    }

    .specs-cell {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .specs-cell i {
      color: #6b7280;
    }

    .specs-label {
      font-weight: 500;
      color: #374151;
    }

    .specs-value {
      color: #6b7280;
    }

    .contents-section {
      margin: 40px 0;
    }

    .contents-section h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 24px;
    }

    .contents-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .contents-item {
      padding: 12px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #374151;
    }

    .contents-item::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .flex-section {
        flex-direction: column !important;
      }

      .key-features-grid {
        grid-template-columns: 1fr;
      }

      .specs-row {
        grid-template-columns: 1fr;
      }
    }
  `
}; 