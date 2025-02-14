import * as zhCN from '../locales/zh-CN.json';

export const t = (path: string) => {
  return path.split('.').reduce((obj, key) => obj?.[key], zhCN as any) || path;
}; 