import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Row, Col, Card, Affix, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { getNewsTagColor } from '../../utils/newsHelpers';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

// 生成指定数量的新闻数据
const generateNewsData = (category: string, count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `${category}标题 ${index + 1}：这是一个示例新闻标题，编号 ${index + 1}`,
    summary: `这是${category}摘要 ${index + 1}：这是一段示例新闻摘要文字，用于展示新闻内容的概要信息。这是一段示例新闻摘要文字，用于展示新闻内容的概要信息。`,
    date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    background: index % 4 === 0 ? gradients.techBlue :
                index % 4 === 1 ? gradients.businessBlue :
                index % 4 === 2 ? gradients.techMix :
                gradients.techGold,
    category: category
  }));
};

// 新闻数据
export const newsData = {
  company: generateNewsData('公司新闻', 30),
  industry: generateNewsData('行业新闻', 30),
  training: generateNewsData('培训活动', 30)
};

const News: React.FC = () => {
  usePageTitle('新闻中心');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('company');
  const [showAffix, setShowAffix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.news-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsClick = (category: string, id: number) => {
    navigate(`/news/${category}/${id}`);
  };

  return (
    <Content className="news-page">
      {/* 顶部配图 */}
      <div 
        className="news-banner"
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
              {newsData.company.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick('company', news.id)}
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
              {newsData.industry.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick('industry', news.id)}
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
              {newsData.training.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick('training', news.id)}
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