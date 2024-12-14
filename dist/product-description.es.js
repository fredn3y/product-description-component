var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const n = { default: "\n    .product-container {\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n      overflow: hidden;\n    }\n    .product-title {\n      font-size: 24px;\n      font-weight: 600;\n      color: #1a1a1a;\n    }\n    .product-description {\n      color: #4a4a4a;\n    }\n    .features-list li {\n      color: #4a4a4a;\n    }\n  ", modern: '\n    .product-container {\n      background: linear-gradient(145deg, #ffffff, #f5f5f5);\n      border-radius: 16px;\n      box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;\n      overflow: hidden;\n    }\n    .product-title {\n      font-size: 28px;\n      font-weight: 700;\n      color: #2d3748;\n      letter-spacing: -0.5px;\n    }\n    .product-description {\n      color: #4a5568;\n      font-size: 17px;\n    }\n    .features-list li {\n      color: #4a5568;\n      position: relative;\n      padding-left: 24px;\n    }\n    .features-list li::before {\n      content: "→";\n      position: absolute;\n      left: 0;\n      color: #4299e1;\n    }\n  ', minimal: "\n    .product-container {\n      background: none;\n      border: 1px solid #e2e8f0;\n      border-radius: 0;\n      overflow: hidden;\n    }\n    .product-title {\n      font-size: 24px;\n      font-weight: 500;\n      color: #000;\n      border-bottom: 2px solid #000;\n      padding-bottom: 8px;\n      margin-bottom: 24px;\n    }\n    .product-description {\n      color: #2d3748;\n      font-size: 16px;\n      line-height: 1.8;\n    }\n    .features-list {\n      list-style-type: none;\n      padding: 0;\n    }\n    .features-list li {\n      color: #2d3748;\n      padding: 8px 0;\n      border-bottom: 1px solid #e2e8f0;\n    }\n  ", dark: "\n    .product-container {\n      background: #1a202c;\n      border-radius: 12px;\n      box-shadow: 0 4px 6px rgba(0,0,0,0.2);\n      overflow: hidden;\n    }\n    .product-title {\n      font-size: 26px;\n      font-weight: 600;\n      color: #fff;\n    }\n    .product-description {\n      color: #cbd5e0;\n    }\n    .features-list li {\n      color: #cbd5e0;\n    }\n    .features-list li::marker {\n      color: #4299e1;\n    }\n  ", elegant: `
    .product-container {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 0;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      overflow: hidden;
      position: relative;
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
      font-size: 28px;
      font-weight: 600;
      color: #1a202c;
      font-family: 'Georgia', serif;
    }
    .product-description {
      color: #4a5568;
      font-size: 16px;
      line-height: 1.8;
      font-family: 'Georgia', serif;
    }
    .features-list li {
      color: #4a5568;
      padding: 4px 0;
      font-family: 'Georgia', serif;
    }
  `, "feature-heavy": '\n    .product-container {\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n      padding: 32px;\n      max-width: 1200px;\n      margin: 0 auto;\n    }\n\n    .product-intro {\n      margin-bottom: 40px;\n      color: #374151;\n      font-size: 1.125rem;\n      line-height: 1.75;\n    }\n\n    .key-features-section {\n      margin: 40px 0;\n    }\n\n    .key-features-section h2 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 24px;\n    }\n\n    .key-features-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n      gap: 24px;\n      margin-bottom: 40px;\n    }\n\n    .key-feature-item {\n      padding: 20px;\n      border: 1px solid #e5e7eb;\n      border-radius: 8px;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n\n    .key-feature-item i {\n      font-size: 1.5rem;\n      color: #3b82f6;\n    }\n\n    .flex-sections {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n      margin: 40px 0;\n    }\n\n    .flex-section {\n      display: flex;\n      align-items: center;\n      gap: 40px;\n    }\n\n    .flex-section:nth-child(even) {\n      flex-direction: row-reverse;\n    }\n\n    .flex-section-content {\n      flex: 1;\n    }\n\n    .flex-section-image {\n      flex: 1;\n      border-radius: 8px;\n      overflow: hidden;\n    }\n\n    .flex-section-image img {\n      width: 100%;\n      height: auto;\n      display: block;\n    }\n\n    .specs-table {\n      width: 100%;\n      margin: 40px 0;\n      border-collapse: separate;\n      border-spacing: 0;\n    }\n\n    .specs-table h2 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 24px;\n    }\n\n    .specs-row {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    .specs-cell {\n      padding: 16px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .specs-cell i {\n      color: #6b7280;\n    }\n\n    .specs-label {\n      font-weight: 500;\n      color: #374151;\n    }\n\n    .specs-value {\n      color: #6b7280;\n    }\n\n    .contents-section {\n      margin: 40px 0;\n    }\n\n    .contents-section h2 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 24px;\n    }\n\n    .contents-list {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .contents-item {\n      padding: 12px 0;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      color: #374151;\n    }\n\n    .contents-item::before {\n      content: "✓";\n      color: #10b981;\n      font-weight: bold;\n    }\n\n    @media (max-width: 768px) {\n      .flex-section {\n        flex-direction: column !important;\n      }\n\n      .key-features-grid {\n        grid-template-columns: 1fr;\n      }\n\n      .specs-row {\n        grid-template-columns: 1fr;\n      }\n    }\n  ' };
