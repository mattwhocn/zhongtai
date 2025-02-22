import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { 
  GlobalOutlined, 
  TrophyOutlined, 
  TeamOutlined, 
  EnvironmentOutlined,
  HeartOutlined 
} from '@ant-design/icons';
import { gradients } from '../../../utils/gradients';
import './style.less';

const { Title, Paragraph } = Typography;

// 战略举措数据
const strategies = [
  {
    id: 1,
    title: '业务拓展与多元化',
    content: '开拓新市场领域：积极调研不同地区、不同行业对于安保服务的需求，例如进军新东南亚、非洲等国家和地区，将业务范围从国内进一步拓展，以扩大市场份额，增加营收来源，提升抗风险能力，保障可持续发展。',
    gradient: gradients.techBlue,
    icon: <GlobalOutlined />
  },
  {
    id: 2,
    title: '品牌建设',
    content: '强化品牌形象塑造：通过多平台宣传、参与行业展会、公益活动等方式，全方位展示集团的专业、可靠、创新的品牌形象，提高品牌知名度和美誉度，增强品牌在市场中的影响力，吸引更多潜在客户。',
    gradient: gradients.techGold,
    icon: <TrophyOutlined />
  },
  {
    id: 3,
    title: '客户关系管理',
    content: '优化客户关系管理：建立完善的客户反馈机制，及时了解客户的需求、意见和建议，对服务进行针对性的优化和改进。通过提供优质、个性化的服务，提高客户满意度和忠诚度，实现老客户的持续合作以及老客户带来新客户的良性循环，确保业务的稳定持续发展。',
    gradient: gradients.businessBlue,
    icon: <TeamOutlined />
  },
  {
    id: 4,
    title: '绿色运营与社会责任履行',
    content: '绿色办公与节能减排：在集团的办公场所推行绿色办公理念，采用节能设备、优化能源管理等措施，减少能源消耗和碳排放，既符合当下环保大趋势，也能在一定程度上降低运营成本。',
    gradient: gradients.premiumGray,
    icon: <EnvironmentOutlined />
  },
  {
    id: 5,
    title: '社会责任担当',
    content: '积极参与社会安保相关公益活动，比如为社区提供免费的安保知识讲座、协助举办大型公益活动的安保工作等，提升集团在社会大众心中的形象，赢得社会各界的认可与支持，为可持续发展营造良好的外部环境。',
    gradient: gradients.aiGradient,
    icon: <HeartOutlined />
  }
];

const Strategy: React.FC = () => {
  return (
    <div className="strategy-page">
      <div className="section-content">
        <div className="section-header">
          <Title level={2}>可持续发展战略</Title>
        </div>
        <div className="strategies-grid">
          <Row gutter={[24, 24]}>
            {strategies.map((strategy, index) => (
              <Col xs={24} md={12} key={strategy.id}>
                <Card 
                  className="strategy-card"
                  style={{ 
                    background: `linear-gradient(135deg, ${strategy.gradient}, ${strategy.gradient}66)`
                  }}
                >
                  <div className="strategy-content">
                    <div className="strategy-number">{index + 1}</div>
                    <Title level={3}>
                      {strategy.icon} {strategy.title}
                    </Title>
                    <Paragraph>{strategy.content}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Strategy; 