# Product Description Component

A lightweight, customizable web component for displaying product descriptions on any website. Built with vanilla JavaScript and Web Components, this component provides a clean, modern design with zero dependencies.

## Quick Start

Add the script to your page:
```html
<script src="https://cdn.jsdelivr.net/gh/fredn3y/product-description-component@main/product-description.min.js"></script>
```

Use the component:
```html
<product-description
    title="Your Product"
    description="Your product description"
    features='["Feature 1", "Feature 2", "Feature 3"]'
    image-url="your-image.jpg"
    theme="modern">
</product-description>
```

## Features

- 🎨 5 Beautiful themes (modern, elegant, minimal, dark, default)
- 🔒 Style isolation using Shadow DOM
- 🎯 Easy integration with any website
- ⚡ Zero dependencies
- 🔄 Dynamic content updates
- 🛠️ Customizable through attributes
- 🌐 Cross-browser compatible

## Available Themes

1. **modern** - Neumorphic design with shadows and arrow bullets
2. **elegant** - Serif typography with gradient accent bar
3. **minimal** - Clean, borderless design with understated typography
4. **dark** - Dark mode with light text and blue accents
5. **default** - Simple and clean design

## Attributes

| Attribute | Type | Description | Required |
|-----------|------|-------------|----------|
| title | String | The product title | Yes |
| description | String | The main product description | Yes |
| features | JSON String | Array of features | No |
| image-url | String | URL to the product image | No |
| theme | String | Theme name (default, modern, minimal, dark, elegant) | No |

## Examples

### Modern Theme
```html
<product-description
    title="Premium Wireless Headphones"
    description="Experience crystal-clear audio with our premium wireless headphones."
    features='["Active Noise Cancellation", "30-hour Battery Life", "Bluetooth 5.0"]'
    image-url="headphones.jpg"
    theme="modern">
</product-description>
```

### Dark Theme
```html
<product-description
    title="Gaming Mouse"
    description="Professional gaming mouse with RGB lighting."
    features='["16,000 DPI Sensor", "RGB Lighting", "8 Programmable Buttons"]'
    image-url="mouse.jpg"
    theme="dark">
</product-description>
```

## Browser Support

Supports all modern browsers that implement the Web Components standard:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - Feel free to use in personal and commercial projects.
  