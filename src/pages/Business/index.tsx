import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import Elevator from '../../components/Elevator';
import businessTech from '../../assets/images/business/business-tech.png';
import businessSecurity from '../../assets/images/business/business-security.png';
import businessTraining from '../../assets/images/business/business-training.png';

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 科技板块数据
const techSection = {
  title: '科技板块',
  description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  image: businessTech,
  products: [
    {
      id: 1,
      name: '产品名称1',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      background: gradients.businessBlue,
    },
    {
      id: 2,
      name: '产品名称2',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      background: gradients.techMix,
    },
    // ... 更多产品
  ]
};

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

// 培训教育板块数据
const trainingSection = {
  title: '消防培训',
  description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  image: businessTraining,
  courses: [
    {
      id: 1,
      name: '培训课程1',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      duration: '3天',
      background: gradients.techMix,
    },
    {
      id: 2,
      name: '培训课程2',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
      duration: '5天',
      background: gradients.businessBlue,
    },
    // ... 更多课程
  ]
};

// 添加电梯导航数据
const elevatorItems = [
  { key: 'tech', title: '科技板块' },
  { key: 'security', title: '安防板块' },
  { key: 'training', title: '消防培训' }
];

const Business: React.FC = () => {
  usePageTitle('业务板块');

  return (
    <Content className="business-page">
      <Elevator items={elevatorItems} />
      
      {/* 科技板块 */}
      <section className="section-tech" id="tech">
        <div className="section-content">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-text">
                <Title level={2}>{techSection.title}</Title>
                <Paragraph>{techSection.description}</Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="section-image">
                <div className="tech-overlay">
                  <img src={techSection.image} alt={techSection.title} />
                </div>
              </div>
            </Col>
          </Row>
          
          <div className="products-grid">
            <Title level={3}>产品展示</Title>
            <Row gutter={[24, 24]}>
              {techSection.products.map(product => (
                <Col xs={24} sm={12} lg={8} key={product.id}>
                  <Card 
                    className="product-card"
                    style={{ background: product.background }}
                  >
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

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

      {/* 培训教育板块 */}
      <section className="section-training" id="training">
        <div className="section-content">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-text">
                <Title level={2}>{trainingSection.title}</Title>
                <Paragraph>{trainingSection.description}</Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="section-image">
                <div className="tech-overlay">
                  <img src={trainingSection.image} alt={trainingSection.title} />
                </div>
              </div>
            </Col>
          </Row>
          
          <div className="courses-grid">
            <Title level={3}>培训课程</Title>
            <Row gutter={[24, 24]}>
              {trainingSection.courses.map(course => (
                <Col xs={24} sm={12} lg={8} key={course.id}>
                  <Card 
                    className="course-card"
                    style={{ background: course.background }}
                  >
                    <h4>{course.name}</h4>
                    <p>{course.description}</p>
                    <span className="duration">{course.duration}</span>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default Business; 