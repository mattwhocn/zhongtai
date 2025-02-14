import { useEffect } from 'react';

const SITE_NAME = '中泰民安官网';

export const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `${pageTitle} - ${SITE_NAME}`;
    
    // 组件卸载时恢复默认标题
    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
}; 