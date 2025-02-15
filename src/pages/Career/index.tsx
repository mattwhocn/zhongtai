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
    title: '研发工程师',
    department: '研发中心',
    location: '北京',
    experience: '3-5年',
    education: '本科及以上',
    tags: ['开发', '架构设计', '团队协作'],
    description: `
      岗位职责：
      1. 负责公司核心技术项目的研发工作
      2. 参与技术方案设计和技术选型
      3. 负责项目技术难点攻关
      
      任职要求：
      1. 本科及以上学历，计算机相关专业
      2. 3年以上相关开发经验
      3. 具备良好的系统设计能力和问题解决能力
      4. 良好的团队协作精神和沟通能力
    `,
  },
  {
    id: 2,
    title: '产品经理',
    department: '产品部',
    location: '北京',
    experience: '3-5年',
    education: '本科及以上',
    tags: ['产品规划', '用户研究', '项目管理'],
    description: `
      岗位职责：
      1. 负责公司产品的规划和设计
      2. 进行市场调研和用户需求分析
      3. 协调各部门推进产品落地
      
      任职要求：
      1. 本科及以上学历
      2. 3年以上产品经理经验
      3. 具备较强的产品思维和项目管理能力
      4. 良好的沟通协调能力
    `,
  },
  {
    id: 3,
    title: '销售经理',
    department: '销售部',
    location: '全国',
    experience: '2-4年',
    education: '本科及以上',
    tags: ['销售', '客户管理', '商务拓展'],
    description: `
      岗位职责：
      1. 负责公司产品的市场开拓和销售
      2. 建立和维护客户关系
      3. 完成销售目标和业绩指标
      
      任职要求：
      1. 本科及以上学历
      2. 2年以上销售经验
      3. 具备良好的商务谈判能力
      4. 有较强的市场开拓能力和执行力
    `,
  },
  {
    id: 4,
    title: '运营专员',
    department: '运营部',
    location: '北京',
    experience: '1-3年',
    education: '本科及以上',
    tags: ['内容运营', '活动策划', '数据分析'],
    description: `
      岗位职责：
      1. 负责公司产品的运营工作
      2. 策划和执行运营活动
      3. 进行运营数据分析和优化
      
      任职要求：
      1. 本科及以上学历
      2. 1年以上运营经验
      3. 具备良好的文案功底和创意能力
      4. 熟悉数据分析，有较强的执行力
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
        className="career-banner"
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
                        <Space size={8}>
                          <Tag color="blue">{job.department}</Tag>
                          <Tag color="gold">{job.location}</Tag>
                          <Tag color="green">{job.experience}</Tag>
                          <Tag color="purple">{job.education}</Tag>
                        </Space>
                      </div>
                      <Button type="primary">
                        立即申请 <RightOutlined />
                      </Button>
                    </div>
                  }
                >
                  <div className="job-detail">
                    <Space size={8} className="job-tags">
                      {job.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </Space>
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