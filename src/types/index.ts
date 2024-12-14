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
  introduction: string;
  productHighlights: {
    [key: string]: ProductHighlight;
  };
  specifications: ProductSpecifications;
  contents: {
    quantity: number;
    colors: string[];
  };
}