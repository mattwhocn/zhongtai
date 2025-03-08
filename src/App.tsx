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
import TrainingBusiness from './pages/Business/Training';
import News from './pages/News';
import Sustainability from './pages/Sustainability';
import Career from './pages/Career';
import Contact from './pages/Contact';
import NewsDetail from './pages/News/Detail';
import ScrollToTop from './components/ScrollToTop';
import AdminUpload from './pages/Admin/Upload';
import AdminAuth from './components/AdminAuth';

import SustainabilityStrategy from './pages/Sustainability/Strategy';
import SustainabilityCompetent from './pages/Sustainability/Competent';
import SustainabilitySocial from './pages/Sustainability/Social';
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
              <Route path="training" element={<TrainingBusiness />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/sustainability" element={<Sustainability />}>
              <Route index element={<Navigate to="strategy" replace />} />
              <Route path="strategy" element={<SustainabilityStrategy />} />
              <Route path="competent" element={<SustainabilityCompetent />} />
              <Route path="social" element={<SustainabilitySocial />} />
            </Route>
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