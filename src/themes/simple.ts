export const simpleTheme = `
  .product-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    padding: clamp(24px, 5%, 48px);
    max-width: 1200px;
    margin: 0 auto;
    font-family: var(--pd-font-family, inherit);
  }

  /* Introduction Section */
  .product-intro {
    font-size: var(--pd-description-font-size, 1.125rem);
    line-height: 1.75;
    color: var(--pd-description-color, #374151);
    margin-bottom: 32px;
    max-width: 70ch;
  }

  /* Product Highlights Section */
  .product-highlights {
    margin: 32px 0;
  }

  .highlight-block {
    margin-bottom: 24px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;
  }

  h3.highlight-title {
    font-size: var(--pd-title-font-size, 1.25rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 12px 0;
  }

  .highlight-description {
    color: var(--pd-description-color, #4b5563);
    font-size: var(--pd-description-font-size, 1rem);
    line-height: 1.6;
    margin: 0;
  }

  .highlight-image {
    display: none;
  }

  /* Specifications Section */
  .specifications-section {
    margin: 32px 0;
  }

  h2.section-title {
    font-size: var(--pd-title-font-size, 1.5rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 20px 0;
    padding-bottom: 12px;
    border-bottom: 2px solid #e2e8f0;
  }

  .specs-table {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .specs-row {
    display: block;
    margin-bottom: 12px;
    color: var(--pd-description-color, #4b5563);
  }

  .specs-label {
    font-weight: 500;
    color: var(--pd-title-color, #374151);
    margin-right: 8px;
  }

  .specs-label::after {
    content: ":";
  }

  .specs-value {
    display: inline;
  }

  /* Contents Section */
  .contents-section {
    margin: 32px 0;
  }

  .contents-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contents-item {
    color: var(--pd-features-color, #374151);
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .contents-item::before {
    content: "•";
    color: #3b82f6;
    font-size: 1.5em;
    line-height: 1;
  }

  @media (max-width: 768px) {
    .product-container {
      padding: clamp(20px, 4%, 32px);
    }

    h2.section-title {
      font-size: clamp(1.25rem, 4vw, 1.5rem);
    }
  }

  @media (max-width: 480px) {
    .product-container {
      padding: 16px;
    }

    .highlight-block {
      padding: 16px;
    }
  }
`; 