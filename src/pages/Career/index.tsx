import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, Button, Collapse, Tag, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

// 职位数据
const jobList = [
  {
    id: 1,
    title: '保安（男性）',
    tags: ['北京', '3-5年', '本科及以上', '研发中心', '保安'],
    description: `
      招工条件：
      1. 18—50周岁，有正式户口。
      2. 初中以上文化程度，会说普通话。
      3. 身体健康，不穿鞋赤脚不低于1.70米。

      工资福利：
      1. 保安员月工资不低于3000元，由公司负责保安员的吃住及四季服装。
      2. 工作时间不超过规定标准（每天6—8小时）。加班、休假、患病、因公负伤致残按国家劳动法和有关规定执行。
      3. 签订劳动合同。
    `,
  }
];

// 公司文化数据
const cultureSections = [
  {
    title: '公司环境',
    items: [
      {
        title: '现代化办公环境',
        description: '宽敞明亮的办公空间，配备高端设备',
        background: gradients.techBlue,
      },
      {
        title: '休闲娱乐区',
        description: '健身房、咖啡厅、图书馆等配套设施',
        background: gradients.businessBlue,
      },
    ],
  },
  {
    title: '员工福利',
    items: [
      {
        title: '具有竞争力的薪酬',
        description: '业内领先的薪资水平，年终奖金',
        background: gradients.techGold,
      },
      {
        title: '完善的保障体系',
        description: '五险一金、补充医疗保险、年度体检',
        background: gradients.techMix,
      },
    ],
  },
  {
    title: '职业发展',
    items: [
      {
        title: '清晰的晋升通道',
        description: '双通道发展路径：管理序列和专业序列',
        background: gradients.premiumGray,
      },
      {
        title: '持续的学习成长',
        description: '内部培训体系、外部进修机会',
        background: gradients.businessBlue,
      },
    ],
  },
];

const Career: React.FC = () => {
  usePageTitle('职业发展');
  const [activeKey, setActiveKey] = useState<string[]>([]);

  return (
    <Content className="career-page">
      {/* 顶部横幅 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>职业发展</h1>
          <p>加入我们，开启精彩职业生涯</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 招聘职位 */}
      <section className="job-section">
        <div className="section-content">
          <Title level={2}>招聘职位</Title>
          <div className="job-list">
            <Collapse 
              accordion
              activeKey={activeKey}
              onChange={(key) => setActiveKey(typeof key === 'string' ? [key] : key)}
            >
              {jobList.map(job => (
                <Panel
                  key={job.id}
                  header={
                    <div className="job-header">
                      <div className="job-title">
                        <h3>{job.title}</h3>
                        <Space size={8} className="job-tags">
                          {job.tags.map((tag, index) => (
                            <Tag color={['blue', 'gold', 'green', 'purple'][index % 4]} key={index}>{tag}</Tag>
                          ))}
                        </Space>
                      </div>
                      <Button type="primary">
                        立即申请 <RightOutlined />
                      </Button>
                    </div>
                  }
                >
                  <div className="job-detail">
                    <Paragraph className="job-description" style={{ whiteSpace: 'pre-line' }}>
                      {job.description}
                    </Paragraph>
                  </div>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </section>

      {/* 公司文化 */}
      <section className="culture-section">
        <div className="section-content">
          {cultureSections.map((section, index) => (
            <div key={index} className="culture-block">
              <Title level={2}>{section.title}</Title>
              <Row gutter={[24, 24]}>
                {section.items.map((item, itemIndex) => (
                  <Col xs={24} sm={12} key={itemIndex}>
                    <Card 
                      className="culture-card"
                      style={{ background: item.background }}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="tech-overlay" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </section>
    </Content>
  );
};

export default Career; 