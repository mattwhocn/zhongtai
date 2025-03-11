import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Layout, Row, Col, Typography, Card, Button, Carousel, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getNewsTagColor } from '../../utils/newsHelpers';
import banner0 from '../../assets/images/banner/banner0.png';
import banner1 from '../../assets/images/banner/banner1.png';
import banner2 from '../../assets/images/banner/banner2.png';
import banner3 from '../../assets/images/banner/banner3.png';
import banner4 from '../../assets/images/banner/banner4.png';
import banner5 from '../../assets/images/banner/banner5.png';
import companyImage from '../../assets/images/about/company.png';
import partyBuilding from '../../assets/images/home/party-building.png';
import security1 from '../../assets/images/business/security1.jpg';
import security2 from '../../assets/images/business/security2.jpg';
import security3 from '../../assets/images/business/security3.jpg';
import tech1 from '../../assets/images/business/tech1.png';
import tech2 from '../../assets/images/business/tech2.jpg';
import tech3 from '../../assets/images/business/tech3.png';
import training1 from '../../assets/images/business/training1.png';
import training2 from '../../assets/images/business/training2.jpg';
import training3 from '../../assets/images/business/training3.jpg';
import { companyProfile } from '../About';
import { newsContent, NewsItem } from '../News/helper';
import { gradients } from '@/utils/gradients';
import { cultureSections } from '../Career';
import './style.less';
import { formatExcelDate } from '../News/Detail';
import { withErrorBoundary } from '@/components/ErrorBoundary';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const defaultBannerData = [
  {
    title: '',
    description: '',
    image: banner4,
  },
  {
    title: '中泰民安·安保',
    description: '让城市更安全，让文明更韧性',
    image: banner1,
  },
  {
    title: '兴泰科技',
    description: '兴泰启航，科技赋能',
    image: banner2,
  },
  {
    title: '兴宾学校',
    description: '兴宾育才，安全未来',
    image: banner5,
  },
];

// 业务展示数据
const businessShowcase = [
  {
    id: 1,
    desc: '安保执勤',
    image: security1,
  },
  {
    id: 2,
    desc: '抢险救灾',
    image: security2,
  },
  {
    id: 3,
    desc: '红十字会',
    image: security3,
  },
  {
    id: 4,
    desc: '电子沙盘',
    image: tech1,
  },
  {
    id: 5,
    desc: '国际维和指挥控制平台',
    image: tech2,
  },
  {
    id: 6,
    desc: '科技赋能',
    image: tech3,
  },
  {
    id: 7,
    desc: '保安考试培训',
    image: training1,
  },
  {
    id: 8,
    desc: '消防培训',
    image: training2,
  },
  {
    id: 8,
    desc: '特勤护卫',
    image: training3,
  }
];

const Home: React.FC = () => {
  usePageTitle('首页');
  const navigate = useNavigate();
  const [hoveredNews, setHoveredNews] = useState<NewsItem | null>(null);
  const [bannerData, setBannerData] = useState<any[]>(defaultBannerData);
  const [newsList, setNewsList] = useState<NewsItem[]>(newsContent);

  useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
    // 接口请求
    fetchBannerConfig();
    fetchNewsList();
  }, []);

  const fetchBannerConfig = async () => {
    try {
      const response = await axios.get('http://static.ztmagroup.com/data/json/banner/banner.json');
      setBannerData(response.data);
    } catch (error) {
      console.error('获取banner配置失败:', error);
    }
  };

  const fetchNewsList = async () => {
    try {
      const response = await axios.get('http://static.ztmagroup.com/data/json/news/news.json');
      const newsList = response.data?.map((item: any) => ({
        ...item,
        date: formatExcelDate(item.date),
        category: item.type,
      }))
      setNewsList(newsList);
    } catch (error) {
      console.error('获取news配置失败:', error);
    }
  };

  // 获取每个分类最新的一条新闻
  const latestNews = useMemo(() => {
    // 按分类对新闻进行分组
    const newsByCategory = newsContent.reduce((acc, news) => {
      const category = news.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(news);
      return acc;
    }, {} as Record<string, NewsItem[]>);

    const categaryOrder = ['党建引领', '公司新闻' , '培训活动' , '行业新闻']
    // 对每个分类的新闻按日期排序，并取最新的一条
    return categaryOrder
      .map(category => {
        const categoryNews = newsByCategory[category];
        return categoryNews?.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )[0];
      })
      .slice(0, 3); // 只取前3个分类的最新新闻
  }, [newsList]);

  // 获取当前显示的新闻
  const displayedNews = useMemo(() => {
    return hoveredNews || latestNews[0];
  }, [hoveredNews, latestNews]);

  // 集团荣誉数据
  const groupHonorData = cultureSections.find(section => section.title === '集团荣誉')?.items ?? [];

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
          const nextIndex = next % bannerData.length;
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
        {bannerData.map((item, index) => (
          <div key={item.title}>
            <div className={`carousel-item carousel-item-${index}`}>
              <div className="carousel-content" style={{ background: gradients.techBlue }}>
                {item?.image && <img 
                  src={item?.image}
                  alt={item.title}
                  className="carousel-image"
                />}
                <div className="carousel-text">
                  <p>{item.title}</p>
                  <h2>{item.description}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 党群工作 */}
      <section className="party-working">
        <div className="section-content">
          <Title level={2}>党群工作</Title>
          <div className="global-map">
            <div className="map-overlay">
              <img src={partyBuilding} alt="globalLayout" />
            </div>
          </div>
          <div className='global-description'>
            <h2>党建引领，筑牢企业发展根基</h2>  
            <p>
              中泰民安安全服务集团有限公司始终将党建工作作为企业发展的核心动力，秉承"党建强，企业才更强"的理念，将党的政治优势转化为企业核心竞争力。自成立以来，公司积极响应国家号召，通过建立规范化党组织、深化党建与业务融合、履行社会责任等举措，推动企业高质量发展。
            </p>
          </div>
        </div>
      </section>

      {/* 集团简介 */}
      <section className="company-intro">
        <div className="intro-content">
          <div className="section-header">
            <Title level={2}>集团简介</Title>
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
                  兴泰科技：兴泰启航，科技赋能
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

      {/* 业务案例 */}
      <section className="business-showcase">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>业务案例</Title>
            <Link to="/business" className="view-more">
              查看更多 <RightOutlined />
            </Link>
          </div>
          <Row gutter={[24, 24]}>
            {businessShowcase.map(item => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <div className="showcase-card">
                  <div className="tech-overlay">
                    <img src={item.image} alt={item.desc} />
                  </div>
                  <div className="card-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 集团荣誉 */}
      <section className="group-honor">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>集团荣誉</Title>
          </div>
          <Row gutter={[24, 24]}>
            {groupHonorData.map((item, itemIndex) => (
              <Col xs={24} sm={8} lg={8} key={itemIndex}>
                <Card 
                  className="culture-card"
                  style={{ background: '#ffffff' }}
                >
                  <div className={`tech-overlay tech-overlay-contain`}>
                    <img src={item} alt={`culture-${itemIndex}`} />
                  </div>
                </Card>
              </Col>
            ))}
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
                    <img src={displayedNews?.cover} alt={displayedNews.title} />
                  </div>  
                </div>
                <div className="news-content">
                  <h3>{displayedNews.title}</h3>
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
                          <h3>{news?.title}</h3>
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

export default withErrorBoundary(Home); 