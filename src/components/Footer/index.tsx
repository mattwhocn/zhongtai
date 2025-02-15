import { Layout, Row, Col, Space, Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

const { Footer: AntFooter } = Layout;

const menuItems = [
  { key: '/', label: '首页' },
  { key: '/about', label: '关于我们' },
  { key: '/business', label: '业务板块' },
  { key: '/news', label: '新闻中心' },
  { key: '/sustainability', label: '可持续发展' },
  { key: '/career', label: '职业发展' },
  { key: '/contact', label: '联系我们' },
];

const Footer: React.FC = () => {
  const address = '北京市海淀区xxx大厦';
  const baiduMapUrl = `https://api.map.baidu.com/marker?location=39.904989,116.405285&title=${encodeURIComponent(address)}&content=${encodeURIComponent(address)}&output=html`;

  return (
    <AntFooter className="app-footer">
      <div className="footer-content">
        <Row gutter={[48, 24]}>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>公司地址：{address}</p>
              <p>联系电话：010-xxxxxxxx</p>
              <p>电子邮箱：contact@company.com</p>
              <a 
                href={baiduMapUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                在百度地图中查看
              </a>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3>关注我们</h3>
              <Row gutter={24}>
                <Col span={12}>
                  <div className="qr-code">
                    <div className="qr-code-placeholder">
                      <div className="qr-code-inner">
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                      </div>
                    </div>
                    <p>微信公众号</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="qr-code">
                    <div className="qr-code-placeholder">
                      <div className="qr-code-inner">
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                        <div className="qr-code-square" />
                      </div>
                    </div>
                    <p>抖音号</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h3>公司简介</h3>
              <div className="logo">
                <div className="logo-mark" />
                <h3>中泰民安</h3>
              </div>
              <p className="company-desc">
                xxxxxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
          </Col>
        </Row>

        <Divider className="footer-divider" />
        
        <div className="footer-bottom">
          <Space size={20} className="footer-nav">
            {menuItems.map(item => (
              <Link key={item.key} to={item.key}>
                {item.label}
              </Link>
            ))}
          </Space>
          <p className="copyright">
            © {new Date().getFullYear()} 公司名称. All Rights Reserved.
          </p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer; 