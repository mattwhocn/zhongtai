import React, { useEffect, useState } from 'react';
import { Layout, Typography, Breadcrumb, Space, Tag, Spin, message } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined, CalendarOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { getNewsTagColor } from '../../../utils/newsHelpers';
import { findNewsById, NewsItem } from '../helper';
import { gradients } from '@/utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title } = Typography;

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<NewsItem | null>(null);

  // useEffect(() => {
  //   const markdownUrl = 'http://static.ztmagroup.com/data/markdown/1741189420328_news.md';

  //   fetch(markdownUrl, {
  //     method: 'GET',
  //     mode: 'cors'
  //   })
  //    .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.text();
  //     })
  //    .then(markdownContent => {
  //       // markdownContent 就是读取到的 Markdown 文件内容，作为字符串处理
  //       console.log(markdownContent);
  //       // 可以在这里进行进一步的操作，比如渲染到页面上或者传递给其他函数
  //     })
  //    .catch(error => {
  //       console.error('There has been a problem with your fetch operation:', error);
  //     });
  // }, []);
  
  useEffect(() => {
    const news = findNewsById(id || '');
    if (news) {
      setNewsData(news);
    } else {
      message.error('新闻内容获取失败，3秒后返回新闻列表');
      setTimeout(() => navigate('/news'), 3000);
    }
    setLoading(false);
  }, [id, navigate]);

  usePageTitle(newsData?.title ? `${newsData.title} - 新闻中心` : '新闻中心');

  if (loading) {
    return <div className="loading-container"><Spin size="large" /></div>;
  }

  if (!newsData) return null;

  return (
    <Content className="news-detail-page">
      {/* 顶部配图 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>{newsData.title}</h1>
        </div>
        <div className="tech-overlay" />
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
          <Breadcrumb.Item>{newsData.category}</Breadcrumb.Item>
        </Breadcrumb>

        {/* 返回按钮 */}
        <div className="back-link" onClick={() => navigate(-1)}>
          <LeftOutlined /> 返回列表
        </div>

        {/* 新闻内容 */}
        <div className="news-content">
          <Space className="news-meta" size={16}>
            <Tag color={getNewsTagColor(newsData.category)}>{newsData.category}</Tag>
            <span className="news-date">
              <CalendarOutlined /> {newsData.date}
            </span>
          </Space>
          
          <div className="news-body markdown-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // 自定义渲染组件
                h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
                h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
                p: ({ node, ...props }) => <p className="md-p" {...props} />,
                ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
                ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
                li: ({ node, ...props }) => <li className="md-li" {...props} />,
                img: ({ node, ...props }) => <img className="md-img" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="md-blockquote" {...props} />,
              }}
            >
              {newsData.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default NewsDetail; 