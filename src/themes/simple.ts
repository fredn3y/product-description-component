export const simpleTheme = `
  .product-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 32px;
    max-width: 800px;
    margin: 0 auto;
    font-family: var(--pd-font-family, inherit);
  }

  /* Introduction Section */
  .product-intro {
    font-size: var(--pd-description-font-size, 1rem);
    line-height: 1.6;
    color: var(--pd-description-color, #374151);
    margin-bottom: 40px;
  }

  /* Specifications Table */
  .specifications-section {
    margin: 40px 0;
  }

  h2.section-title {
    font-size: var(--pd-title-font-size, 1.5rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 24px 0;
  }

  .specs-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
  }

  .specs-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid #e5e7eb;
  }

  .specs-row:last-child {
    border-bottom: none;
  }

  .specs-label {
    padding: 12px 16px;
    background: #f9fafb;
    font-weight: 500;
    color: var(--pd-title-color, #374151);
  }

  .specs-value {
    padding: 12px 16px;
    color: var(--pd-description-color, #4b5563);
  }

  /* Contents List */
  .contents-section {
    margin: 40px 0 0 0;
  }

  .contents-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contents-item {
    padding: 8px 0;
    color: var(--pd-description-color, #4b5563);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .contents-item::before {
    content: "•";
    color: #6b7280;
  }

  /* Responsive Design */
  @media (max-width: 640px) {
    .product-container {
      padding: 24px;
    }

    .specs-row {
      grid-template-columns: 1fr;
    }

    .specs-label {
      border-bottom: 1px solid #e5e7eb;
    }

    .specs-row:last-child .specs-label {
      border-bottom: 1px solid #e5e7eb;
    }
  }
`; 