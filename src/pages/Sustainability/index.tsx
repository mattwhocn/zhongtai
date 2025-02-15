import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 页面数据
const sustainabilityData = {
  strategy: {
    title: '可持续发展战略',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    background: gradients.techBlue
  },
  environment: {
    title: '环保举措',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    background: gradients.techGold
  },
  social: {
    title: '社会责任',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    background: gradients.businessBlue
  }
};

const Sustainability: React.FC = () => {
  usePageTitle('可持续发展');

  return (
    <Content className="sustainability-page">
      {/* 可持续发展战略 */}
      <section className="section-strategy">
        <div className="section-content">
          <Title level={2}>{sustainabilityData.strategy.title}</Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Paragraph>{sustainabilityData.strategy.content}</Paragraph>
            </Col>
            <Col xs={24} lg={12}>
              <div 
                className="section-image"
                style={{ background: sustainabilityData.strategy.background }}
              >
                <div className="tech-overlay" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 环保举措 */}
      <section className="section-environment">
        <div className="section-content">
          <Title level={2}>{sustainabilityData.environment.title}</Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div 
                className="section-image"
                style={{ background: sustainabilityData.environment.background }}
              >
                <div className="tech-overlay" />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph>{sustainabilityData.environment.content}</Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* 社会责任 */}
      <section className="section-social">
        <div className="section-content">
          <Title level={2}>{sustainabilityData.social.title}</Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Paragraph>{sustainabilityData.social.content}</Paragraph>
            </Col>
            <Col xs={24} lg={12}>
              <div 
                className="section-image"
                style={{ background: sustainabilityData.social.background }}
              >
                <div className="tech-overlay" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default Sustainability; 