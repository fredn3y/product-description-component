export const simpleTheme = `
  /* Reset base styles */
  :host {
    all: initial;
    display: block;
    font-family: var(--pd-font-family, system-ui, -apple-system, sans-serif);
    max-width: var(--pd-max-width, 1200px);
    margin: 0 auto;
    padding: var(--pd-padding, 20px);
    box-sizing: border-box;
  }

  /* Container */
  .product-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    padding: clamp(24px, 5%, 48px);
    max-width: 1200px;
    margin: 0 auto;
    font-family: var(--pd-font-family, inherit);
  }

  /* Hide default elements */
  .product-content,
  .product-title,
  .product-description,
  .features-list,
  .product-image {
    display: none !important;
  }

  /* Introduction Section */
  .product-intro {
    display: block !important;
    font-size: var(--pd-description-font-size, 1.125rem);
    line-height: 1.75;
    color: var(--pd-description-color, #374151);
    margin-bottom: 64px;
    max-width: 70ch;
  }

  /* Product Highlights Section */
  .product-highlights {
    display: flex !important;
    flex-direction: column;
    gap: 64px;
    margin: 64px 0;
  }

  .highlight-block {
    display: flex !important;
    align-items: center;
    gap: clamp(32px, 6%, 64px);
    margin: 0;
  }

  .highlight-block:nth-child(even) {
    flex-direction: row-reverse;
  }

  .highlight-content {
    flex: 1 1 50%;
    min-width: 300px;
  }

  .highlight-image {
    flex: 1 1 50%;
    min-width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    aspect-ratio: 16/10;
  }

  .highlight-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .highlight-image:hover img {
    transform: scale(1.05);
  }

  h3.highlight-title {
    font-size: var(--pd-title-font-size, 1.75rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 20px 0;
    line-height: 1.3;
  }

  .highlight-description {
    color: var(--pd-description-color, #4b5563);
    font-size: var(--pd-description-font-size, 1.125rem);
    line-height: 1.7;
    margin: 0;
  }

  /* Specifications Section */
  .specifications-section {
    display: block !important;
    margin: 64px 0;
    background: #f8fafc;
    padding: 32px;
    border-radius: 12px;
  }

  h2.section-title {
    display: block !important;
    font-size: var(--pd-title-font-size, 2rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin: 0 0 32px 0;
    padding-bottom: 16px;
    border-bottom: 2px solid #e2e8f0;
  }

  .specs-table {
    display: grid !important;
    gap: 1px;
    background: #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
  }

  .specs-row {
    display: grid !important;
    grid-template-columns: minmax(200px, 1fr) 2fr;
    background: white;
  }

  .specs-label {
    display: block !important;
    padding: 16px 24px;
    font-weight: 500;
    color: var(--pd-title-color, #374151);
    background: #f1f5f9;
  }

  .specs-value {
    display: block !important;
    padding: 16px 24px;
    color: var(--pd-description-color, #4b5563);
    background: white;
  }

  /* Contents Section */
  .contents-section {
    display: block !important;
    margin: 64px 0;
  }

  .contents-list {
    display: grid !important;
    list-style: none;
    padding: 0;
    margin: 24px 0 0 0;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .contents-item {
    display: flex !important;
    padding: 16px 20px;
    background: #f8fafc;
    border-radius: 8px;
    color: var(--pd-features-color, #374151);
    align-items: center;
    gap: 12px;
    transition: all 0.2s ease;
  }

  .contents-item:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
  }

  .contents-item::before {
    content: "✓";
    color: #10b981;
    font-weight: bold;
    font-size: 1.1em;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .highlight-block,
    .highlight-block:nth-child(even) {
      flex-direction: column;
    }

    .highlight-content,
    .highlight-image {
      min-width: 100%;
    }
  }

  @media (max-width: 640px) {
    .product-container {
      padding: 24px;
    }

    .specs-row {
      grid-template-columns: 1fr;
    }

    .specs-label {
      border-right: none;
    }

    .contents-list {
      grid-template-columns: 1fr;
    }

    h2.section-title {
      font-size: 1.5rem;
    }

    .highlight-title {
      font-size: 1.25rem;
    }
  }
`; 