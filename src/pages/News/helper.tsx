// 直接导入 markdown 文件
import news1Content from '../../assets/news-md/news1.md';
import news2Content from '../../assets/news-md/news2.md';
import news3Content from '../../assets/news-md/news3.md';
import news4Content from '../../assets/news-md/news4.md';
import news5Content from '../../assets/news-md/news5.md';
import news6Content from '../../assets/news-md/news6.md';
import news7Content from '../../assets/news-md/news7.md';
import news8Content from '../../assets/news-md/news8.md';
import news9Content from '../../assets/news-md/news9.md';
import news10Content from '../../assets/news-md/news10.md';
export type NewsCategory = '公司新闻' | '行业新闻' | '培训活动' | '党建引领';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  cover?: string;
  content: string;
}

// 辅助函数：通过ID查找新闻
export const findNewsById = (id: string): NewsItem | undefined => {
  return newsContent.find(news => news.id === id);
};

/**
 * 从 Markdown 内容中提取第一个图片链接
 * @param content Markdown格式的文章内容
 * @returns 图片链接或undefined
 */
export const extractFirstImageUrl = (content: string): string | undefined => {
  // 匹配 Markdown 图片语法: ![alt](url) 或 ![](url)
  const markdownImgRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(markdownImgRegex);
  return match ? match[1] : undefined;
}; 

export const newsContent: NewsItem[] = [
  {
    id: '1',
    title: "雄安新区出台计划：布局卫星互联网、时空信息、商业卫星智造和空天飞行器等重点赛道",
    date: "2025-1-21",
    category: "行业新闻",
    content: news1Content,
    cover: extractFirstImageUrl(news1Content)
  },
  {
    id: '2',
    title: "“实景三维+噪声地图”亮相北斗峰会",
    date: "2024-10-28",
    category: "行业新闻",
    content: news2Content,
    cover: extractFirstImageUrl(news2Content)
  },
  {
    id: '3',
    title: "北京保安协会召开第二届理事会第十三次会议暨第二届会员大会第四次会议",
    date: "2025-1-9",
    category: "行业新闻",
    content: news3Content,
    cover: extractFirstImageUrl(news3Content)
  },
  {
    id: '4',
    title: "首都实业所属北京保总、振远护卫圆满完成春节期间安保工作",
    date: "2025-2-6", 
    category: "行业新闻",
    content: news4Content,
    cover: extractFirstImageUrl(news4Content)
  },
  {
    id: '5',
    title: "北京市保安服务有限公司召开2024年工作总结暨2025年工作部署会",
    date: "2025-1-26",
    category: "行业新闻",
    content: news5Content,
    cover: extractFirstImageUrl(news5Content)
  },
  {
    id: '6',
    title: "北京开展第二波疏散通道集中“大扫除”，聚焦四类问题",
    date: "2025-1-23",
    category: "行业新闻",
    content: news6Content,
    cover: extractFirstImageUrl(news6Content)
  },
  {
    id: '7',
    title: "《集团董事长赵性仓当选第十届“北京榜样·最美义工”榜样人物》",
    date: "2025-03-01",
    category: "公司新闻",
    content: news7Content,
    cover: extractFirstImageUrl(news7Content)
  },
  {
    id: '8',
    title: "《中泰民安集团：多平台同步上线，开启品牌传播新篇章》",
    date: "2025-03-01",
    category: "公司新闻",
    content: news8Content,
    cover: extractFirstImageUrl(news8Content)
  },
  {
    id: '9',
    title: "泰康集团消防培训",
    date: "2025-03-01",
    category: '培训活动',
    content: news9Content,
    cover: extractFirstImageUrl(news9Content)
  },
  {
    id: '10',
    title: "北京中泰民安保安服务有限公司经营管理工作会议",
    date: "2025-03-01",
    category: '党建引领',
    content: news10Content,
    cover: extractFirstImageUrl(news10Content)
  }
];