import { gradients } from './gradients';

// 新闻类型对应的颜色
export const getNewsTagColor = (category: string) => {
  switch (category) {
    case '公司新闻':
      return 'blue';
    case '行业新闻':
      return 'gold';
    case '培训活动':
      return 'green';
    case '党群建设':
        return 'purple';
    default:
      return 'blue';
  }
};

// 新闻类型对应的背景渐变
export const getNewsBackground = (index: number) => {
  switch (index % 4) {
    case 0:
      return gradients.techBlue;
    case 1:
      return gradients.businessBlue;
    case 2:
      return gradients.techMix;
    default:
      return gradients.techGold;
  }
}; 