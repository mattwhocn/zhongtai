import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useIsMobile } from '../../hooks/useIsMobile';
import logo from '../../assets/images/logo.png'
import './style.less';

const { Header: AntHeader } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: '/',
    label: <Link to="/">首页</Link>,
  },
  {
    key: '/about',
    label: <Link to="/about">关于我们</Link>,
    children: [
      {
        key: '/about#profile',
        label: <Link to="/about#profile">公司简介</Link>,
      },
      {
        key: '/about#management',
        label: <Link to="/about#management">管理层</Link>,
      },
      {
        key: '/about#culture',
        label: <Link to="/about#culture">企业文化</Link>,
      },
      {
        key: '/about#global',
        label: <Link to="/about#global">全球布局</Link>,
      },
      {
        key: '/about#qualifications',
        label: <Link to="/about#qualifications">资质与荣誉</Link>,
      },
    ],
  },
  {
    key: '/business',
    label: <Link to="/business">业务板块</Link>,
    children: [
      {
        key: '/business/tech',
        label: <Link to="/business/tech">科技板块</Link>,
      },
      {
        key: '/business/security',
        label: <Link to="/business/security">安防板块</Link>,
      },
      {
        key: '/business/training',
        label: <Link to="/business/training">消防培训</Link>,
      },
    ],
  },
  {
    key: '/news',
    label: <Link to="/news">新闻中心</Link>,
  },
  {
    key: '/sustainability',
    label: <Link to="/sustainability">可持续发展</Link>,
  },
  {
    key: '/career',
    label: <Link to="/career">职业发展</Link>,
  },
  {
    key: '/contact',
    label: <Link to="/contact">联系我们</Link>,
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const isMobile = useIsMobile();

  const selectedKey = location.pathname === '/' ? '/' : `/${location.pathname.split('/')[1]}`;

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-mark">
            <img src={logo} alt="中泰民安集团" />  
          </div>  
          <h3>中泰民安集团</h3>
        </Link>

        {/* 根据设备类型显示不同的菜单 */}
        {!isMobile ? (
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            className="header-menu"
          />
        ) : (
          <>
            <div className="mobile-menu">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuVisible(true)}
              />
            </div>
            <Drawer
              title="菜单"
              placement="right"
              onClose={() => setMobileMenuVisible(false)}
              open={mobileMenuVisible}
              className="mobile-drawer"
              width="50%"
            >
              <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={() => setMobileMenuVisible(false)}
              />
            </Drawer>
          </>
        )}
      </div>
    </AntHeader>
  );
};

export default Header; 