class e extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "_content");
    __publicField(this, "_error");
    __publicField(this, "_theme");
    __publicField(this, "_shadow");
    this._shadow = this.attachShadow({ mode: "open" }), this._content = {}, this._error = null, this._theme = "default", this.render();
  }
  static get observedAttributes() {
    return ["title", "description", "features", "image-url", "theme", "price", "currency"];
  }
  attributeChangedCallback(n2, e2, t) {
    e2 !== t && ("theme" === n2 && this.isValidTheme(t) ? this._theme = t : this._content[n2] = t ?? void 0, this.render());
  }
  isValidTheme(n2) {
    return null !== n2 && ["default", "modern", "minimal", "dark", "elegant", "feature-heavy"].includes(n2);
  }
  generateSchema() {
    const n2 = { "@context": "https://schema.org", "@type": "Product", name: this._content.title, description: this._content.description, image: this._content["image-url"] };
    if (this._content.features) try {
      const e2 = JSON.parse(this._content.features);
      e2.length > 0 && (n2.additionalProperty = e2.map((n3) => ({ "@type": "PropertyValue", name: n3 })));
    } catch (n3) {
      console.warn("Invalid features format");
    }
    return this._content.price && (n2.offers = { "@type": "Offer", price: this._content.price, priceCurrency: this._content.currency || "USD" }), JSON.stringify(n2);
  }
  generateFallbackContent() {
    try {
      const n2 = this._content.features ? JSON.parse(this._content.features) : [];
      return `
        <div class="product-seo-content">
          <h2>${this._content.title || ""}</h2>
          <p>${this._content.description || ""}</p>
          ${n2.length > 0 ? `
            <ul>
              ${n2.map((n3) => `<li>${n3}</li>`).join("")}
            </ul>
          ` : ""}
          ${this._content["image-url"] ? `
            <img src="${this._content["image-url"]}" 
                 alt="${this._content.title || "Product image"}"
                 width="800" height="600"
                 loading="lazy" />
          ` : ""}
        </div>
      `;
    } catch (n2) {
      return "";
    }
  }
  getThemeStyles() {
    return n[this._theme] || n.default;
  }
  render() {
    const n2 = `
      :host {
        display: block;
        font-family: var(--pd-font-family, system-ui, -apple-system, sans-serif);
        max-width: var(--pd-max-width, 800px);
        margin: 0 auto;
        padding: var(--pd-padding, 20px);
        box-sizing: border-box;
      }
      .product-seo-content {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .product-image {
        width: 100%;
        height: auto;
        max-height: var(--pd-image-max-height, 400px);
        object-fit: cover;
        display: block;
      }
      .product-content {
        padding: var(--pd-content-padding, 20px);
      }
      .product-title {
        margin: 0 0 16px 0;
        color: var(--pd-title-color, inherit);
        font-size: var(--pd-title-font-size, inherit);
        font-weight: var(--pd-title-font-weight, inherit);
      }
      .product-description {
        font-size: var(--pd-description-font-size, 16px);
        line-height: var(--pd-description-line-height, 1.6);
        margin: 0 0 20px 0;
        color: var(--pd-description-color, inherit);
      }
      .features-list {
        margin: 0;
        padding: 0 0 0 20px;
        list-style-position: outside;
      }
      .features-list li {
        margin: 8px 0;
        color: var(--pd-features-color, inherit);
      }
      .error-message {
        color: var(--pd-error-color, #dc2626);
        padding: 10px;
        background: var(--pd-error-bg, #fee2e2);
        border-radius: 4px;
        margin: 10px 0;
      }
      ${this.getThemeStyles()}
    `;
    try {
      const e2 = this._content.features ? JSON.parse(this._content.features) : [], t = document.createElement("script");
      t.type = "application/ld+json", t.textContent = this.generateSchema(), document.head.appendChild(t);
      let i = "";
      i = "feature-heavy" === this._theme ? `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ""}
            
            <!-- Intro Section -->
            <div class="product-intro" itemprop="description">
              ${this._content.description || ""}
            </div>

            <!-- Key Features Section -->
            <section class="key-features-section">
              <h2>Key Features</h2>
              <div class="key-features-grid">
                ${e2.map((n3) => `
                  <div class="key-feature-item" itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
                    <span itemprop="name">${n3}</span>
                  </div>
                `).join("")}
              </div>
            </section>

            <!-- Flex Sections -->
            <div class="flex-sections">
              <div class="flex-section">
                <div class="flex-section-content">
                  <h2 class="product-title" itemprop="name">${this._content.title || ""}</h2>
                  <p>${this._content.description || ""}</p>
                </div>
                ${this._content["image-url"] ? `
                  <div class="flex-section-image">
                    <img 
                      src="${this._content["image-url"]}" 
                      alt="${this._content.title || "Product image"}"
                      loading="lazy"
                      itemprop="image"
                    >
                  </div>
                ` : ""}
              </div>
            </div>

            <!-- Features & Specifications -->
            <section class="specs-table">
              <h2>Features & Specifications</h2>
              ${e2.map((n3, e3) => `
                <div class="specs-row">
                  <div class="specs-cell">
                    <span class="specs-label">Feature ${e3 + 1}</span>
                  </div>
                  <div class="specs-cell">
                    <span class="specs-value">${n3}</span>
                  </div>
                </div>
              `).join("")}
              ${this._content.price ? `
                <div class="specs-row">
                  <div class="specs-cell">
                    <span class="specs-label">Price</span>
                  </div>
                  <div class="specs-cell">
                    <span class="specs-value">${this._content.price} ${this._content.currency || "USD"}</span>
                  </div>
                </div>
              ` : ""}
            </section>

            <!-- Contents Section -->
            <section class="contents-section">
              <h2>Contents</h2>
              <ul class="contents-list">
                ${e2.map((n3) => `
                  <li class="contents-item">${n3}</li>
                `).join("")}
              </ul>
            </section>
          </article>
        ` : `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ""}
            ${this._content["image-url"] ? `
              <img 
                class="product-image" 
                src="${this._content["image-url"]}" 
                alt="${this._content.title || "Product image"}"
                loading="lazy"
                itemprop="image"
              >
            ` : ""}
            <div class="product-content">
              ${this._content.title ? `
                <h2 class="product-title" itemprop="name">${this._content.title}</h2>
              ` : ""}
              ${this._content.description ? `
                <p class="product-description" itemprop="description">${this._content.description}</p>
              ` : ""}
              ${e2.length > 0 ? `
                <ul class="features-list">
                  ${e2.map((n3) => `
                    <li itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
                      <span itemprop="name">${n3}</span>
                    </li>
                  `).join("")}
                </ul>
              ` : ""}
            </div>
          </article>
        `, this._shadow.innerHTML = `
        <style>${n2}</style>
        ${this.generateFallbackContent()}
        ${i}
      `;
    } catch (e2) {
      const t = e2 instanceof Error ? e2.message : "Unknown error";
      this._error = `Error rendering product description: ${t}`, this._shadow.innerHTML = `
        <style>${n2}</style>
        <div class="error-message">${this._error}</div>
      `;
    }
  }
}
customElements.define("product-description", e);
export {
  e as ProductDescription
};
//# sourceMappingURL=product-description.es.js.map
