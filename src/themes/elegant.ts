export const elegantTheme = `
  .product-container {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;
    font-family: var(--pd-font-family, 'Georgia', serif);
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
    font-size: var(--pd-title-font-size, 28px);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1a202c);
  }
  .product-description {
    color: var(--pd-description-color, #4a5568);
    font-size: var(--pd-description-font-size, 16px);
    line-height: 1.8;
  }
  .features-list li {
    color: var(--pd-features-color, #4a5568);
    padding: 4px 0;
  }
`; 