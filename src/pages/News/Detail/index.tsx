import React, { useEffect, useState } from 'react';
import { Layout, Typography, Breadcrumb, Space, Tag, Spin, message } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined, CalendarOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { getNewsTagColor } from '../../../utils/newsHelpers';
import './style.less';
import { newsContent } from '../../../content/news';

const { Content } = Layout;
const { Title } = Typography;

interface NewsMetadata {
  title: string;
  date: string;
  category: string;
  description: string;
  cover?: string;
}

interface NewsContent {
  metadata: NewsMetadata;
  content: string;
}

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<NewsContent | null>(null);
  
  useEffect(() => {
    if (id && newsContent[id]) {
      setNewsData(newsContent[id]);
    } else {
      message.error('新闻内容获取失败，3秒后返回新闻列表');
      setTimeout(() => navigate('/news'), 3000);
    }
    setLoading(false);
  }, [id, navigate]);

  usePageTitle(newsData?.metadata.title ? `${newsData.metadata.title} - 新闻中心` : '新闻中心');

  if (loading) {
    return <div className="loading-container"><Spin size="large" /></div>;
  }

  if (!newsData) return null;

  const { metadata, content } = newsData;

  return (
    <Content className="news-detail-page">
      {/* 顶部配图 */}
      {metadata.cover && (
        <div className="detail-banner">
          <img src={metadata.cover} alt={metadata.title} />
        </div>
      )}

      <div className="detail-container">
        {/* 面包屑导航 */}
        <Breadcrumb className="detail-breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news">新闻中心</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{metadata.category}</Breadcrumb.Item>
        </Breadcrumb>

        {/* 返回按钮 */}
        <div className="back-link" onClick={() => navigate(-1)}>
          <LeftOutlined /> 返回列表
        </div>

        {/* 新闻内容 */}
        <div className="news-content">
          <Title level={2}>{metadata.title}</Title>
          
          <Space className="news-meta" size={16}>
            <Tag color={getNewsTagColor(metadata.category)}>{metadata.category}</Tag>
            <span className="news-date">
              <CalendarOutlined /> {metadata.date}
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
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Content>
  );
};

// 解析 frontmatter
function parseFrontmatter(frontmatter: string): NewsMetadata {
  const lines = frontmatter.trim().split('\n');
  const metadata: any = {};
  
  lines.forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      metadata[key.trim()] = values.join(':').trim().replace(/^['"]|['"]$/g, '');
    }
  });
  
  return metadata as NewsMetadata;
}

export default NewsDetail; 