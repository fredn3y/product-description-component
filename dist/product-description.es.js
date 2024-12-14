var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const n = { "feature-heavy": '\n  .product-container {\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    padding: clamp(24px, 5%, 48px);\n    max-width: 1200px;\n    margin: 0 auto;\n    font-family: var(--pd-font-family, inherit);\n  }\n\n  /* Introduction Section */\n  .product-intro {\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.75;\n    color: var(--pd-description-color, #374151);\n    margin-bottom: 64px;\n    max-width: 70ch;\n  }\n\n  /* Product Highlights Section */\n  .product-highlights {\n    margin: 64px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n  }\n\n  .highlight-block {\n    display: flex;\n    align-items: center;\n    gap: clamp(32px, 6%, 64px);\n    margin: 0;\n  }\n\n  .highlight-block:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  .highlight-content {\n    flex: 1 1 50%;\n    min-width: 300px;\n  }\n\n  .highlight-image {\n    flex: 1 1 50%;\n    min-width: 300px;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n    aspect-ratio: 16/10;\n  }\n\n  .highlight-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.3s ease;\n  }\n\n  .highlight-image:hover img {\n    transform: scale(1.05);\n  }\n\n  h3.highlight-title {\n    font-size: var(--pd-title-font-size, 1.75rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 20px 0;\n    line-height: 1.3;\n  }\n\n  .highlight-description {\n    color: var(--pd-description-color, #4b5563);\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.7;\n    margin: 0;\n  }\n\n  /* Specifications Section */\n  .specifications-section {\n    margin: 64px 0;\n    background: #f8fafc;\n    padding: 32px;\n    border-radius: 12px;\n  }\n\n  h2.section-title {\n    font-size: var(--pd-title-font-size, 2rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 32px 0;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #e2e8f0;\n  }\n\n  .specs-table {\n    display: grid;\n    gap: 1px;\n    background: #e2e8f0;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  .specs-row {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 2fr;\n    background: white;\n  }\n\n  .specs-label {\n    padding: 16px 24px;\n    font-weight: 500;\n    color: var(--pd-title-color, #374151);\n    background: #f1f5f9;\n  }\n\n  .specs-value {\n    padding: 16px 24px;\n    color: var(--pd-description-color, #4b5563);\n    background: white;\n  }\n\n  /* Contents Section */\n  .contents-section {\n    margin: 64px 0;\n  }\n\n  .contents-list {\n    list-style: none;\n    padding: 0;\n    margin: 24px 0 0 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n  }\n\n  .contents-item {\n    padding: 16px 20px;\n    background: #f8fafc;\n    border-radius: 8px;\n    color: var(--pd-features-color, #374151);\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    transition: all 0.2s ease;\n  }\n\n  .contents-item:hover {\n    background: #f1f5f9;\n    transform: translateY(-2px);\n  }\n\n  .contents-item::before {\n    content: "✓";\n    color: #10b981;\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n  @media (max-width: 1024px) {\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      gap: 32px;\n    }\n\n    h3.highlight-title {\n      font-size: clamp(1.5rem, 4vw, 1.75rem);\n    }\n\n    .specifications-section {\n      padding: 24px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .product-container {\n      padding: clamp(20px, 4%, 32px);\n    }\n\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      flex-direction: column;\n      gap: 24px;\n    }\n\n    .highlight-content,\n    .highlight-image {\n      width: 100%;\n      min-width: 100%;\n    }\n\n    .specs-row {\n      grid-template-columns: 1fr;\n    }\n\n    .specs-label {\n      background: #f1f5f9;\n    }\n\n    .contents-list {\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n\n    h2.section-title {\n      font-size: clamp(1.5rem, 5vw, 2rem);\n    }\n  }\n\n  @media (max-width: 480px) {\n    .product-container {\n      padding: 16px;\n    }\n\n    .product-highlights {\n      gap: 48px;\n    }\n\n    .specifications-section {\n      padding: 16px;\n      margin: 48px 0;\n    }\n\n    .specs-label,\n    .specs-value {\n      padding: 12px 16px;\n    }\n\n    .contents-list {\n      grid-template-columns: 1fr;\n    }\n\n    .contents-item {\n      padding: 12px 16px;\n    }\n  }\n', simple: '\n  .product-container {\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    padding: clamp(24px, 5%, 48px);\n    max-width: 1200px;\n    margin: 0 auto;\n    font-family: var(--pd-font-family, inherit);\n  }\n\n  /* Introduction Section */\n  .product-intro {\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.75;\n    color: var(--pd-description-color, #374151);\n    margin-bottom: 64px;\n    max-width: 70ch;\n  }\n\n  /* Product Highlights Section */\n  .product-highlights {\n    margin: 64px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n  }\n\n  .highlight-block {\n    display: flex;\n    align-items: center;\n    gap: clamp(32px, 6%, 64px);\n    margin: 0;\n  }\n\n  .highlight-block:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  .highlight-content {\n    flex: 1 1 50%;\n    min-width: 300px;\n  }\n\n  .highlight-image {\n    flex: 1 1 50%;\n    min-width: 300px;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n    aspect-ratio: 16/10;\n  }\n\n  .highlight-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.3s ease;\n  }\n\n  .highlight-image:hover img {\n    transform: scale(1.05);\n  }\n\n  h3.highlight-title {\n    font-size: var(--pd-title-font-size, 1.75rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 20px 0;\n    line-height: 1.3;\n  }\n\n  .highlight-description {\n    color: var(--pd-description-color, #4b5563);\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.7;\n    margin: 0;\n  }\n\n  /* Specifications Section */\n  .specifications-section {\n    margin: 64px 0;\n    background: #f8fafc;\n    padding: 32px;\n    border-radius: 12px;\n  }\n\n  h2.section-title {\n    font-size: var(--pd-title-font-size, 2rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 32px 0;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #e2e8f0;\n  }\n\n  .specs-table {\n    display: grid;\n    gap: 1px;\n    background: #e2e8f0;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  .specs-row {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 2fr;\n    background: white;\n  }\n\n  .specs-label {\n    padding: 16px 24px;\n    font-weight: 500;\n    color: var(--pd-title-color, #374151);\n    background: #f1f5f9;\n  }\n\n  .specs-value {\n    padding: 16px 24px;\n    color: var(--pd-description-color, #4b5563);\n    background: white;\n  }\n\n  /* Contents Section */\n  .contents-section {\n    margin: 64px 0;\n  }\n\n  .contents-list {\n    list-style: none;\n    padding: 0;\n    margin: 24px 0 0 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n  }\n\n  .contents-item {\n    padding: 16px 20px;\n    background: #f8fafc;\n    border-radius: 8px;\n    color: var(--pd-features-color, #374151);\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    transition: all 0.2s ease;\n  }\n\n  .contents-item:hover {\n    background: #f1f5f9;\n    transform: translateY(-2px);\n  }\n\n  .contents-item::before {\n    content: "✓";\n    color: #10b981;\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n  @media (max-width: 1024px) {\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      gap: 32px;\n    }\n\n    h3.highlight-title {\n      font-size: clamp(1.5rem, 4vw, 1.75rem);\n    }\n\n    .specifications-section {\n      padding: 24px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .product-container {\n      padding: clamp(20px, 4%, 32px);\n    }\n\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      flex-direction: column;\n      gap: 24px;\n    }\n\n    .highlight-content,\n    .highlight-image {\n      width: 100%;\n      min-width: 100%;\n    }\n\n    .specs-row {\n      grid-template-columns: 1fr;\n    }\n\n    .specs-label {\n      background: #f1f5f9;\n    }\n\n    .contents-list {\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n\n    h2.section-title {\n      font-size: clamp(1.5rem, 5vw, 2rem);\n    }\n  }\n\n  @media (max-width: 480px) {\n    .product-container {\n      padding: 16px;\n    }\n\n    .product-highlights {\n      gap: 48px;\n    }\n\n    .specifications-section {\n      padding: 16px;\n      margin: 48px 0;\n    }\n\n    .specs-label,\n    .specs-value {\n      padding: 12px 16px;\n    }\n\n    .contents-list {\n      grid-template-columns: 1fr;\n    }\n\n    .contents-item {\n      padding: 12px 16px;\n    }\n  }\n' };
const _t = class _t extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "_content");
    __publicField(this, "_error");
    __publicField(this, "_theme");
    __publicField(this, "_shadow");
    this._shadow = this.attachShadow({ mode: "open" }), this._content = {}, this._error = null, this._theme = "simple", this.render();
  }
  static get observedAttributes() {
    return ["title", "description", "features", "image-url", "theme", "price", "currency", "data"];
  }
  attributeChangedCallback(n2, t2, e) {
    t2 !== e && ("theme" === n2 && this.isValidTheme(e) ? this._theme = e : this._content[n2] = e ?? void 0, this.render());
  }
  isValidTheme(n2) {
    return null !== n2 && ["feature-heavy", "simple"].includes(n2);
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
    return this._theme && n[this._theme] ? n[this._theme] : (console.warn(`Theme "${this._theme}" not found, defaulting to simple theme`), n.simple);
  }
  render() {
    var _a, _b;
    console.log("Rendering with theme:", this._theme), console.log("Theme styles:", n[this._theme]);
    const e = `
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
      const n2 = this._content.data ? JSON.parse(this._content.data) : {};
      console.log("Parsed data:", n2);
      const t2 = document.createElement("script");
      t2.type = "application/ld+json", t2.textContent = this.generateSchema(), document.head.appendChild(t2);
      let i = "";
      "feature-heavy" === this._theme ? (console.log("Using feature-heavy template"), i = `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ""}
            
            <!-- Introduction Section -->
            <div class="product-intro" itemprop="description">
              ${n2.description || n2.introduction || n2.productName || this._content.description || ""}
            </div>

            <!-- Product Highlights Section -->
            <section class="product-highlights">
              ${Object.entries(n2.productHighlights || {}).map(([n3, t3]) => `
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

            <!-- Features & Specifications Section -->
            <section class="specifications-section">
              <h2 class="section-title">Features & Specifications</h2>
              <div class="specs-table">
                ${Object.entries(n2.specifications ?? {}).map(([n3, t3]) => `
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
                ${(((_a = n2.contents) == null ? void 0 : _a.colors) ?? []).map((n3) => `
                  <li class="contents-item">${n3}</li>
                `).join("")}
              </ul>
            </section>
          </article>
        `) : (console.log("Using simple template"), i = `
          <article class="product-container" itemscope itemtype="https://schema.org/Product">
            ${this._error ? `<div class="error-message">${this._error}</div>` : ""}
            
            <!-- Introduction Section -->
            <div class="product-intro" itemprop="description">
              ${n2.description || n2.introduction || n2.productName || this._content.description || ""}
            </div>

            <!-- Product Highlights Section -->
            <section class="product-highlights">
              ${Object.entries(n2.productHighlights || {}).map(([n3, t3]) => `
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

            <!-- Features & Specifications Section -->
            <section class="specifications-section">
              <h2 class="section-title">Features & Specifications</h2>
              <div class="specs-table">
                ${Object.entries(n2.specifications ?? {}).map(([n3, t3]) => `
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
                ${(((_b = n2.contents) == null ? void 0 : _b.colors) ?? []).map((n3) => `
                  <li class="contents-item">${n3}</li>
                `).join("")}
              </ul>
            </section>
          </article>
        `), console.log("Final generated content:", i), this._shadow.innerHTML = `
        <style>${e}</style>
        ${this.generateFallbackContent()}
        ${i}
      `;
    } catch (n2) {
      const t2 = n2 instanceof Error ? n2.message : "Unknown error";
      this._error = `Error rendering product description: ${t2}`, console.error("Render error:", this._error), this._shadow.innerHTML = `
        <style>${e}</style>
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
