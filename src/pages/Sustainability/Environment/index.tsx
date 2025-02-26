import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { 
  SafetyCertificateOutlined, 
  ReconciliationOutlined,
  ThunderboltOutlined,
  MonitorOutlined, 
  UserOutlined
} from '@ant-design/icons';
import { gradients } from '../../../utils/gradients';
import './style.less';

const { Title, Paragraph } = Typography;

// 环保举措数据
const strategies = [
  {
    id: 1,
    title: '节能设备使用',
    content: '在集团总部及各分支机构办公场所，全面更换为节能型的照明设备，如采用 LED 节能灯，同时，办公电器也优先选用具有高能效标识的产品，像节能型电脑、打印机等，从源头上减少能源使用量，降低因办公产生的碳排放。',
    gradient: gradients.techBlue,
    icon: <ReconciliationOutlined />
  },
  {
    id: 2,
    title: '绿色采购推行',
    content: '建立绿色采购制度，在办公用品、物资等采购过程中，优先选择环保、可回收、可降解的产品。例如，采购由再生纸制作的纸张用于日常办公打印，选择可降解的一次性塑料制品替代品，如纸质水杯、竹制餐具等，减少对不可降解材料的依赖，从采购源头助力环保。',
    gradient: gradients.techGold,
    icon: <ThunderboltOutlined />
  },
  {
    id: 3,
    title: '参与社区环保公益活动',
    content: '积极组织员工参与周边社区的环保公益活动，如植树造林、公园清洁、垃圾分类宣传等，通过这些活动增强员工的环保意识，同时也提升集团在社会公众中的环保形象，促进与社区的和谐共生，为营造良好的区域生态环境发挥积极作用。',
    gradient: gradients.businessBlue,
    icon: <SafetyCertificateOutlined />
  },
  {
    id: 4,
    title: '环境管理与监测',
    content: '按照国际标准（ ISO14001 环境管理体系标准）建立完善的环境管理体系，明确公司各部门和人员在环保工作中的职责和流程，规范环境管理行为，确保公司的各项活动符合环保要求。',
    gradient: gradients.businessBlue,
    icon: <MonitorOutlined />
  },
  {
    id: 5,
    title: '员工意识与文化方面',
    content: '定期组织员工参加环保培训，提高员工的环保意识和技能，使员工了解公司的环保政策和措施，掌握环保知识和操作技能，鼓励员工在工作中积极参与环保行动。在公司内部开展各种环保主题活动，如环保知识竞赛、绿色办公行动、环保志愿者活动等，营造环保文化氛围，激发员工的环保热情，形成全员参与环保的良好局面。',
    gradient: gradients.techBlue,
    icon: <UserOutlined />
  }
];

const Environment: React.FC = () => {
  return (
    <div className="strategy-page">
      <div className="section-content">
        <div className="section-header">
          <Title level={2}>环保举措</Title>
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

export default Environment; 