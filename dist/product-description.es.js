var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const n = { default: "\n  .product-container {\n    background: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    overflow: hidden;\n    font-family: var(--pd-font-family, inherit);\n  }\n  .product-title {\n    font-size: var(--pd-title-font-size, 24px);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1a1a1a);\n  }\n  .product-description {\n    color: var(--pd-description-color, #4a4a4a);\n    font-size: var(--pd-description-font-size, inherit);\n  }\n  .features-list li {\n    color: var(--pd-features-color, #4a4a4a);\n  }\n", modern: '\n  .product-container {\n    background: linear-gradient(145deg, #ffffff, #f5f5f5);\n    border-radius: 16px;\n    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;\n    overflow: hidden;\n    font-family: var(--pd-font-family, inherit);\n  }\n  .product-title {\n    font-size: var(--pd-title-font-size, 28px);\n    font-weight: var(--pd-title-font-weight, 700);\n    color: var(--pd-title-color, #2d3748);\n    letter-spacing: -0.5px;\n  }\n  .product-description {\n    color: var(--pd-description-color, #4a5568);\n    font-size: var(--pd-description-font-size, 17px);\n  }\n  .features-list li {\n    color: var(--pd-features-color, #4a5568);\n    position: relative;\n    padding-left: 24px;\n  }\n  .features-list li::before {\n    content: "→";\n    position: absolute;\n    left: 0;\n    color: #4299e1;\n  }\n', minimal: "\n  .product-container {\n    background: none;\n    border: 1px solid #e2e8f0;\n    border-radius: 0;\n    overflow: hidden;\n    font-family: var(--pd-font-family, inherit);\n  }\n  .product-title {\n    font-size: var(--pd-title-font-size, 24px);\n    font-weight: var(--pd-title-font-weight, 500);\n    color: var(--pd-title-color, #000);\n    border-bottom: 2px solid #000;\n    padding-bottom: 8px;\n    margin-bottom: 24px;\n  }\n  .product-description {\n    color: var(--pd-description-color, #2d3748);\n    font-size: var(--pd-description-font-size, 16px);\n    line-height: 1.8;\n  }\n  .features-list {\n    list-style-type: none;\n    padding: 0;\n  }\n  .features-list li {\n    color: var(--pd-features-color, #2d3748);\n    padding: 8px 0;\n    border-bottom: 1px solid #e2e8f0;\n  }\n", dark: "\n  .product-container {\n    background: #1a202c;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.2);\n    overflow: hidden;\n    font-family: var(--pd-font-family, inherit);\n  }\n  .product-title {\n    font-size: var(--pd-title-font-size, 26px);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #fff);\n  }\n  .product-description {\n    color: var(--pd-description-color, #cbd5e0);\n    font-size: var(--pd-description-font-size, inherit);\n  }\n  .features-list li {\n    color: var(--pd-features-color, #cbd5e0);\n  }\n  .features-list li::marker {\n    color: #4299e1;\n  }\n", elegant: `
  .product-container {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;
    font-family: var(--pd-font-family, 'Georgia', serif);
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
    font-size: var(--pd-title-font-size, 28px);
    font-weight: var(--pd-title-font-weight, 600);
    color: var(--pd-title-color, #1a202c);
  }
  .product-description {
    color: var(--pd-description-color, #4a5568);
    font-size: var(--pd-description-font-size, 16px);
    line-height: 1.8;
  }
  .features-list li {
    color: var(--pd-features-color, #4a5568);
    padding: 4px 0;
  }
`, "feature-heavy": '\n  .product-container {\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    padding: clamp(24px, 5%, 48px);\n    max-width: 1200px;\n    margin: 0 auto;\n    font-family: var(--pd-font-family, inherit);\n  }\n\n  /* Introduction Section */\n  .product-intro {\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.75;\n    color: var(--pd-description-color, #374151);\n    margin-bottom: 64px;\n    max-width: 70ch;\n  }\n\n  /* Product Highlights Section */\n  .product-highlights {\n    margin: 64px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n  }\n\n  .highlight-block {\n    display: flex;\n    align-items: center;\n    gap: clamp(32px, 6%, 64px);\n    margin: 0;\n  }\n\n  .highlight-block:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  .highlight-content {\n    flex: 1 1 50%;\n    min-width: 300px;\n  }\n\n  .highlight-image {\n    flex: 1 1 50%;\n    min-width: 300px;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n    aspect-ratio: 16/10;\n  }\n\n  .highlight-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.3s ease;\n  }\n\n  .highlight-image:hover img {\n    transform: scale(1.05);\n  }\n\n  h3.highlight-title {\n    font-size: var(--pd-title-font-size, 1.75rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 20px 0;\n    line-height: 1.3;\n  }\n\n  .highlight-description {\n    color: var(--pd-description-color, #4b5563);\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.7;\n    margin: 0;\n  }\n\n  /* Specifications Section */\n  .specifications-section {\n    margin: 64px 0;\n    background: #f8fafc;\n    padding: 32px;\n    border-radius: 12px;\n  }\n\n  h2.section-title {\n    font-size: var(--pd-title-font-size, 2rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 32px 0;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #e2e8f0;\n  }\n\n  .specs-table {\n    display: grid;\n    gap: 1px;\n    background: #e2e8f0;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  .specs-row {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 2fr;\n    background: white;\n  }\n\n  .specs-label {\n    padding: 16px 24px;\n    font-weight: 500;\n    color: var(--pd-title-color, #374151);\n    background: #f1f5f9;\n  }\n\n  .specs-value {\n    padding: 16px 24px;\n    color: var(--pd-description-color, #4b5563);\n    background: white;\n  }\n\n  /* Contents Section */\n  .contents-section {\n    margin: 64px 0;\n  }\n\n  .contents-list {\n    list-style: none;\n    padding: 0;\n    margin: 24px 0 0 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n  }\n\n  .contents-item {\n    padding: 16px 20px;\n    background: #f8fafc;\n    border-radius: 8px;\n    color: var(--pd-features-color, #374151);\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    transition: all 0.2s ease;\n  }\n\n  .contents-item:hover {\n    background: #f1f5f9;\n    transform: translateY(-2px);\n  }\n\n  .contents-item::before {\n    content: "✓";\n    color: #10b981;\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n  @media (max-width: 1024px) {\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      gap: 32px;\n    }\n\n    h3.highlight-title {\n      font-size: clamp(1.5rem, 4vw, 1.75rem);\n    }\n\n    .specifications-section {\n      padding: 24px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .product-container {\n      padding: clamp(20px, 4%, 32px);\n    }\n\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      flex-direction: column;\n      gap: 24px;\n    }\n\n    .highlight-content,\n    .highlight-image {\n      width: 100%;\n      min-width: 100%;\n    }\n\n    .specs-row {\n      grid-template-columns: 1fr;\n    }\n\n    .specs-label {\n      background: #f1f5f9;\n    }\n\n    .contents-list {\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n\n    h2.section-title {\n      font-size: clamp(1.5rem, 5vw, 2rem);\n    }\n  }\n\n  @media (max-width: 480px) {\n    .product-container {\n      padding: 16px;\n    }\n\n    .product-highlights {\n      gap: 48px;\n    }\n\n    .specifications-section {\n      padding: 16px;\n      margin: 48px 0;\n    }\n\n    .specs-label,\n    .specs-value {\n      padding: 12px 16px;\n    }\n\n    .contents-list {\n      grid-template-columns: 1fr;\n    }\n\n    .contents-item {\n      padding: 12px 16px;\n    }\n  }\n' };
const _t = class _t extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "_content");
    __publicField(this, "_error");
    __publicField(this, "_theme");
    __publicField(this, "_shadow");
    this._shadow = this.attachShadow({ mode: "open" }), this._content = {}, this._error = null, this._theme = "default", this.render();
  }
  static get observedAttributes() {
    return ["title", "description", "features", "image-url", "theme", "price", "currency", "data"];
  }
  attributeChangedCallback(n2, t2, e) {
    t2 !== e && ("theme" === n2 && this.isValidTheme(e) ? this._theme = e : this._content[n2] = e ?? void 0, this.render());
  }
  isValidTheme(n2) {
    return null !== n2 && ["default", "modern", "minimal", "dark", "elegant", "feature-heavy"].includes(n2);
  }
  generateSchema() {
    const n2 = { "@context": "https://schema.org", "@type": "Product", name: this._content.title, description: this._content.description, image: this._content["image-url"] };
    if (this._content.features) try {
      const t2 = JSON.parse(this._content.features);
      t2.length > 0 && (n2.additionalProperty = t2.map((n3) => ({ "@type": "PropertyValue", name: n3 })));
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
    var _a;
    const n2 = `
      ${_t.globalStyles}
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
      const t2 = this._content.data ? JSON.parse(this._content.data) : {}, e = document.createElement("script");
      e.type = "application/ld+json", e.textContent = this.generateSchema(), document.head.appendChild(e);
      let i = "";
      i = "feature-heavy" === this._theme ? `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ""}
            
            <!-- Introduction Section -->
            <div class="product-intro" itemprop="description">
              ${this._content.description || ""}
            </div>

            <!-- Product Highlights Section -->
            <section class="product-highlights">
              ${Object.entries(t2.productHighlights || {}).map(([n3, t3]) => `
                <div class="highlight-block">
                  <div class="highlight-content">
                    <h3 class="highlight-title">${t3.title}</h3>
                    <p class="highlight-description">${t3.description}</p>
                  </div>
                  ${t3.image ? `
                    <div class="highlight-image">
                      <img src="${t3.image}" alt="${t3.title}" loading="lazy">
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </section>

            <!-- Specifications Section -->
            <section class="specifications-section">
              <h2 class="section-title">Features & Specifications</h2>
              <div class="specs-table">
                ${Object.entries(t2.specifications || {}).map(([n3, t3]) => `
                  <div class="specs-row">
                    <div class="specs-label">${n3.charAt(0).toUpperCase() + n3.slice(1)}</div>
                    <div class="specs-value">${t3}</div>
                  </div>
                `).join("")}
              </div>
            </section>

            <!-- Contents Section -->
            <section class="contents-section">
              <h2 class="section-title">Package Contents</h2>
              <ul class="contents-list">
                ${(((_a = t2.contents) == null ? void 0 : _a.colors) || []).map((n3) => `
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
            </div>
          </article>
        `, this._shadow.innerHTML = `
        <style>${n2}</style>
        ${this.generateFallbackContent()}
        ${i}
      `;
    } catch (t2) {
      const e = t2 instanceof Error ? t2.message : "Unknown error";
      this._error = `Error rendering product description: ${e}`, this._shadow.innerHTML = `
        <style>${n2}</style>
        <div class="error-message">${this._error}</div>
      `;
    }
  }
  static setGlobalStyles(n2) {
    this.globalStyles = `
      :host {
        ${n2.fontFamily ? `--pd-font-family: ${n2.fontFamily};` : ""}
        ${n2.titleColor ? `--pd-title-color: ${n2.titleColor};` : ""}
        ${n2.titleFontSize ? `--pd-title-font-size: ${n2.titleFontSize};` : ""}
        ${n2.descriptionColor ? `--pd-description-color: ${n2.descriptionColor};` : ""}
        ${n2.descriptionFontSize ? `--pd-description-font-size: ${n2.descriptionFontSize};` : ""}
        ${n2.featuresColor ? `--pd-features-color: ${n2.featuresColor};` : ""}
      }
    `, document.querySelectorAll("product-description").forEach((n3) => {
      n3 instanceof _t && n3.render();
    });
  }
  static resetGlobalStyles() {
    this.globalStyles = "", document.querySelectorAll("product-description").forEach((n2) => {
      n2 instanceof _t && n2.render();
    });
  }
};
__publicField(_t, "globalStyles", "");
let t = _t;
customElements.define("product-description", t);
export {
  t as ProductDescription
};
//# sourceMappingURL=product-description.es.js.map
