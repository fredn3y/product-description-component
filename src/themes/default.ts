export const defaultTheme = `
  .product-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    font-family: var(--pd-font-family, inherit);
  }
  .product-title {
    font-size: var(--pd-title-font-size, 24px);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1a1a1a);
  }
  .product-description {
    color: var(--pd-description-color, #4a4a4a);
    font-size: var(--pd-description-font-size, inherit);
  }
  .features-list li {
    color: var(--pd-features-color, #4a4a4a);
  }
`; 