import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './style.less';

const { Header: AntHeader } = Layout;

const menuItems = [
  { key: '/', label: '首页' },
  { key: '/about', label: '关于我们' },
  { key: '/business', label: '业务板块' },
  { key: '/news', label: '新闻中心' },
  { key: '/sustainability', label: '可持续发展' },
  { key: '/career', label: '职业发展' },
  { key: '/contact', label: '联系我们' },
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
          <div className="logo-mark">
            <img src={logo} alt="中泰民安" />  
          </div>  
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