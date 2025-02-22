import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Row, Col, Card, Affix, Tag, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { getNewsTagColor } from '../../utils/newsHelpers';
import { newsContent } from '../../assets';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

// 在列表页可以直接使用 newsContent 数组
// 可以进行排序、过滤等操作
const sortedNews = newsContent.sort((a, b) => 
  new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
);

const News: React.FC = () => {
  usePageTitle('新闻中心');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('industry');
  const [showAffix, setShowAffix] = useState(false);
  
  // 根据当前 tab 筛选新闻
  const filteredNews = sortedNews.filter(
    news => news.metadata.categoryKey === activeTab
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

  const handleNewsClick = (id: string) => {
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
              <TabPane tab="行业新闻" key="industry" />
              <TabPane tab="公司新闻" key="company" />
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
              {filteredNews.length ? filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div className="news-image">
                      <div className="image-overlay">
                        <img src={news.metadata.cover} alt={news.metadata.title} />
                      </div>
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.metadata.category)}>{news.metadata.category}</Tag>
                      <h3>{news.metadata.title}</h3>
                      <span className="news-date">{news.metadata.date}</span>
                    </div>
                  </Card>
                </Col>
              )) : (
              <Col span={24}>
                <Empty style={{ margin: '100px' }} description="暂无相关新闻" />
              </Col>
            )}
            </Row>
          )}
          {activeTab === 'industry' && (
            <Row gutter={[24, 24]}>
              {filteredNews.length ? filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div 
                      className="news-image"
                      style={{ background: news.metadata.cover }}
                    >
                      <div className="image-overlay">
                        <img src={news.metadata.cover} alt={news.metadata.title} />
                      </div>
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.metadata.category)}>{news.metadata.category}</Tag>
                      <h3>{news.metadata.title}</h3>
                      <span className="news-date">{news.metadata.date}</span>
                    </div>
                  </Card>
                </Col>
              )) : (
                <Col span={24}>
                  <Empty style={{ margin: '100px' }} description="暂无相关新闻" />
                </Col>
              )}
            </Row>
          )}
          {activeTab === 'training' && (
            <Row gutter={[24, 24]}>
              {filteredNews.length ? filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div 
                      className="news-image"
                      style={{ background: news.metadata.cover }}
                    >
                      <div className="image-overlay">
                        <img src={news.metadata.cover} alt={news.metadata.title} />
                      </div>
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.metadata.category)}>{news.metadata.category}</Tag>
                      <h3>{news.metadata.title}</h3>
                      <span className="news-date">{news.metadata.date}</span>
                    </div>
                  </Card>
                </Col>
              )) : (
                <Col span={24}>
                  <Empty style={{ margin: '100px' }} description="暂无相关新闻" />
                </Col>
              )}
            </Row>
          )}
        </div>
      </div>
    </Content>
  );
};

export default News; 