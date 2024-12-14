export const modernTheme = `
  .product-container {
    background: linear-gradient(145deg, #ffffff, #f5f5f5);
    border-radius: 16px;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    overflow: hidden;
    font-family: var(--pd-font-family, inherit);
  }
  .product-title {
    font-size: var(--pd-title-font-size, 28px);
    font-weight: var(--pd-title-font-weight, 700);
    color: var(--pd-title-color, #2d3748);
    letter-spacing: -0.5px;
  }
  .product-description {
    color: var(--pd-description-color, #4a5568);
    font-size: var(--pd-description-font-size, 17px);
  }
  .features-list li {
    color: var(--pd-features-color, #4a5568);
    position: relative;
    padding-left: 24px;
  }
  .features-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #4299e1;
  }
`; 