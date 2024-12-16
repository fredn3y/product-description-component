import { Logger } from '../types';

export class LoggerService implements Logger {
  debug(message: string, ...args: unknown[]): void {
    console.log(`[Debug] ${message}`, ...args);
  }

  error(message: string, error?: unknown): void {
    console.error(`[Error] ${message}`, error);
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(`[Warning] ${message}`, ...args);
  }
} 