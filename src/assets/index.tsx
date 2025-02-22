// 直接导入 markdown 文件
import news1Content from './news/news1.md';
import news2Content from './news/news2.md';
import news1Cover from './images/news1.png';

export type NewsCategory = '公司新闻' | '行业新闻' | '培训活动';
export type NewsCategoryKey = 'company' | 'industry' | 'training';

export interface NewsItem {
  id: string;
  metadata: {
    title: string;
    date: string;
    category: NewsCategory;
    categoryKey: NewsCategoryKey,
    description: string;
    cover: string;
  };
  content: string;
}

export const newsContent: NewsItem[] = [
  {
    id: '1',
    metadata: {
      title: "雄安新区出台计划：布局卫星互联网、时空信息、商业卫星智造和空天飞行器等重点赛道",
      date: "2024-03-19",
      category: "行业新闻",
      categoryKey: "industry",
      description: "产品更新描述",
      cover: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
    },
    content: news1Content,
  },
  {
    id: '2',
    metadata: {
      title: "第二条新闻",
      date: "2024-03-18",
      category: "公司新闻",
      categoryKey: "company",
      description: "公司新闻描述",
      cover: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
    },
    content: "第三条新闻内容",
  },
  {
    id: '2',
    metadata: {
      title: "第三条新闻",
      date: "2024-03-18",
      category: "培训活动",
      categoryKey: "training",
      description: "培训活动描述",
      cover: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
    },
    content: "第三条新闻内容",
  },
];

// 辅助函数：通过ID查找新闻
export const findNewsById = (id: string): NewsItem | undefined => {
  return newsContent.find(news => news.id === id);
}; 