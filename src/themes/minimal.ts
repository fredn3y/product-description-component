export const minimalTheme = `
  .product-container {
    background: none;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    overflow: hidden;
    font-family: var(--pd-font-family, inherit);
  }
  .product-title {
    font-size: var(--pd-title-font-size, 24px);
    font-weight: var(--pd-title-font-weight, 500);
    color: var(--pd-title-color, #000);
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  .product-description {
    color: var(--pd-description-color, #2d3748);
    font-size: var(--pd-description-font-size, 16px);
    line-height: 1.8;
  }
  .features-list {
    list-style-type: none;
    padding: 0;
  }
  .features-list li {
    color: var(--pd-features-color, #2d3748);
    padding: 8px 0;
    border-bottom: 1px solid #e2e8f0;
  }
`; 