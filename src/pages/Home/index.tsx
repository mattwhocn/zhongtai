import React from 'react';
import { Layout, Row, Col, Typography, Card, Button, Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const carouselData = [
  {
    id: 1,
    title: '智能制造解决方案',
    desc: '为制造业提供全方位的智能化升级服务',
    background: gradients.techBlue,
  },
  {
    id: 2,
    title: '数字化转型',
    desc: '助力企业实现数字化转型升级',
    background: gradients.businessBlue,
  },
  {
    id: 3,
    title: '最新动态',
    desc: '公司荣获2024年度创新企业奖',
    background: gradients.techMix,
  },
  {
    id: 4,
    title: '技术研发',
    desc: '持续创新，引领行业发展',
    background: gradients.techGold,
  },
];

const Home: React.FC = () => {
  usePageTitle('首页');

  return (
    <Content>
      {/* 轮播图 */}
      <Carousel autoplay className="home-carousel">
        {carouselData.map(item => (
          <div key={item.id}>
            <div className="carousel-item">
              <div 
                className="carousel-content"
                style={{ background: item.background }}
              >
                <div className="carousel-text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 公司简介 */}
      <section className="company-intro">
        <Row gutter={[48, 48]}>
          <Col xs={24} md={12}>
            <div className="intro-content">
              <Title level={2}>公司简介</Title>
              <Paragraph className="intro-description">
                中泰民安科技有限公司成立于2000年，是一家专注于智能制造和数字化转型的高新技术企业。
                二十余年来，公司始终坚持"创新驱动发展"的理念，以卓越的技术能力和丰富的行业经验，
                为客户提供全方位的解决方案。
              </Paragraph>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  国家级高新技术企业
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  智能制造解决方案提供商
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  数字化转型服务专家
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  技术创新研发中心
                </div>
              </div>
              <Link to="/about">
                <Button type="primary" size="large">
                  了解更多 <RightOutlined />
                </Button>
              </Link>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div 
              className="intro-image"
              style={{ background: gradients.premiumGray }}
            >
              <div className="tech-overlay" />
            </div>
          </Col>
        </Row>
      </section>

      {/* 新闻动态 */}
      <section className="news-section">
        <div className="section-header">
          <Title level={2}>新闻动态</Title>
          <Link to="/news" className="view-more">
            查看更多 <RightOutlined />
          </Link>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card 
              className="featured-news"
              style={{ background: gradients.techBlue }}
            >
              <div className="news-image">
                <div className="image-overlay" />
              </div>
              <div className="news-content">
                <h3>中泰民安成功入选国家级"专精特新"企业名单</h3>
                <p>近日，工信部公布2024年度"专精特新"企业名单，我公司凭借在智能制造领域的突出表现成功入选...</p>
                <span className="news-date">2024-03-15</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <div className="news-list">
              <Card className="news-card">
                <div className="news-card-content">
                  <div className="news-info">
                    <h3>公司与某大型制造企业达成战略合作</h3>
                    <p>双方将在智能制造、数字化转型等领域展开深度合作，共同推动制造业升级...</p>
                  </div>
                  <span className="news-date">2024-03-10</span>
                </div>
              </Card>
              <Card className="news-card">
                <div className="news-card-content">
                  <div className="news-info">
                    <h3>2024智能制造技术研讨会圆满举行</h3>
                    <p>来自全国各地的行业专家齐聚一堂，共同探讨智能制造发展趋势与技术创新...</p>
                  </div>
                  <span className="news-date">2024-03-05</span>
                </div>
              </Card>
              <Card className="news-card">
                <div className="news-card-content">
                  <div className="news-info">
                    <h3>数字化转型实践培训课程开课</h3>
                    <p>为期三天的培训课程涵盖数字化转型战略、技术实施等多个方面...</p>
                  </div>
                  <span className="news-date">2024-03-01</span>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
    </Content>
  );
};

export default Home; 