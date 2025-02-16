import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Row, Col, Card, Affix, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { getNewsTagColor } from '../../utils/newsHelpers';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

type NewsCategory = '公司新闻' | '行业新闻' | '培训活动';

// 生成指定数量的新闻数据
const generateNewsData = (count: number) => {
  const categories: NewsCategory[] = ['公司新闻', '行业新闻', '培训活动'];
  const titles: Record<NewsCategory, string[]> = {
    '公司新闻': [
      '中泰民安公司新闻示例一',
      '中泰民安公司新闻示例二',
      '中泰民安公司新闻示例三',
    ],
    '行业新闻': [
      '中泰民安公司行业新闻示例一',
      '中泰民安公司行业新闻示例二',
      '中泰民安公司行业新闻示例三',
    ],
    '培训活动': [
      '中泰民安公司培训活动示例一',
      '中泰民安公司培训活动示例二',
      '中泰民安公司培训活动示例三',
    ]
  };

  return Array.from({ length: count }, (_, index) => {
    const category = categories[index % 3] as NewsCategory;
    const titleIndex = Math.floor(Math.random() * titles[category].length);
    
    return {
      id: index + 1,
      title: titles[category][titleIndex],
      category: category,
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      summary: `这是一段关于${category}的示例摘要文字，用于展示新闻内容的概要信息。这是一段示例新闻摘要文字，用于展示新闻内容的概要信息。`,
      background: index % 4 === 0 ? gradients.techBlue :
                 index % 4 === 1 ? gradients.businessBlue :
                 index % 4 === 2 ? gradients.techMix :
                 gradients.techGold
    };
  });
};

// 生成90条新闻数据
export const newsData = generateNewsData(90);

const News: React.FC = () => {
  usePageTitle('新闻中心');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('company');
  const [showAffix, setShowAffix] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  
  // 根据当前 tab 获取对应的分类
  const getCategoryByTab = (tab: string): NewsCategory => {
    switch (tab) {
      case 'company': return '公司新闻';
      case 'industry': return '行业新闻';
      case 'training': return '培训活动';
      default: return '公司新闻';
    }
  };

  // 根据当前 tab 筛选新闻
  const filteredNews = newsData.filter(
    news => news.category === getCategoryByTab(activeTab)
  );

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.news-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <Content className="news-page">
      {/* 顶部配图 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>新闻中心</h1>
          <p>了解公司最新动态、行业资讯与培训活动</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 只让 Tabs 导航栏吸顶 */}
      <div className="tabs-wrapper">
        <Affix offsetTop={64}>
          <div className={`tabs-container ${showAffix ? 'affix-active' : ''}`}>
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              className="news-tabs"
            >
              <TabPane tab="公司新闻" key="company" />
              <TabPane tab="行业新闻" key="industry" />
              <TabPane tab="培训活动" key="training" />
            </Tabs>
          </div>
        </Affix>
      </div>

      {/* 新闻内容区域 */}
      <div className="news-container">
        <div className="news-content">
          {activeTab === 'company' && (
            <Row gutter={[24, 24]}>
              {filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div 
                      className="news-image"
                      style={{ background: news.background }}
                    >
                      <div className="image-overlay" />
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.category)}>{news.category}</Tag>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === 'industry' && (
            <Row gutter={[24, 24]}>
              {filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div 
                      className="news-image"
                      style={{ background: news.background }}
                    >
                      <div className="image-overlay" />
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.category)}>{news.category}</Tag>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === 'training' && (
            <Row gutter={[24, 24]}>
              {filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div 
                      className="news-image"
                      style={{ background: news.background }}
                    >
                      <div className="image-overlay" />
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.category)}>{news.category}</Tag>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </Content>
  );
};

export default News; 