import { ThemeManager, ThemeName } from '../types';
import { themes } from '../themes';

export class ThemeManagerService implements ThemeManager {
  getThemeStyles(theme: ThemeName): string {
    if (!themes[theme]) {
      console.warn(`Theme "${theme}" not found, defaulting to simple theme`);
      return themes['simple'];
    }
    return themes[theme];
  }

  validateTheme(theme: string | null): theme is ThemeName {
    return theme !== null && ['feature-heavy', 'simple'].includes(theme);
  }
} 