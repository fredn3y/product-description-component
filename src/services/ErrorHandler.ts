import { ErrorHandler } from '../types';
import { LoggerService } from './Logger';

export class ErrorHandlerService implements ErrorHandler {
  private logger: LoggerService;

  constructor() {
    this.logger = new LoggerService();
  }

  handleRenderError(error: unknown): string {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const formattedMessage = `Error rendering product description: ${errorMessage}`;
    this.logger.error(formattedMessage, error);
    return formattedMessage;
  }

  handleJSONParseError(error: unknown): void {
    this.logger.error('JSON Parse Error', error);
  }
} 