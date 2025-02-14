import React from 'react';
import { Layout } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';

const Contact: React.FC = () => {
  usePageTitle('联系我们');
  return (
    <Layout.Content>
      <h1>联系我们</h1>
    </Layout.Content>
  );
};

export default Contact; 