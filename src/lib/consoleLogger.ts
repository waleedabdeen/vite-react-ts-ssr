import { Logger } from 'ts-log';

export default class ConsoleLogger implements Logger {
  public static create(cname: string): Logger {
    return new ConsoleLogger(cname);
  }

  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public trace(message?: string, ...optionalParams: unknown[]): void {
    console.trace('[TRACE ', this.getLogMessage(message, optionalParams));
  }

  public debug(message?: string, ...optionalParams: unknown[]): void {
    console.debug('[DEBUG ', this.getLogMessage(message, optionalParams));
  }

  public info(message?: string, ...optionalParams: unknown[]): void {
    console.info('[INFO', this.getLogMessage(message, optionalParams));
  }

  public warn(message?: string, ...optionalParams: unknown[]): void {
    console.warn('[WARN ', this.getLogMessage(message, optionalParams));
  }

  public error(message?: string, ...optionalParams: unknown[]): void {
    console.warn('[ERROR ', this.getLogMessage(message, optionalParams));
  }

  private getLogMessage(
    message?: string,
    ...optionalParams: unknown[]
  ): string {
    const datetime = new Date().toLocaleString();
    let logMessage = `- ${datetime}] [${this.name}] ${message}`;
    if (optionalParams.length > 0)
      logMessage += ` ${JSON.stringify(optionalParams)}`;

    return logMessage;
  }
}
