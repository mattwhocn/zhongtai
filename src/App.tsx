import { Layout, BackTop } from 'antd';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UpOutlined } from '@ant-design/icons';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import TechBusiness from './pages/Business/Tech';
import SecurityBusiness from './pages/Business/Security';
import FireTraining from './pages/Business/FireTraining';
import News from './pages/News';
import Sustainability from './pages/Sustainability';
import Career from './pages/Career';
import Contact from './pages/Contact';
import NewsDetail from './pages/News/Detail';
import ScrollToTop from './components/ScrollToTop';
import AdminUpload from './pages/Admin/Upload';
import AdminAuth from './components/AdminAuth';

import './styles/app.less';

const { Content } = Layout;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout className="app-container">
        <Header />
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />}>
              <Route index element={<Navigate to="tech" replace />} />
              <Route path="tech" element={<TechBusiness />} />
              <Route path="security" element={<SecurityBusiness />} />
              <Route path="training" element={<FireTraining />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin/upload" 
              element={
                <AdminAuth>
                  <AdminUpload />
                </AdminAuth>
              } 
            />
          </Routes>
        </Content>
        <Footer />
        <BackTop>
          <div className="back-to-top">
            <UpOutlined />
          </div>
        </BackTop>
      </Layout>
    </BrowserRouter>
  );
}; 