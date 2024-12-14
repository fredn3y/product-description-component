class ProductDescription extends HTMLElement {
  constructor() {
    super();
    
    // Create shadow DOM
    this.attachShadow({ mode: 'open' });
    
    // Initialize state
    this._content = {};
    this._error = null;
    this._theme = 'default';
    
    // Create base structure
    this.render();
  }
  
  // Observed attributes for external updates
  static get observedAttributes() {
    return ['title', 'description', 'features', 'image-url', 'theme'];
  }
  
  // Lifecycle: Called when attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'theme') {
        this._theme = newValue;
      } else {
        this._content[name] = newValue;
      }
      this.render();
    }
  }
  
  // Get theme-specific styles
  getThemeStyles() {
    const themes = {
      default: `
        .product-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        
        .product-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .product-description {
          color: #4a4a4a;
        }
        
        .features-list li {
          color: #4a4a4a;
        }
      `,
      
      modern: `
        .product-container {
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
          border-radius: 16px;
          box-shadow: 
            20px 20px 60px #d9d9d9,
            -20px -20px 60px #ffffff;
          overflow: hidden;
        }
        
        .product-title {
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
          letter-spacing: -0.5px;
        }
        
        .product-description {
          color: #4a5568;
          font-size: 17px;
        }
        
        .features-list li {
          color: #4a5568;
          position: relative;
          padding-left: 24px;
        }
        
        .features-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #4299e1;
        }
      `,
      
      minimal: `
        .product-container {
          background: none;
          border: 1px solid #e2e8f0;
          border-radius: 0;
          overflow: hidden;
        }
        
        .product-title {
          font-size: 24px;
          font-weight: 500;
          color: #000;
          border-bottom: 2px solid #000;
          padding-bottom: 8px;
          margin-bottom: 24px;
        }
        
        .product-description {
          color: #2d3748;
          font-size: 16px;
          line-height: 1.8;
        }
        
        .features-list {
          list-style-type: none;
          padding: 0;
        }
        
        .features-list li {
          color: #2d3748;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
      `,
      
      dark: `
        .product-container {
          background: #1a202c;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        
        .product-title {
          font-size: 26px;
          font-weight: 600;
          color: #fff;
        }
        
        .product-description {
          color: #cbd5e0;
        }
        
        .features-list li {
          color: #cbd5e0;
        }
        
        .features-list li::marker {
          color: #4299e1;
        }
      `,
      
      elegant: `
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
      `
    };
    
    return themes[this._theme] || themes.default;
  }
  
  // Render method
  render() {
    const styles = `
      :host {
        display: block;
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
      }
      
      .product-image {
        width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: cover;
      }
      
      .product-content {
        padding: 20px;
      }
      
      .product-title {
        margin: 0 0 16px 0;
      }
      
      .product-description {
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 20px 0;
      }
      
      .features-list {
        margin: 0;
        padding: 0 0 0 20px;
      }
      
      .features-list li {
        margin: 8px 0;
      }
      
      .error-message {
        color: #dc2626;
        padding: 10px;
        background: #fee2e2;
        border-radius: 4px;
        margin: 10px 0;
      }
      
      ${this.getThemeStyles()}
    `;
    
    try {
      const features = this._content['features'] ? JSON.parse(this._content['features']) : [];
      
      this.shadowRoot.innerHTML = `
        <style>${styles}</style>
        <div class="product-container">
          ${this._error ? `<div class="error-message">${this._error}</div>` : ''}
          ${this._content['image-url'] ? `
            <img 
              class="product-image" 
              src="${this._content['image-url']}" 
              alt="${this._content['title'] || 'Product image'}"
              loading="lazy"
            >
          ` : ''}
          <div class="product-content">
            ${this._content['title'] ? `
              <h2 class="product-title">${this._content['title']}</h2>
            ` : ''}
            ${this._content['description'] ? `
              <p class="product-description">${this._content['description']}</p>
            ` : ''}
            ${features.length > 0 ? `
              <ul class="features-list">
                ${features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        </div>
      `;
    } catch (error) {
      this._error = 'Error rendering product description: ' + error.message;
      this.shadowRoot.innerHTML = `
        <style>${styles}</style>
        <div class="error-message">${this._error}</div>
      `;
    }
  }
  
  // Public methods for content updates
  setContent(content) {
    try {
      Object.entries(content).forEach(([key, value]) => {
        this.setAttribute(key, typeof value === 'object' ? JSON.stringify(value) : value);
      });
      this._error = null;
    } catch (error) {
      this._error = 'Error updating content: ' + error.message;
      this.render();
    }
  }
  
  // Error handling
  setError(error) {
    this._error = error;
    this.render();
  }
}

// Register the custom element
customElements.define('product-description', ProductDescription); 