import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { Outlet } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import Elevator from '../../components/Elevator';
import businessTech from '../../assets/images/business/business-tech.png';
import businessSecurity from '../../assets/images/business/business-security.png';
import businessTraining from '../../assets/images/business/business-training.png';

import './style.less';

const Business: React.FC = () => {
  return (
    <div>
       {/* 子路由内容将在这里渲染 */}
      <Outlet />
    </div>
  );
};

export default Business; 