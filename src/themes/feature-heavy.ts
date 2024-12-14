export const featureHeavyTheme = `
  .product-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: clamp(16px, 5%, 32px);
    max-width: 1200px;
    margin: 0 auto;
    font-family: var(--pd-font-family, inherit);
  }

  .product-intro {
    margin-bottom: 40px;
    color: var(--pd-description-color, #374151);
    font-size: var(--pd-description-font-size, 1.125rem);
    line-height: 1.75;
  }

  .key-features-section {
    margin: 40px 0;
  }

  .key-features-section h2 {
    font-size: var(--pd-title-font-size, 2rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin-bottom: 24px;
  }

  .key-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .key-feature-item {
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--pd-features-color, #374151);
  }

  .key-feature-item i {
    font-size: 1.5rem;
    color: #3b82f6;
  }

  .flex-sections {
    display: flex;
    flex-direction: column;
    gap: clamp(24px, 5vh, 40px);
    margin: 40px 0;
  }

  .flex-section {
    display: flex;
    align-items: center;
    gap: clamp(20px, 5%, 40px);
    flex-wrap: wrap;
  }

  .flex-section:nth-child(even) {
    flex-direction: row-reverse;
  }

  .flex-section-content {
    flex: 1 1 300px;
    min-width: 300px;
  }

  .flex-section-image {
    flex: 1 1 300px;
    min-width: 300px;
    border-radius: 8px;
    overflow: hidden;
  }

  .flex-section-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    display: block;
  }

  .specs-table {
    width: 100%;
    margin: 40px 0;
    border-collapse: separate;
    border-spacing: 0;
  }

  .specs-table h2 {
    font-size: var(--pd-title-font-size, 2rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin-bottom: 24px;
  }

  .specs-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px solid #e5e7eb;
  }

  .specs-cell {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .specs-cell i {
    color: #6b7280;
  }

  .specs-label {
    font-weight: 500;
    color: var(--pd-features-color, #374151);
  }

  .specs-value {
    color: var(--pd-description-color, #6b7280);
  }

  .contents-section {
    margin: 40px 0;
  }

  .contents-section h2 {
    font-size: var(--pd-title-font-size, 2rem);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1f2937);
    margin-bottom: 24px;
  }

  .contents-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contents-item {
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--pd-features-color, #374151);
  }

  .contents-item::before {
    content: "✓";
    color: #10b981;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .flex-section,
    .flex-section:nth-child(even) {
      flex-direction: column;
      gap: 24px;
    }

    .flex-section-content,
    .flex-section-image {
      width: 100%;
      min-width: 100%;
    }

    .key-features-grid {
      grid-template-columns: 1fr;
    }

    .specs-row {
      grid-template-columns: 1fr;
    }

    .key-features-section h2,
    .specs-table h2,
    .contents-section h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
    }
  }

  @media (max-width: 480px) {
    .product-container {
      padding: 16px;
    }

    .key-feature-item {
      padding: 16px;
    }

    .specs-cell {
      padding: 12px;
    }
  }
`; 