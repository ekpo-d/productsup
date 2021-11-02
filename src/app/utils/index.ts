import { KeyValue } from '@angular/common';

/**
 * KeyValue pipe compare fuction, maintains original object property order.
 * @param {KeyValue<string,string>} _a  Key, Value pair
 * @param {KeyValue<string,string>} _b  Key, Value pair
 * @returns The number denoting the order
 */
export const originalOrder = (_a: KeyValue<string,string>, _b: KeyValue<string,string>): number => {
  return 0;
}

/**
 * Gte: Greater than or equal to (≥) filter function
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const gte = (data: any, column: string, inputValue: string): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && Number(elem[column]) >= Number(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

/**
 * Lte: less than or equal to (≤) filter function
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const lte = (data: any, column: string, inputValue: string): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && Number(elem[column]) <= Number(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

/**
 * Equals filter function, directly compares numeric values for equality.
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const equals = (data: any, column: string, inputValue: string): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && Number(elem[column]) === Number(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

/**
 * Not equals filter function, directly compares numeric values for inequality.
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const notEqual = (data: any, column: string, inputValue: string): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && Number(elem[column]) !== Number(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

/**
 * Contains filter function, directly compares string values for substrings.
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const contains = (data: any, column: string, inputValue: number): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && elem[column].includes(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

/**
 * Not contains filter function, directly compares string values for non-substrings.
 * @param {any} data  Data to be filtered
 * @param {string} column  Criteria by with the data is being filtered
 * @param {string} inputValue  The value to compare others against
 * @returns Filtered data
 */
export const notContains = (data: any, column: string, inputValue: number): any => {
  const newData: any = {};

  for (const [key, value] of Object.entries(data)) {
    const elem: any = value;

    for (const [key2, _value2] of Object.entries(elem)) {
      if (column === key2 && !elem[column].includes(inputValue)) {
        newData[key] = value
      }
    }
  }
  return newData;
}

