import React from 'react';
import { Layout } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';

const Sustainability: React.FC = () => {
  usePageTitle('可持续发展');
  return (
    <Layout.Content>
      <h1>可持续发展</h1>
    </Layout.Content>
  );
};

export default Sustainability; 