import { Logger } from 'ts-log';
import fs from 'node:fs';

export default class FileLogger implements Logger {
  private readonly fd: number;

  public constructor(filename: string) {
    this.fd = fs.openSync(filename, 'a');
  }

  public trace(message?: string, ...optionalParams: unknown[]): void {
    this.append('TRACE', `${message} ${JSON.stringify(optionalParams)}`);
  }

  public debug(message?: string, ...optionalParams: unknown[]): void {
    this.append('DEBUG', `${message} ${JSON.stringify(optionalParams)}`);
  }

  public info(message?: string, ...optionalParams: unknown[]): void {
    this.append('INFO ', `${message} ${JSON.stringify(optionalParams)}`);
  }

  public warn(message?: string, ...optionalParams: unknown[]): void {
    this.append('WARN ', `${message} ${JSON.stringify(optionalParams)}`);
  }

  public error(message?: string, ...optionalParams: unknown[]): void {
    this.append('ERROR', `${message} ${JSON.stringify(optionalParams)}`);
  }

  private append(type: string, message: string) {
    fs.writeSync(this.fd, `${new Date().toISOString()} ${type} ${message}\n`);
  }
}
