var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class n {
  debug(n2, ...t2) {
    console.log(`[Debug] ${n2}`, ...t2);
  }
  error(n2, t2) {
    console.error(`[Error] ${n2}`, t2);
  }
  warn(n2, ...t2) {
    console.warn(`[Warning] ${n2}`, ...t2);
  }
}
class t {
  constructor() {
    __publicField(this, "logger");
    this.logger = new n();
  }
  handleRenderError(n2) {
    const t2 = `Error rendering product description: ${n2 instanceof Error ? n2.message : "Unknown error"}`;
    return this.logger.error(t2, n2), t2;
  }
  handleJSONParseError(n2) {
    this.logger.error("JSON Parse Error", n2);
  }
}
class e {
  constructor(t2) {
    __publicField(this, "content");
    __publicField(this, "logger");
    this.content = t2, this.logger = new n();
  }
  generateProductSchema() {
    const n2 = { "@context": "https://schema.org", "@type": "Product", name: this.content.title, description: this.content.description, image: this.content["image-url"] };
    if (this.content.features) try {
      const t2 = JSON.parse(this.content.features);
      t2.length > 0 && (n2.additionalProperty = t2.map((n3) => ({ "@type": "PropertyValue", name: n3 })));
    } catch (n3) {
      this.logger.warn("Invalid features format");
    }
    return this.content.price && (n2.offers = { "@type": "Offer", price: this.content.price, priceCurrency: this.content.currency || "USD" }), JSON.stringify(n2);
  }
  generateFallbackContent() {
    try {
      const n2 = this.content.features ? JSON.parse(this.content.features) : [];
      return `
        <div class="product-seo-content">
          <h2>${this.content.title || ""}</h2>
          <p>${this.content.description || ""}</p>
          ${n2.length > 0 ? `
            <ul>
              ${n2.map((n3) => `<li>${n3}</li>`).join("")}
            </ul>
          ` : ""}
          ${this.content["image-url"] ? `
            <img src="${this.content["image-url"]}" 
                 alt="${this.content.title || "Product image"}"
                 width="800" height="600"
                 loading="lazy" />
          ` : ""}
        </div>
      `;
    } catch (n2) {
      return this.logger.error("Error generating fallback content", n2), "";
    }
  }
}
class i {
  constructor() {
    __publicField(this, "logger");
    this.logger = new n();
  }
  generateHighlightsSection(n2) {
    return this.logger.debug("Generating highlights section"), Object.entries(n2.productHighlights || {}).map(([n3, t2]) => `
      <div class="highlight-block">
        <div class="highlight-content">
          <h3 class="highlight-title">${t2.title}</h3>
          <p class="highlight-description">${t2.description}</p>
        </div>
        ${t2.image ? `
          <div class="highlight-image">
            <img src="${t2.image}" alt="${t2.title}" loading="lazy">
          </div>
        ` : ""}
      </div>
    `).join("");
  }
  generateSpecificationsSection(n2) {
    return this.logger.debug("Generating specifications section"), Object.entries(n2.specifications ?? {}).map(([n3, t2]) => `
      <div class="specs-row">
        <div class="specs-label">${n3.charAt(0).toUpperCase() + n3.slice(1)}</div>
        <div class="specs-value">${t2}</div>
      </div>
    `).join("");
  }
  generateContentsSection(n2) {
    var _a;
    return this.logger.debug("Generating contents section"), (((_a = n2.contents) == null ? void 0 : _a.colors) ?? []).map((n3) => `
      <li class="contents-item">${n3}</li>
    `).join("");
  }
  generateFullTemplate(n2) {
    return this.logger.debug("Generating full template", n2), `
      <article class="product-container" itemscope itemtype="https://schema.org/Product">
        <!-- Introduction Section -->
        <div class="product-intro" itemprop="description">
          ${n2.description || n2.introduction || n2.productName || ""}
        </div>

        <!-- Product Highlights Section -->
        <section class="product-highlights">
          ${this.generateHighlightsSection(n2)}
        </section>

        <!-- Features & Specifications Section -->
        <section class="specifications-section">
          <h2 class="section-title">Features & Specifications</h2>
          <div class="specs-table">
            ${this.generateSpecificationsSection(n2)}
          </div>
        </section>

        <!-- Contents Section -->
        <section class="contents-section">
          <h2 class="section-title">Package Contents</h2>
          <ul class="contents-list">
            ${this.generateContentsSection(n2)}
          </ul>
        </section>
      </article>
    `;
  }
}
const o = { "feature-heavy": '\n  .product-container {\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    padding: clamp(24px, 5%, 48px);\n    max-width: 1200px;\n    margin: 0 auto;\n    font-family: var(--pd-font-family, inherit);\n  }\n\n  /* Introduction Section */\n  .product-intro {\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.75;\n    color: var(--pd-description-color, #374151);\n    margin-bottom: 64px;\n    max-width: 70ch;\n  }\n\n  /* Product Highlights Section */\n  .product-highlights {\n    margin: 64px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n  }\n\n  .highlight-block {\n    display: flex;\n    align-items: center;\n    gap: clamp(32px, 6%, 64px);\n    margin: 0;\n  }\n\n  .highlight-block:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  .highlight-content {\n    flex: 1 1 50%;\n    min-width: 300px;\n  }\n\n  .highlight-image {\n    flex: 1 1 50%;\n    min-width: 300px;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n    aspect-ratio: 16/10;\n  }\n\n  .highlight-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.3s ease;\n  }\n\n  .highlight-image:hover img {\n    transform: scale(1.05);\n  }\n\n  h3.highlight-title {\n    font-size: var(--pd-title-font-size, 1.75rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 20px 0;\n    line-height: 1.3;\n  }\n\n  .highlight-description {\n    color: var(--pd-description-color, #4b5563);\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.7;\n    margin: 0;\n  }\n\n  /* Specifications Section */\n  .specifications-section {\n    margin: 64px 0;\n    background: #f8fafc;\n    padding: 32px;\n    border-radius: 12px;\n  }\n\n  h2.section-title {\n    font-size: var(--pd-title-font-size, 2rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 32px 0;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #e2e8f0;\n  }\n\n  .specs-table {\n    display: grid;\n    gap: 1px;\n    background: #e2e8f0;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  .specs-row {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 2fr;\n    background: white;\n  }\n\n  .specs-label {\n    padding: 16px 24px;\n    font-weight: 500;\n    color: var(--pd-title-color, #374151);\n    background: #f1f5f9;\n  }\n\n  .specs-value {\n    padding: 16px 24px;\n    color: var(--pd-description-color, #4b5563);\n    background: white;\n  }\n\n  /* Contents Section */\n  .contents-section {\n    margin: 64px 0;\n  }\n\n  .contents-list {\n    list-style: none;\n    padding: 0;\n    margin: 24px 0 0 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n  }\n\n  .contents-item {\n    padding: 16px 20px;\n    background: #f8fafc;\n    border-radius: 8px;\n    color: var(--pd-features-color, #374151);\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    transition: all 0.2s ease;\n  }\n\n  .contents-item:hover {\n    background: #f1f5f9;\n    transform: translateY(-2px);\n  }\n\n  .contents-item::before {\n    content: "✓";\n    color: #10b981;\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n  @media (max-width: 1024px) {\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      gap: 32px;\n    }\n\n    h3.highlight-title {\n      font-size: clamp(1.5rem, 4vw, 1.75rem);\n    }\n\n    .specifications-section {\n      padding: 24px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .product-container {\n      padding: clamp(20px, 4%, 32px);\n    }\n\n    .highlight-block,\n    .highlight-block:nth-child(even) {\n      flex-direction: column;\n      gap: 24px;\n    }\n\n    .highlight-content,\n    .highlight-image {\n      width: 100%;\n      min-width: 100%;\n    }\n\n    .specs-row {\n      grid-template-columns: 1fr;\n    }\n\n    .specs-label {\n      background: #f1f5f9;\n    }\n\n    .contents-list {\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n\n    h2.section-title {\n      font-size: clamp(1.5rem, 5vw, 2rem);\n    }\n  }\n\n  @media (max-width: 480px) {\n    .product-container {\n      padding: 16px;\n    }\n\n    .product-highlights {\n      gap: 48px;\n    }\n\n    .specifications-section {\n      padding: 16px;\n      margin: 48px 0;\n    }\n\n    .specs-label,\n    .specs-value {\n      padding: 12px 16px;\n    }\n\n    .contents-list {\n      grid-template-columns: 1fr;\n    }\n\n    .contents-item {\n      padding: 12px 16px;\n    }\n  }\n', simple: '\n  .product-container {\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    padding: clamp(24px, 5%, 48px);\n    max-width: 1200px;\n    margin: 0 auto;\n    font-family: var(--pd-font-family, inherit);\n  }\n\n  /* Introduction Section */\n  .product-intro {\n    font-size: var(--pd-description-font-size, 1.125rem);\n    line-height: 1.75;\n    color: var(--pd-description-color, #374151);\n    margin-bottom: 32px;\n    max-width: 70ch;\n  }\n\n  /* Product Highlights Section */\n  .product-highlights {\n    margin: 32px 0;\n  }\n\n  .highlight-block {\n    margin-bottom: 24px;\n    padding: 20px;\n    background: #f8fafc;\n    border-radius: 8px;\n  }\n\n  h3.highlight-title {\n    font-size: var(--pd-title-font-size, 1.25rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 12px 0;\n  }\n\n  .highlight-description {\n    color: var(--pd-description-color, #4b5563);\n    font-size: var(--pd-description-font-size, 1rem);\n    line-height: 1.6;\n    margin: 0;\n  }\n\n  .highlight-image {\n    display: none;\n  }\n\n  /* Specifications Section */\n  .specifications-section {\n    margin: 32px 0;\n  }\n\n  h2.section-title {\n    font-size: var(--pd-title-font-size, 1.5rem);\n    font-weight: var(--pd-title-font-weight, 600);\n    color: var(--pd-title-color, #1f2937);\n    margin: 0 0 20px 0;\n    padding-bottom: 12px;\n    border-bottom: 2px solid #e2e8f0;\n  }\n\n  .specs-table {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .specs-row {\n    display: block;\n    margin-bottom: 12px;\n    color: var(--pd-description-color, #4b5563);\n  }\n\n  .specs-label {\n    font-weight: 500;\n    color: var(--pd-title-color, #374151);\n    margin-right: 8px;\n  }\n\n  .specs-label::after {\n    content: ":";\n  }\n\n  .specs-value {\n    display: inline;\n  }\n\n  /* Contents Section */\n  .contents-section {\n    margin: 32px 0;\n  }\n\n  .contents-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .contents-item {\n    color: var(--pd-features-color, #374151);\n    padding: 8px 0;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .contents-item::before {\n    content: "•";\n    color: #3b82f6;\n    font-size: 1.5em;\n    line-height: 1;\n  }\n\n  @media (max-width: 768px) {\n    .product-container {\n      padding: clamp(20px, 4%, 32px);\n    }\n\n    h2.section-title {\n      font-size: clamp(1.25rem, 4vw, 1.5rem);\n    }\n  }\n\n  @media (max-width: 480px) {\n    .product-container {\n      padding: 16px;\n    }\n\n    .highlight-block {\n      padding: 16px;\n    }\n  }\n' };
class r {
  getThemeStyles(n2) {
    return o[n2] ? o[n2] : (console.warn(`Theme "${n2}" not found, defaulting to simple theme`), o.simple);
  }
  validateTheme(n2) {
    return null !== n2 && ["feature-heavy", "simple"].includes(n2);
  }
}
const _s = class _s extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "_content");
    __publicField(this, "_error");
    __publicField(this, "_theme");
    __publicField(this, "_shadow");
    __publicField(this, "logger");
    __publicField(this, "errorHandler");
    __publicField(this, "themeManager");
    __publicField(this, "templateGenerator");
    this._shadow = this.attachShadow({ mode: "open" }), this._content = {}, this._error = null, this._theme = "simple", this.logger = new n(), this.errorHandler = new t(), this.themeManager = new r(), this.templateGenerator = new i(), this.render();
  }
  static get observedAttributes() {
    return ["title", "description", "features", "image-url", "theme", "price", "currency", "data"];
  }
  attributeChangedCallback(n2, t2, e2) {
    t2 !== e2 && ("theme" === n2 && this.themeManager.validateTheme(e2) ? this._theme = e2 : this._content[n2] = e2 ?? void 0, this.render());
  }
  generateStyles() {
    return `
      ${_s.globalStyles}
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
      ${this.themeManager.getThemeStyles(this._theme)}
    `;
  }
  render() {
    this.logger.debug("Rendering with theme:", this._theme);
    try {
      const n2 = this._content.data ? JSON.parse(this._content.data) : {};
      this.logger.debug("Parsed data:", n2);
      const t2 = new e(this._content), i2 = document.createElement("script");
      i2.type = "application/ld+json", i2.textContent = t2.generateProductSchema(), document.head.appendChild(i2);
      const o2 = this.templateGenerator.generateFullTemplate(n2);
      this.logger.debug("Generated content:", o2), this._shadow.innerHTML = `
        <style>${this.generateStyles()}</style>
        ${t2.generateFallbackContent()}
        ${o2}
      `;
    } catch (n2) {
      this._error = this.errorHandler.handleRenderError(n2), this._shadow.innerHTML = `
        <style>${this.generateStyles()}</style>
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
      n3 instanceof _s && n3.render();
    });
  }
  static resetGlobalStyles() {
    this.globalStyles = "", document.querySelectorAll("product-description").forEach((n2) => {
      n2 instanceof _s && n2.render();
    });
  }
};
__publicField(_s, "globalStyles", "");
let s = _s;
customElements.define("product-description", s);
export {
  s as ProductDescription
};
//# sourceMappingURL=product-description.es.js.map
