import React from 'react';
import { Navigate } from 'react-router-dom';

// 简单的验证函数，实际项目中可以替换为更安全的验证方式
const isAdmin = () => {
  return localStorage.getItem('admin_token') === 'your_secure_token';
};

interface AdminAuthProps {
  children: React.ReactNode;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ children }) => {
  if (!isAdmin()) {
    // 未授权时重定向到首页
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminAuth; 