import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { gradients } from '../../../utils/gradients';
import { usePageTitle } from '../../../hooks/usePageTitle';
import businessTraining from '../../../assets/images/business/business-training.png';

const { Title, Paragraph } = Typography;

// 培训教育板块数据
const trainingSection = {
  title: '培训学校',
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


const TrainingBusiness: React.FC = () => {
  usePageTitle('培训学校');
  
  return (
    <Layout.Content className="training-business-page">
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
    </Layout.Content>
  );
};

export default TrainingBusiness; 