export const darkTheme = `
  .product-container {
    background: #1a202c;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    overflow: hidden;
    font-family: var(--pd-font-family, inherit);
  }
  .product-title {
    font-size: var(--pd-title-font-size, 26px);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #fff);
  }
  .product-description {
    color: var(--pd-description-color, #cbd5e0);
    font-size: var(--pd-description-font-size, inherit);
  }
  .features-list li {
    color: var(--pd-features-color, #cbd5e0);
  }
  .features-list li::marker {
    color: #4299e1;
  }
`; 