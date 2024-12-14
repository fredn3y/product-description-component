import { defaultTheme } from './default';
import { modernTheme } from './modern';
import { minimalTheme } from './minimal';
import { darkTheme } from './dark';
import { elegantTheme } from './elegant';
import { featureHeavyTheme } from './feature-heavy';
import type { ThemeStyles } from '../types';

export const themes: ThemeStyles = {
  default: defaultTheme,
  modern: modernTheme,
  minimal: minimalTheme,
  dark: darkTheme,
  elegant: elegantTheme,
  'feature-heavy': featureHeavyTheme,
}; 