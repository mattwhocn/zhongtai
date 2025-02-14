import React from 'react';
import { Layout } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';

const Business: React.FC = () => {
  usePageTitle('业务板块');
  return (
    <Layout.Content>
      <h1>业务板块</h1>
    </Layout.Content>
  );
};

export default Business; 