import React from 'react';
import { Layout } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';

const Career: React.FC = () => {
  usePageTitle('职业发展');
  return (
    <Layout.Content>
      <h1>职业发展</h1>
    </Layout.Content>
  );
};

export default Career; 