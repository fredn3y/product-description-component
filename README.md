# Product Description Component

A customizable web component for product descriptions with multiple themes and styling options.

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/fredn3y/product-description-component@main/dist/product-description.min.js"></script>
```

## Usage

```html
<product-description
    title="Product Name"
    description="Product description goes here"
    features='["Feature 1", "Feature 2", "Feature 3"]'
    image-url="path/to/image.jpg"
    theme="modern">
</product-description>
```

## Themes

The component comes with several built-in themes:

1. **modern** - Sleek design with subtle shadows and gradients
2. **elegant** - Sophisticated layout with serif typography
3. **minimal** - Clean, borderless design with understated typography
4. **dark** - Dark mode with light text and blue accents
5. **default** - Simple and clean design
6. **feature-heavy** - Detailed layout emphasizing product features

## Attributes

| Attribute | Type | Description | Required |
|-----------|------|-------------|----------|
| title | String | The product title | Yes |
| description | String | The main product description | Yes |
| features | JSON String | Array of features | No |
| image-url | String | URL to the product image | No |
| theme | String | Theme name (default, modern, minimal, dark, elegant, feature-heavy) | No |
| price | String | Product price | No |
| currency | String | Currency code (USD, EUR, etc.) | No |

## CSS Customization

The component supports customization through CSS variables. Here are the available variables with their default values:

| CSS Variable | Default Value | Description |
|-------------|---------------|-------------|
| --pd-font-family | system-ui, -apple-system, sans-serif | Main font family |
| --pd-max-width | 800px | Maximum width of the component |
| --pd-padding | 20px | Outer padding |
| --pd-content-padding | 20px | Inner content padding |
| --pd-image-max-height | 400px | Maximum height of product image |
| --pd-title-color | inherit | Title text color |
| --pd-title-font-size | inherit | Title font size |
| --pd-title-font-weight | inherit | Title font weight |
| --pd-description-color | inherit | Description text color |
| --pd-description-font-size | 16px | Description font size |
| --pd-description-line-height | 1.6 | Description line height |
| --pd-features-color | inherit | Features text color |
| --pd-error-color | #dc2626 | Error message text color |
| --pd-error-bg | #fee2e2 | Error message background color |

### Example of CSS Customization

```html
<style>
  product-description {
    --pd-font-family: 'Roboto', sans-serif;
    --pd-title-color: #2563eb;
    --pd-description-color: #4b5563;
    --pd-features-color: #374151;
  }
</style>

<product-description
    title="Premium Wireless Headphones"
    description="Experience crystal-clear audio with our premium wireless headphones."
    features='["Active Noise Cancellation", "30-hour Battery Life", "Bluetooth 5.0"]'
    image-url="headphones.jpg"
    theme="modern">
</product-description>
```

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

This component uses standard web components APIs and works in all modern browsers that support Custom Elements v1.

## License

MIT
  