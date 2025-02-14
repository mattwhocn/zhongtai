import React, { useState } from 'react';
import { Layout, Tabs, Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { t } from '../../utils/locale';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

// 新闻数据
const newsData = {
  company: [
    {
      id: 1,
      title: '中泰民安成功入选国家级"专精特新"企业名单',
      summary: '近日，工信部公布2024年度"专精特新"企业名单，我公司凭借在智能制造领域的突出表现成功入选...',
      date: '2024-03-15',
      background: gradients.techBlue,
      category: '公司新闻'
    },
    {
      id: 2,
      title: '公司与某大型制造企业达成战略合作',
      summary: '双方将在智能制造、数字化转型等领域展开深度合作，共同推动制造业升级...',
      date: '2024-03-10',
      background: gradients.businessBlue,
      category: '公司新闻'
    },
    // ... more company news
  ],
  industry: [
    {
      id: 1,
      title: '2024年智能制造发展趋势报告发布',
      summary: '报告指出，人工智能、5G等新技术将进一步推动制造业智能化升级...',
      date: '2024-03-12',
      background: gradients.techMix,
      category: '行业新闻'
    },
    {
      id: 2,
      title: '国家发布制造业数字化转型指导意见',
      summary: '意见强调要加快推进制造业数字化、网络化、智能化发展...',
      date: '2024-03-08',
      background: gradients.premiumGray,
      category: '行业新闻'
    },
    // ... more industry news
  ],
  training: [
    {
      id: 1,
      title: '2024智能制造技术研讨会圆满举行',
      summary: '来自全国各地的行业专家齐聚一堂，共同探讨智能制造发展趋势与技术创新...',
      date: '2024-03-05',
      background: gradients.techGold,
      category: '培训活动'
    },
    {
      id: 2,
      title: '数字化转型实践培训课程开课',
      summary: '为期三天的培训课程涵盖数字化转型战略、技术实施等多个方面...',
      date: '2024-03-01',
      background: gradients.businessBlue,
      category: '培训活动'
    },
    // ... more training events
  ]
};

const News: React.FC = () => {
  usePageTitle('新闻中心');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('company');

  const handleNewsClick = (category: string, id: number) => {
    navigate(`/news/${category}/${id}`);
  };

  return (
    <Content className="news-page">
      <div className="news-container">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="news-tabs"
        >
          <TabPane tab={t('news.tabs.company')} key="company">
            <Row gutter={[24, 24]}>
              {t('news.company').map((news: any) => (
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
                      <span className="news-category">{news.category}</span>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
          
          <TabPane tab={t('news.tabs.industry')} key="industry">
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
                      <span className="news-category">{news.category}</span>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
          
          <TabPane tab={t('news.tabs.training')} key="training">
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
                      <span className="news-category">{news.category}</span>
                      <h3>{news.title}</h3>
                      <p>{news.summary}</p>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Content>
  );
};

export default News; 