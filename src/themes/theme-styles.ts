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
  `
}; 