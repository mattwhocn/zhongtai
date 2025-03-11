import { withErrorBoundary } from '@/components/ErrorBoundary';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Business: React.FC = () => {
  return (
    <div>
       {/* 子路由内容将在这里渲染 */}
      <Outlet />
    </div>
  );
};

export default withErrorBoundary(Business); 