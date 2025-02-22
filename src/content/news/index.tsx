interface NewsItem {
  metadata: {
    title: string;
    date: string;
    category: string;
    description: string;
    cover: string;
  };
  content: string;
}

// 直接导入 markdown 文件
import news1Content from './1.md';

export const newsContent: { [key: string]: NewsItem } = {
  '1': {
    metadata: {
      title: "新闻标题",
      date: "2024-03-20",
      category: "公司新闻",
      description: "新闻描述",
      cover: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
    },
    content: news1Content,
  },
  // 其他新闻...
}; 