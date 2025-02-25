import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Typography, Affix, Tabs } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { Link, Outlet, useLocation } from 'react-router-dom';

import strategieBanner from '../../assets/images/sustainability/strategie.png';
import environmentBanner from '../../assets/images/sustainability/environment.png';

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Tab 项配置
const tabItems = [
  {
    key: 'strategy',
    title: '发展战略',
    label: <Link to="/sustainability/strategy">发展战略</Link>,
    image: strategieBanner,
  },
  {
    key: 'environment',
    title: '环保举措',
    label: <Link to="/sustainability/environment">环保举措</Link>,
    image: environmentBanner,
  },
  {
    key: 'social',
    title: '社会责任',
    label: <Link to="/sustainability/social">社会责任</Link>,
  },
];

const Sustainability: React.FC = () => {
  usePageTitle('可持续发展');
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('strategy');
  const [showAffix, setShowAffix] = useState(false);
  const [currentTabItem, setCurrentTabItem] = useState(tabItems[0]);

  // 根据当前路由路径设置激活的 tab
  useEffect(() => {
    const path = location.pathname;
    const tab = path.split('/').pop() || 'strategy';
    setActiveTab(tab);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.page-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentTabItem(tabItems.find(item => item.key === activeTab) ?? tabItems[0]);
  }, [activeTab]);

  return (
    <Content className="sustainability-page">
      {/* 顶部 Banner */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>{currentTabItem.title}</h1>
          <p>创新科技，绿色发展，共创美好未来</p>
        </div>
        <div className="tech-overlay">
          {currentTabItem.image && <img src={currentTabItem.image} alt={currentTabItem.key} />}
        </div>
      </div>

      {/* 吸顶导航 */}
      <div className="tabs-wrapper">
        <Affix offsetTop={64}>
          <div className={`tabs-container ${showAffix ? 'affix-active' : ''}`}>
            <Tabs
              activeKey={activeTab}
              items={tabItems}
              onChange={setActiveTab}
              className="sustainability-tabs"
            />
          </div>
        </Affix>
      </div>

      {/* 内容区域 */}
      <div className="sustainability-page-content">
        <Outlet />
      </div>
    </Content>
  );
};

export default Sustainability; 