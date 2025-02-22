import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Typography, Affix, Tabs } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { Link, Outlet } from 'react-router-dom';

import strategieBanner from '../../assets/images/sustainability/strategie.png';
import environmentBanner from '../../assets/images/sustainability/environment.png';

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Tab 项配置
const tabItems = [
  {
    key: 'strategy',
    label: <Link to="/sustainability/strategy">发展战略</Link>,
    image: strategieBanner,
  },
  {
    key: 'environment',
    label: <Link to="/sustainability/environment">环保举措</Link>,
    image: environmentBanner,
  },
  {
    key: 'social',
    label: <Link to="/sustainability/social">社会责任</Link>,
  },
];

const Sustainability: React.FC = () => {
  usePageTitle('可持续发展');
  const [activeTab, setActiveTab] = useState('strategy');
  const [showAffix, setShowAffix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.news-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Content className="sustainability-page">
      {/* 顶部 Banner */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>可持续发展</h1>
          <p>创新科技，绿色发展，共创美好未来</p>
        </div>
        {/* <div className="tech-overlay">
          <img src={image} alt="" srcset="" />
        </div> */}
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