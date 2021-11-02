/**
 * Interfaces and types used across the app
 */

export interface Filter {
  column: string;
  operator: string;
  value: string | number;
}

export interface ErrorData {
  display: boolean;
  message: string;
}

export interface OperationMap {
  [s: string]: Function;
}
