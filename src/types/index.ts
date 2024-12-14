export interface ProductContent {
  [key: string]: string | undefined;
  title?: string;
  description?: string;
  features?: string;
  'image-url'?: string;
  price?: string;
  currency?: string;
}

export interface ThemeStyles {
  [key: string]: string;
}

export type ThemeName = 'default' | 'modern' | 'minimal' | 'dark' | 'elegant';

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