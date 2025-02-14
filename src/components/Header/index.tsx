import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './style.less';
import { t } from '../../utils/locale';

const { Header: AntHeader } = Layout;

const menuItems = [
  { key: '/', label: t('nav.home') },
  { key: '/about', label: t('nav.about') },
  { key: '/business', label: t('nav.business') },
  { key: '/news', label: t('nav.news') },
  { key: '/sustainability', label: t('nav.sustainability') },
  { key: '/career', label: t('nav.career') },
  { key: '/contact', label: t('nav.contact') },
];

const Header: React.FC = () => {
  const location = useLocation();
  const selectedKey = menuItems.find(item => 
    location.pathname === item.key || 
    (item.key !== '/' && location.pathname.startsWith(item.key))
  )?.key || '/';

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-mark" />
          <h3>中泰民安</h3>
        </Link>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          className="header-menu"
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </AntHeader>
  );
};

export default Header; 