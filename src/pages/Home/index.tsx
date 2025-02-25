import React, { useEffect } from 'react';
import { Layout, Row, Col, Typography, Card, Button, Carousel, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getNewsTagColor } from '../../utils/newsHelpers';
import banner1 from '../../assets/images/banner/banner1.png';
import banner2 from '../../assets/images/banner/banner2.png';
import banner3 from '../../assets/images/banner/banner3.png';
import business1 from '../../assets/images/business/business1.png';
import business2 from '../../assets/images/business/business2.jpg';
import business3 from '../../assets/images/business/business3.png';
import business4 from '../../assets/images/business/business4.png';
import business5 from '../../assets/images/business/business5.jpg';
import business6 from '../../assets/images/business/business6.jpg';
import companyImage from '../../assets/images/about/company.png';
import { companyProfile } from '../About';
import { newsContent, NewsItem } from '../../assets';
import { gradients } from '@/utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const carouselData = [
  {
    id: 0,
    title: '中泰民安集团',
    desc: '中泰民安集团',
    background: gradients.techBlue,
  },
  {
    id: 1,
    title: '中泰民安',
    desc: '让城市更安全，让文明更韧性',
    image: banner1,
  },
  {
    id: 2,
    title: '兴泰科技',
    desc: '兴泰启航，科技护疆',
    image: banner2,
  },
  {
    id: 3,
    title: '兴宾学校',
    desc: '兴宾育才，安全未来',
    image: banner3,
  },
];

// 业务展示数据
const businessShowcase = [
  {
    id: 1,
    title: '医院保安项目',
    desc: '医院保安项目',
    image: business5,
  },
  {
    id: 2,
    title: '电子沙盘',
    desc: '电子沙盘平台',
    image: business1,
  },
  {
    id: 3,
    title: '保安培训',
    desc: '保安考试培训',
    image: business3,
  },
  {
    id: 4,
    title: '抗洪救灾项目',
    desc: '抗洪救灾项目',
    image: business6,
  },
  {
    id: 5,
    title: '维和平台',
    desc: '维和指挥控制平台',
    image: business2,
  },
  {
    id: 6,
    title: '消防培训',
    desc: '泰康消防培训',
    image: business4,
  }
];

const Home: React.FC = () => {
  usePageTitle('首页');
  const navigate = useNavigate();
  // 添加悬停状态
  const [hoveredNews, setHoveredNews] = React.useState<NewsItem | null>(null);

  useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }, []);

  // 获取最新的3条新闻
  const latestNews = newsContent
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 3);

  // 获取当前显示的新闻
  const displayedNews = hoveredNews || latestNews[0];

  return (
    <Content className="home-page">
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
          const nextSlideList = document.querySelectorAll(`.carousel-item-${nextIndex}`);
          // 这个Carousel为了循环轮播，最后一张轮播图会显示两次，所以需要遍历所有的节点
          if (nextSlideList.length > 0) {
            nextSlideList.forEach(slide => {
              slide.classList.add('active');
            });
          }
        }}
      >
        {carouselData.map((item, index) => (
          <div key={item.id}>
            <div className={`carousel-item carousel-item-${index}`}>
              <div className="carousel-content" style={{ background: item.background }}>
                {item?.image && <img 
                  src={item?.image} 
                  alt={item.title}
                  className="carousel-image"
                />}
                <div className="carousel-text">
                  <p>{item.title}</p>
                  <h2>{item.desc}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 业务展示 */}
      <section className="business-showcase">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>业务展示</Title>
            <Link to="/business" className="view-more">
              查看更多 <RightOutlined />
            </Link>
          </div>
          <Row gutter={[24, 24]}>
            {businessShowcase.map(item => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <div className="showcase-card">
                  <div className="tech-overlay">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="company-intro">
        <div className="intro-content">
          <div className="section-header">
            <Title level={2}>公司简介</Title>
          </div>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Paragraph className='intro-content-text'>
                {companyProfile.content}
              </Paragraph>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  中泰民安：让城市更安全，让文明更韧性
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  兴泰科技：兴泰启航，科技护疆
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  兴宾学校：兴宾育才，安全未来
                </div>
              </div>
              <Link to="/about">
                <Button type="primary" size="large">
                  了解更多 <RightOutlined />
                </Button>
              </Link>
            </Col>
            <Col xs={24} lg={12}>
              <div className="intro-image">
                <div className="tech-overlay">
                  <img src={companyImage} alt="companyImage" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 新闻动态 */}
      <section className="news-section">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>新闻动态</Title>
            <Link to="/news" className="view-more">
              查看更多 <RightOutlined />
            </Link>
          </div>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <div 
                className="featured-news"
                onClick={() => navigate(`/news/${displayedNews.id}`)}
              >
                <div className="news-image">
                  <div className="image-overlay">
                    <img src={displayedNews.metadata.cover} alt={displayedNews.metadata.title} />
                  </div>  
                </div>
                <div className="news-content">
                  <h3>{displayedNews.metadata.title}</h3>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="news-list">
                {latestNews.map((news, index) => (
                  <Card 
                    key={index}
                    className="news-card"
                    onMouseEnter={() => setHoveredNews(news)}
                    onMouseLeave={() => setHoveredNews(null)}
                  >
                    <div className="news-card-content">
                      <div className="news-info">
                        <div className="news-header">
                          <h3>{news.metadata.title}</h3>
                          <Link to={`/news/${news.id}`} className="view-detail">
                            查看详情 <RightOutlined />
                          </Link>
                        </div>
                        <div className="news-meta">
                          <Tag color={getNewsTagColor(news.metadata.category)} bordered={false}>
                            {news.metadata.category}
                          </Tag>
                          <span className="news-date">{news.metadata.date}</span>
                        </div>
                        <p className="news-summary">{news.metadata.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default Home; 