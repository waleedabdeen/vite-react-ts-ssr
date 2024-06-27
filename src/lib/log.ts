import { Logger, dummyLogger } from 'ts-log';
import { createContext, useContext } from 'react';

export interface ILogContext {
  logger: Logger;
}

export const LogContext = createContext<ILogContext>({ logger: dummyLogger });

export function useLogger() {
  return useContext(LogContext);
}
