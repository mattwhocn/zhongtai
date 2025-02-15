import React from 'react';
import { Layout, Row, Col, Typography, Card, Button, Carousel, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { newsData } from '../News';  // 导入新闻数据
import { getNewsTagColor } from '../../utils/newsHelpers';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const carouselData = [
  {
    id: 1,
    title: '这是第一页',
    desc: '这是第一页的描述文案这是第一页的描述文案',
    background: gradients.techBlue,
  },
  {
    id: 2,
    title: '这是第二页',
    desc: '这是第二页的描述文案这是第二页的描述文案',
    background: gradients.businessBlue,
  },
  {
    id: 3,
    title: '这是第三页',
    desc: '这是第三页的描述文案这是第三页的描述文案',
    background: gradients.techMix,
  },
  {
    id: 4,
    title: '这是第四页',
    desc: '这是第四页的描述文案这是第四页的描述文案',
    background: gradients.techGold,
  },
];

const Home: React.FC = () => {
  usePageTitle('首页');
  const navigate = useNavigate();

  React.useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }, []);

  // 获取每种类型最新的新闻
  const latestNews = {
    featured: newsData.company[0],  // 公司新闻第一条作为特色新闻
    list: [
      newsData.company[1],  // 公司新闻第二条
      newsData.industry[0], // 行业新闻第一条
      newsData.training[0]  // 培训活动第一条
    ]
  };

  return (
    <Content>
      {/* 轮播图 */}
      <Carousel 
        autoplay 
        className="home-carousel"
        beforeChange={(current, next) => {
          // 移除当前 slide 的 active 类
          const currentSlide = document.querySelector(`.carousel-item-${current}`);
          if (currentSlide) {
            currentSlide.classList.remove('active');
          }
          
          // 计算实际的下一个索引
          const nextIndex = next % carouselData.length;
          
          // 为下一个 slide 添加 active 类
          const nextSlide = document.querySelector(`.carousel-item-${nextIndex}`);
          if (nextSlide) {
            nextSlide.classList.add('active');
          }
        }}
      >
        {carouselData.map((item, index) => (
          <div key={item.id}>
            <div className={`carousel-item carousel-item-${index}`}>
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
                中泰民安科技有限公司成立于xxxx年，是一家专注于xxxxxxxxxxxxxxxxx的企业。
                xx余年来，公司始终坚持"xxxxxxxx"的理念
              </Paragraph>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  xxxxxxxxxxxxxxxx
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  xxxxxxxxxxxxxxxx
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  xxxxxxxxxxxxxxxx
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  xxxxxxxxxxxxxxxx
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
              style={{ background: latestNews.featured.background }}
              onClick={() => navigate(`/news/company/${latestNews.featured.id}`)}
            >
              <div className="news-image">
                <div className="image-overlay" />
              </div>
              <div className="news-content">
                <h3>{latestNews.featured.title}</h3>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <div className="news-list">
              {latestNews.list.map((news, index) => (
                <Card 
                  key={index}
                  className="news-card"
                  onClick={() => {
                    const category = news.category === '公司新闻' ? 'company' :
                                   news.category === '行业新闻' ? 'industry' : 'training';
                    navigate(`/news/${category}/${news.id}`);
                  }}
                >
                  <div className="news-card-content">
                    <div className="news-info">
                      <h3>{news.title}</h3>
                      <div className="news-meta">
                        <Tag color={getNewsTagColor(news.category)} bordered={false}>
                          {news.category}
                        </Tag>
                        <span className="news-date">{news.date}</span>
                      </div>
                      <p className="news-summary">{news.summary}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </section>
    </Content>
  );
};

export default Home; 