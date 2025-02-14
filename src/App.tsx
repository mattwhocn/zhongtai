import { Menu, Layout } from 'antd';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import News from './pages/News';
import Sustainability from './pages/Sustainability';
import Career from './pages/Career';
import Contact from './pages/Contact';

import './styles/app.less';

const { Header, Content } = Layout;

const menuItems = [
  { key: '/', label: '首页' },
  { key: '/about', label: '关于我们' },
  { key: '/business', label: '业务板块' },
  { key: '/news', label: '新闻中心' },
  { key: '/sustainability', label: '可持续发展' },
  { key: '/career', label: '职业发展' },
  { key: '/contact', label: '联系我们' },
];

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout className="app-container">
        <Header className="app-header">
          <Menu
            mode="horizontal"
            items={menuItems.map(item => ({
              ...item,
              label: <Link to={item.key}>{item.label}</Link>,
            }))}
          />
        </Header>
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/news" element={<News />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}; 