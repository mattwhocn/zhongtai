import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FieldTimeOutlined, BankOutlined, SafetyCertificateOutlined, GlobalOutlined, SafetyOutlined, CloudOutlined, RocketOutlined, ApartmentOutlined, BuildOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title } = Typography;

// 联系信息数据
export const contactInfo = {
  address: '北京市大兴区春和路39号院1号楼3单元906',
  address2: '北京市大兴区庞各庄镇庞新路5号',
  phone: '010-61288212',
  email: '9315704675@qq.com',
  workTime: '周一至周五 9:00-18:00'
};

const Contact: React.FC = () => {
  usePageTitle('联系我们');

  const friendlyLinks = [
    {
      name: '首都实业投资有限公司',
      url: 'https://www.cap-ii.com/',
      icon: <BankOutlined />
    },
    {
      name: '北京市保安服务有限公司',
      url: 'http://www.baoan.com.cn/',
      icon: <SafetyCertificateOutlined />
    },
    {
      name: '山东星网数据产业有限公司',
      url: 'http://www.starnetgis.com/',
      icon: <GlobalOutlined />
    },
    {
      name: '北京晨豪科技有限公司',
      url: 'https://safe360.cn/',
      icon: <SafetyOutlined />
    },
    {
      name: '中华云智慧科技有限公司',
      url: 'http://www.zxyiot.cn/',
      icon: <CloudOutlined />
    },
    {
      name: '北京智图九州科技有限公司',
      url: 'https://www.ztjzsoft.com/',
      icon: <RocketOutlined />
    },
    {
      name: '中国电子信息产业集团有限公司',
      url: 'https://www.cec.com.cn/',
      icon: <ApartmentOutlined />
    },
    {
      name: '中电太极（集团）有限公司',
      url: 'http://www.nci.ac.cn/',
      icon: <BuildOutlined />
    }
  ];

  return (
    <Content className="contact-page">
      {/* 顶部横幅 */}
      <div 
        className="page-banner"
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
              <h3>集团地址</h3>
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
      {/* <section className="map-section">
        <div className="section-content">
          <Title level={2}>公司位置</Title>
          <div className="map-container">
            <div className="map-placeholder" style={{ background: gradients.premiumGray }}>
              <div className="tech-overlay" />
              <p>地图加载中...</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 友情链接 */}
      <section className="friendly-links-section">
        <div className="section-content">
          <h2>友情链接</h2>
          <div className="links-container">
            {friendlyLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="friendly-link"
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </Content>
  );
};

export default Contact; 