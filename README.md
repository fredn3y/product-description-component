# Product Description Component

A customizable web component for creating beautiful product descriptions with multiple themes. Built with TypeScript and modern web standards.

## Features

- 🎨 Multiple themes (Default, Modern, Minimal, Dark, Elegant, Feature-Heavy)
- 📱 Fully responsive design
- 🎯 SEO-friendly with Schema.org markup
- 🔄 Easy to customize with CSS variables
- 🌐 Works with any web framework or vanilla HTML
- 🎯 Zero dependencies
- 📦 Small bundle size
- 🔒 Type-safe with TypeScript

## Quick Start

Add this code to your HTML file:

```html
<!-- Component styles -->
<style>
    product-description {
        /* Colors - these will inherit from your site's colors */
        --pd-title-color: inherit;
        --pd-description-color: inherit;
        --pd-features-color: inherit;
    }
</style>

<!-- Component script -->
<script src="https://cdn.jsdelivr.net/gh/fredn3y/product-description-component/dist/product-description.min.js"></script>

<!-- Use the component -->
<product-description
    title="Your Product Title"
    description="Your product description"
    data='{"productName":"Product Name","introduction":"Product introduction...","productHighlights":{},"specifications":{},"contents":{"quantity":1,"colors":[]}}'
    theme="feature-heavy">
</product-description>
```

## Themes

The component comes with six built-in themes:

1. `default` - Clean and simple layout
2. `modern` - Contemporary design with subtle shadows
3. `minimal` - Minimalistic design focusing on content
4. `dark` - Dark mode optimized theme
5. `elegant` - Sophisticated design with serif fonts
6. `feature-heavy` - Rich layout with sections for highlights, specifications, and contents

## Customization

### CSS Variables

Customize the appearance using CSS variables:

```css
product-description {
    /* Font family */
    --pd-font-family: 'Your Font', sans-serif;
    
    /* Colors */
    --pd-title-color: #1a1a1a;
    --pd-description-color: #4a4a4a;
    --pd-features-color: #4a4a4a;
    
    /* Sizes */
    --pd-title-font-size: 24px;
    --pd-description-font-size: 16px;
    
    /* Weights */
    --pd-title-font-weight: 600;
    
    /* Container */
    --pd-max-width: 800px;
    --pd-padding: 20px;
}
```

### Data Structure

The component accepts a JSON data structure through the \`data\` attribute:

```json
{
    "productName": "Product Name",
    "introduction": "Product introduction text...",
    "productHighlights": {
        "feature1": {
            "title": "Feature Title",
            "description": "Feature description",
            "image": "feature-image-url"
        }
    },
    "specifications": {
        "material": "Material type",
        "dimensions": "Product dimensions",
        "weight": "Product weight"
    },
    "contents": {
        "quantity": 1,
        "colors": ["Color 1", "Color 2"]
    }
}
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/fredn3y/product-description-component.git
   cd product-description-component
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code

### Building

To build the component for production:

```bash
npm run build
```

The built files will be in the `dist` directory:
- `product-description.min.js` - Minified UMD build
- `product-description.es.js` - ES module build

## Browser Support

The component works in all modern browsers that support Web Components:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

MIT License - feel free to use in your projects.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
  