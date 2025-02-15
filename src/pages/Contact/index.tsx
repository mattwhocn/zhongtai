import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title } = Typography;

// 联系信息数据
const contactInfo = {
  address: '北京市朝阳区xx大厦xx层',
  phone: '010-xxxx xxxx',
  email: 'contact@example.com',
  workTime: '周一至周五 9:00-18:00'
};

const Contact: React.FC = () => {
  usePageTitle('联系我们');

  return (
    <Content className="contact-page">
      {/* 顶部横幅 */}
      <div 
        className="contact-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>联系我们</h1>
          <p>随时恭候您的咨询，我们将竭诚为您服务</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 联系信息 */}
      <section className="contact-section">
        <div className="section-content">
          <Title level={2}>联系方式</Title>
          <div className="info-cards">
            <Card className="info-card">
              <EnvironmentOutlined />
              <h3>公司地址</h3>
              <p>{contactInfo.address}</p>
            </Card>
            <Card className="info-card">
              <PhoneOutlined />
              <h3>联系电话</h3>
              <p>{contactInfo.phone}</p>
            </Card>
            <Card className="info-card">
              <MailOutlined />
              <h3>电子邮箱</h3>
              <p>{contactInfo.email}</p>
            </Card>
            <Card className="info-card">
              <FieldTimeOutlined />
              <h3>工作时间</h3>
              <p>{contactInfo.workTime}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="map-section">
        <div className="section-content">
          <Title level={2}>公司位置</Title>
          <div className="map-container">
            <div className="map-placeholder" style={{ background: gradients.premiumGray }}>
              <div className="tech-overlay" />
              <p>地图加载中...</p>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default Contact; 