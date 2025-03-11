import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { 
  SafetyCertificateOutlined, 
  ReconciliationOutlined,
  ThunderboltOutlined,
  MonitorOutlined, 
  UserOutlined,
  TeamOutlined,
  RocketOutlined,
  GlobalOutlined,
  LineChartOutlined
} from '@ant-design/icons';
import { gradients } from '../../../utils/gradients';
import './style.less';
import { withErrorBoundary } from '@/components/ErrorBoundary';

const { Title, Paragraph } = Typography;

// 核心竞争力数据
const strategies = [
  {
    id: 1,
    title: '数智化安防能力',
    content: '以"科技领位、防救一体"为核心，通过智能产品研发、物联网整合、AI数据分析及平台化运营，构建了覆盖多场景的智慧安防体系。其技术不仅服务于企业自身业务，还深度融入国家"大应急"战略，助力提升公共安全与灾害应对能力。',
    gradient: gradients.techBlue,
    icon: <SafetyCertificateOutlined />
  },
  {
    id: 2,
    title: '专业化人才培养与军事化队伍建设',
    content: '公司以培养"纪律严明、业专技精"的安全应急救援人才为使命，建立了系统的培训体系：1. 培训机构：设立北京兴宾职业技能培训学校，提供实战化消防技能及灾害救援训练。2. 专业队伍：组建专业救援队伍，承担北京市大兴区民兵应急分队等任务，兼具军事化管理与专业化技能。',
    gradient: gradients.techGold,
    icon: <TeamOutlined />
  },
  {
    id: 3,
    title: '多元化服务与市场拓展能力',
    content: '业务覆盖传统人力安保、智能安防、危机管理咨询等领域，提供"一站式"安全解决方案，满足政府、企业、跨国客户等多样化需求。借助"一带一路"倡议，探索海外安保市场，与国际企业合作输出服务标准，形成全球化竞争力。',
    gradient: gradients.businessBlue,
    icon: <GlobalOutlined />
  },
  {
    id: 4,
    title: '市场化运营与成本控制能力',
    content: '高效运营机制助力服务性价比优势：1. 降本增效：通过智能化手段降低成本，提升服务覆盖范围。2. 精准市场定位：聚焦"大安全、大应急"生态，布局科技安防、物业管理等高增长领域，形成差异化竞争壁垒。',
    gradient: gradients.businessBlue,
    icon: <LineChartOutlined />
  }
];

const Competent: React.FC = () => {
  return (
    <div className="strategy-page">
      <div className="section-content">
        <div className="section-header">
          <Title level={2}>核心竞争力</Title>
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
                    <div className="strategy-number">{strategy.icon}</div>
                    <Title level={3}>
                      {strategy.icon} {strategy.title}
                    </Title>
                    <Paragraph className="strategy-content-p">{strategy.content}</Paragraph>
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

export default withErrorBoundary(Competent); 