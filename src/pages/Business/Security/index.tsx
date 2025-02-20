import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { gradients } from '../../../utils/gradients';
import { usePageTitle } from '../../../hooks/usePageTitle';
import businessSecurity from '../../../assets/images/business/business-security.png';

const { Title, Paragraph } = Typography;

// 安防板块数据
const securitySection = {
  title: '安防板块',
  description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  image: businessSecurity,
  cases: [
    {
      id: 1,
      name: '项目案例1',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      background: gradients.techBlue,
    },
    {
      id: 2,
      name: '项目案例2',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      background: gradients.techGold,
    },
    // ... 更多案例
  ]
};


const SecurityBusiness: React.FC = () => {
  usePageTitle('安防板块');
  
  return (
    <Layout.Content className="business-page">
      {/* 安防板块 */}
      <section className="section-security" id="security">
        <div className="section-content">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-image">
                <div className="tech-overlay">
                  <img src={securitySection.image} alt={securitySection.title} />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="section-text">
                <Title level={2}>{securitySection.title}</Title>
                <Paragraph>{securitySection.description}</Paragraph>
              </div>
            </Col>
          </Row>
          
          <div className="cases-grid">
            <Title level={3}>项目案例</Title>
            <Row gutter={[24, 24]}>
              {securitySection.cases.map(case_ => (
                <Col xs={24} sm={12} lg={8} key={case_.id}>
                  <Card 
                    className="case-card"
                    style={{ background: case_.background }}
                  >
                    <h4>{case_.name}</h4>
                    <p>{case_.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

    </Layout.Content>
  );
};

export default SecurityBusiness; 