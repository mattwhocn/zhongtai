import React from 'react';
import { Layout, Typography, Breadcrumb, Space, Tag } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined, CalendarOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { gradients } from '../../../utils/gradients';
import { getNewsTagColor, getNewsBackground } from '../../../utils/newsHelpers';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 模拟获取新闻详情数据
const getNewsDetail = (category: string, id: string) => {
  const categoryName = category === 'company' ? '公司新闻' : 
                      category === 'industry' ? '行业新闻' : '培训活动';
  return {
    title: `${categoryName}标题 ${id}：这是一个示例新闻标题`,
    date: new Date(Date.now() - parseInt(id) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    category: categoryName,
    content: `
      这是新闻详情的第一段内容。这是新闻详情的第一段内容。这是新闻详情的第一段内容。
      这是新闻详情的第一段内容。这是新闻详情的第一段内容。这是新闻详情的第一段内容。
      
      这是新闻详情的第二段内容。这是新闻详情的第二段内容。这是新闻详情的第二段内容。
      这是新闻详情的第二段内容。这是新闻详情的第二段内容。这是新闻详情的第二段内容。
      
      这是新闻详情的第三段内容。这是新闻详情的第三段内容。这是新闻详情的第三段内容。
      这是新闻详情的第三段内容。这是新闻详情的第三段内容。这是新闻详情的第三段内容。
    `,
    background: getNewsBackground(parseInt(id)),
  };
};

const NewsDetail: React.FC = () => {
  const { category = '', id = '' } = useParams();
  const navigate = useNavigate();
  const newsDetail = getNewsDetail(category, id);
  
  usePageTitle(`${newsDetail.title} - 新闻中心`);

  return (
    <Content className="news-detail-page">
      {/* 顶部配图 */}
      <div 
        className="detail-banner"
        style={{ background: newsDetail.background }}
      >
        <div className="banner-content">
          <div className="tech-overlay" />
        </div>
      </div>

      <div className="detail-container">
        {/* 面包屑导航 */}
        <Breadcrumb className="detail-breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news">新闻中心</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{newsDetail.category}</Breadcrumb.Item>
        </Breadcrumb>

        {/* 返回按钮 */}
        <div className="back-link" onClick={() => navigate(-1)}>
          <LeftOutlined /> 返回列表
        </div>

        {/* 新闻内容 */}
        <div className="news-content">
          <Title level={2}>{newsDetail.title}</Title>
          
          <Space className="news-meta" size={16}>
            <Tag color={getNewsTagColor(newsDetail.category)}>{newsDetail.category}</Tag>
            <span className="news-date">
              <CalendarOutlined /> {newsDetail.date}
            </span>
          </Space>
          
          <div className="news-body">
            {newsDetail.content.split('\n\n').map((paragraph, index) => (
              <Paragraph key={index}>
                {paragraph}
              </Paragraph>
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default NewsDetail; 