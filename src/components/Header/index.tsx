import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
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
  const selectedKey = location.pathname === '/' ? '/' : `/${location.pathname.split('/')[1]}`;

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
          items={menuItems}
          className="header-menu"
        />
      </div>
    </AntHeader>
  );
};

export default Header; 