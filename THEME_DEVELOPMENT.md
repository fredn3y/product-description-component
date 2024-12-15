# Theme Development Guide

## Creating a New Theme

1. **Create Theme File**
   - Navigate to `src/themes/`
   - Create a new file: `your-theme-name.ts`
   - Use the following template:
   ```typescript
   export const yourThemeName = `
     .product-container {
       /* Base container styles */
     }

     /* Introduction Section */
     .product-intro {
       /* Introduction styles */
     }

     /* Add other section styles... */
   `;
   ```

2. **Register Theme**
   - Open `src/themes/index.ts`
   - Import your theme:
   ```typescript
   import { yourThemeName } from './your-theme-name';
   ```
   - Add it to the themes object:
   ```typescript
   export const themes: { [key: string]: string } = {
     'feature-heavy': featureHeavyTheme,
     'simple': simpleTheme,
     'your-theme-name': yourThemeName
   };
   ```

3. **Update Types**
   - Open `src/types/index.ts`
   - Update the ThemeName type:
   ```typescript
   export type ThemeName = 'feature-heavy' | 'simple' | 'your-theme-name';
   ```

## Building and Testing

1. **Local Development**
   ```bash
   npm run dev
   ```
   - Access `http://localhost:5174/src/index.html`
   - Test your theme in the live preview

2. **Build for Production**
   ```bash
   npm run build
   ```
   - Verify the build succeeds
   - Check `dist/` folder for generated files

## Deploying Changes

1. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add new theme: your-theme-name"
   git push origin main
   ```

2. **Automatic Deployment**
   - Changes pushed to the main branch will automatically trigger a deployment on Cloudflare Pages
   - The build process will:
     1. Build the project
     2. Deploy to Cloudflare's CDN
     3. Automatically invalidate the cache
   - No manual cache purging is needed

3. **Implementation**
   - Use this script tag in your HTML:
   ```html
   <script src="https://product-description-component.pages.dev/product-description.min.js"></script>
   ```

## Troubleshooting

1. **Changes Not Showing**
   - Check Cloudflare Pages dashboard for build status
   - Wait a few minutes for the deployment to complete
   - Clear browser cache
   - Try accessing in an incognito window

2. **Build Issues**
   - Check console for errors
   - Verify theme syntax
   - Ensure all sections match existing theme structure
   - Review build logs in Cloudflare Pages dashboard

## CSS Variables Available

Your theme can use these CSS variables for customization:

```css
/* Font */
--pd-font-family
--pd-title-font-size
--pd-title-font-weight
--pd-description-font-size

/* Colors */
--pd-title-color
--pd-description-color
--pd-features-color

/* Layout */
--pd-max-width
--pd-padding
```

## Best Practices

1. **Maintain Structure**
   - Keep the same HTML structure as existing themes
   - Use consistent class names
   - Maintain all sections (intro, highlights, specs, contents)

2. **Responsive Design**
   - Include media queries for different screen sizes
   - Use relative units (rem, em, %)
   - Test on multiple devices

3. **Performance**
   - Minimize nested selectors
   - Use efficient CSS properties
   - Avoid heavy animations

4. **Accessibility**
   - Maintain color contrast ratios
   - Keep text readable
   - Preserve semantic structure
  </rewritten_file> 