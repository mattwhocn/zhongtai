import React from 'react';
import { Layout, Row, Col, Typography, Card, Button, Carousel, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { newsData } from '../News';  // 导入新闻数据
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
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const carouselData = [
  {
    id: 1,
    title: '让城市更安全，让文明更韧性',
    desc: '这是第一页的描述文案这是第一页的描述文案',
    image: banner1,
  },
  {
    id: 2,
    title: '兴泰启航，科技护疆',
    desc: '这是第二页的描述文案这是第二页的描述文案',
    image: banner2,
  },
  {
    id: 3,
    title: '兴宾育才，安全未来',
    desc: '这是第三页的描述文案这是第三页的描述文案',
    image: banner3,
  },
];

// 业务展示数据
const businessShowcase = [
  {
    id: 1,
    title: '电子沙盘',
    desc: '电子沙盘平台',
    image: business1,
  },
  {
    id: 2,
    title: '维和平台',
    desc: '维和指挥控制平台',
    image: business2,
  },
  {
    id: 3,
    title: '保安培训',
    desc: '保安考试培训',
    image: business3,
  },
  {
    id: 4,
    title: '消防培训',
    desc: '泰康消防培训',
    image: business4,
  },
  {
    id: 5,
    title: '医院保安项目',
    desc: '医院保安项目',
    image: business5,
  },
  {
    id: 6,
    title: '抗洪救灾项目',
    desc: '抗洪救灾项目',
    image: business6,
  }
];

const Home: React.FC = () => {
  usePageTitle('首页');
  const navigate = useNavigate();
  // 添加悬停状态
  const [hoveredNews, setHoveredNews] = React.useState<typeof latestNews.featured | null>(null);

  React.useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }, []);

  // 获取每种类型最新的新闻
  const latestNews = {
    featured: newsData.find(news => news.category === '公司新闻')!,  // 添加非空断言
    list: [
      newsData.filter(news => news.category === '公司新闻')[1]!,     // 添加非空断言
      newsData.find(news => news.category === '行业新闻')!,          // 添加非空断言
      newsData.find(news => news.category === '培训活动')!           // 添加非空断言
    ].filter(Boolean)  // 过滤掉可能的 undefined
  };

  // 获取当前显示的新闻
  const displayedNews = hoveredNews || latestNews.featured;

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
          const nextSlide = document.querySelector(`.carousel-item-${nextIndex}`);
          if (nextSlide) {
            nextSlide.classList.add('active');
          }
        }}
      >
        {carouselData.map((item, index) => (
          <div key={item.id}>
            <div className={`carousel-item carousel-item-${index}`}>
              <div className="carousel-content">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="carousel-image"
                />
                <div className="carousel-text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
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
              <Paragraph>
                中泰民安成立于xxxxx年，是一家企业。中泰民安成立于xxxxx年，是一家企业。
                中泰民安成立于xxxxx年，是一家企业。中泰民安成立于xxxxx年，是一家企业。
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
            </Col>
            <Col xs={24} lg={12}>
              <div 
                className="intro-image"
                style={{ background: gradients.techBlue }}
              >
                <div className="tech-overlay" />
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
              <Card 
                className="featured-news"
                style={{ background: displayedNews.background }}
                onClick={() => navigate(`/news/${displayedNews.id}`)}
              >
                <div className="news-image">
                  <div className="image-overlay" />
                </div>
                <div className="news-content">
                  <h3>{displayedNews.title}</h3>
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <div className="news-list">
                {latestNews.list.map((news, index) => (
                  <Card 
                    key={index}
                    className="news-card"
                    onMouseEnter={() => setHoveredNews(news)}
                    onMouseLeave={() => setHoveredNews(null)}
                  >
                    <div className="news-card-content">
                      <div className="news-info">
                        <div className="news-header">
                          <h3>{news.title}</h3>
                          <Link to={`/news/${news.id}`} className="view-detail">
                            查看详情 <RightOutlined />
                          </Link>
                        </div>
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
        </div>
      </section>
    </Content>
  );
};

export default Home; 