// 直接导入 markdown 文件
import news1Content from './news-md/news1.md';
import news2Content from './news-md/news2.md';
import news3Content from './news-md/news3.md';
import news4Content from './news-md/news4.md';
import news5Content from './news-md/news5.md';
import news6Content from './news-md/news6.md';
import news7Content from './news-md/news7.md';
import news8Content from './news-md/news8.md';
import news1Cover from './news-cover/news1-1.png';
import news2Cover from './news-cover/news2-1.png';
import news3Cover from './news-cover/news3-1.png';
import news4Cover from './news-cover/news4-1.png';
import news5Cover from './news-cover/news5-1.png';
import news6Cover from './news-cover/news6-1.png';
import news7Cover from './news-cover/news7-1.png';
import news8Cover from './news-cover/news8-1.png';

export type NewsCategory = '公司新闻' | '行业新闻' | '培训活动';
export type NewsCategoryKey = 'company' | 'industry' | 'training';

export interface NewsItem {
  id: string;
  metadata: {
    title: string;
    date: string;
    category: NewsCategory;
    categoryKey: NewsCategoryKey,
    description?: string;
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
      cover: news1Cover,
      description: "雄安新区出台计划：布局卫星互联网、时空信息、商业卫星智造和空天飞行器等重点赛道",
    },
    content: news1Content,
  },
  {
    id: '2',
    metadata: {
      title: "“实景三维+噪声地图”亮相北斗峰会",
      date: "2024-10-24",
      category: "行业新闻",
      categoryKey: "industry",
      cover: news2Cover,
    },
    content: news2Content,
  },
  {
    id: '3',
    metadata: {
      title: "北京保安协会召开第二届理事会第十三次会议暨第二届会员大会第四次会议",
      date: "2025-01-08",
      category: "行业新闻",
      categoryKey: "industry",
      cover: news3Cover,
    },
    content: news3Content,
  },
  {
    id: '4',
    metadata: {
      title: "首都实业所属北京保总、振远护卫圆满完成春节期间安保工作",
      date: "2024-03-18", 
      category: "行业新闻",
      categoryKey: "industry",
      cover: news4Cover,
    },
    content: news4Content,
  },
  {
    id: '5',
    metadata: {
      title: "北京市保安服务有限公司召开2024年工作总结暨2025年工作部署会",
      date: "2024-03-18",
      category: "行业新闻",
      categoryKey: "industry",
      cover: news5Cover,
    },
    content: news5Content,
  },
  {
    id: '6',
    metadata: {
      title: "北京开展第二波疏散通道集中“大扫除”，聚焦四类问题",
      date: "2024-03-18",
      category: "行业新闻",
      categoryKey: "industry",
      cover: news6Cover,
    },
    content: news6Content,
  },
  {
    id: '7',
    metadata: {
      title: "《集团董事长赵性仓当选第十届“北京榜样·最美义工”榜样人物》",
      date: "2025-03-01",
      category: "公司新闻",
      categoryKey: "company",
      cover: news7Cover,
    },
    content: news7Content,
  },
  {
    id: '8',
    metadata: {
      title: "《中泰民安集团：多平台同步上线，开启品牌传播新篇章》",
      date: "2025-03-01",
      category: "公司新闻",
      categoryKey: "company",
      cover: news8Cover,
    },
    content: news8Content,
  }
];

// 辅助函数：通过ID查找新闻
export const findNewsById = (id: string): NewsItem | undefined => {
  return newsContent.find(news => news.id === id);
}; 