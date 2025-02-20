import React from 'react';
import { Card, Col, Layout, Row, Typography } from 'antd';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { gradients } from '../../../utils/gradients';
import businessTech from '../../../assets/images/business/business-tech.png';

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

const TechBusiness: React.FC = () => {
  usePageTitle('科技板块');
  
  return (
    <Layout.Content className="business-page">
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
    </Layout.Content>
  );
};

export default TechBusiness; 