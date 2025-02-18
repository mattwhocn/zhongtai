import * as data from '../assets/data.json';

export const t = (path: string) => {
  return path.split('.').reduce((obj, key) => obj?.[key], data as any) || path;
}; 