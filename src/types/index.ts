export interface ProductContent {
  [key: string]: string | undefined;
  title?: string;
  description?: string;
  features?: string;
  'image-url'?: string;
  price?: string;
  currency?: string;
  data?: string;
}

export interface ThemeStyles {
  [key: string]: string;
}

export type ThemeName = 'feature-heavy' | 'simple';

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name?: string;
  description?: string;
  image?: string;
  additionalProperty?: Array<{
    '@type': string;
    name: string;
  }>;
  offers?: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
}

export interface ProductHighlight {
  title: string;
  description: string;
  image?: string;
}

export interface ProductSpecifications {
  [key: string]: string;
}

export interface ProductData {
  productName: string;
  description?: string;
  introduction?: string;
  productHighlights?: {
    [key: string]: ProductHighlight;
  };
  specifications?: ProductSpecifications;
  contents?: {
    quantity?: number;
    colors?: string[];
  };
}

export interface ThemeManager {
  getThemeStyles(theme: ThemeName): string;
  validateTheme(theme: string | null): theme is ThemeName;
}

export interface ErrorHandler {
  handleRenderError(error: unknown): string;
  handleJSONParseError(error: unknown): void;
}

export interface SchemaGenerator {
  generateProductSchema(): string;
  generateFallbackContent(): string;
}

export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  error(message: string, error?: unknown): void;
  warn(message: string, ...args: unknown[]): void;
}

export interface TemplateGenerator {
  generateHighlightsSection(data: ProductData): string;
  generateSpecificationsSection(data: ProductData): string;
  generateContentsSection(data: ProductData): string;
  generateFullTemplate(data: ProductData): string;
}

export interface GlobalStyles {
  fontFamily?: string;
  titleColor?: string;
  titleFontSize?: string;
  descriptionColor?: string;
  descriptionFontSize?: string;
  featuresColor?: string;
}