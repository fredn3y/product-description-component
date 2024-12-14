export const simpleTheme = `
  /* Override any base styles */
  .product-content, .product-title, .product-description {
    display: none !important;
  }

  /* Simple theme styles */
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
    max-width: 70ch;
    display: block !important;
  }

  /* Features & Specifications Section */
  .specifications-section {
    margin: 40px 0;
    display: block !important;
  }

  h2.section-title {
    font-size: var(--pd-title-font-size, 1.5rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 24px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e7eb;
    display: block !important;
  }

  .specs-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
    background: white;
    display: grid !important;
  }

  .specs-row {
    display: grid !important;
    grid-template-columns: minmax(200px, 1fr) 2fr;
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
    border-right: 1px solid #e5e7eb;
  }

  .specs-value {
    padding: 12px 16px;
    color: var(--pd-description-color, #4b5563);
    line-height: 1.5;
  }

  /* Contents Section */
  .contents-section {
    margin: 40px 0 0 0;
    display: block !important;
  }

  .contents-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .contents-item {
    padding: 12px 16px;
    color: var(--pd-description-color, #4b5563);
    display: flex !important;
    align-items: center;
    gap: 8px;
    background: #f9fafb;
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }

  .contents-item:hover {
    background: #f3f4f6;
  }

  .contents-item::before {
    content: "•";
    color: #6b7280;
    font-size: 1.5em;
    line-height: 1;
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
      border-right: none;
      border-bottom: 1px solid #e5e7eb;
    }

    .contents-list {
      grid-template-columns: 1fr;
    }
  }
`; 