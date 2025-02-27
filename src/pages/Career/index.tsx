import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col, Card, Button, Collapse, Tag, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';
import career7 from '../../assets/images/career/career7.jpg';
import career8 from '../../assets/images/career/career8.jpg';
import career9 from '../../assets/images/career/career9.jpg';
import career10 from '../../assets/images/career/career10.jpg';
import career11 from '../../assets/images/career/career11.jpg';
import career12 from '../../assets/images/career/career12.jpg';
import career13 from '../../assets/images/career/career13.jpg';
import career14 from '../../assets/images/career/career14.jpg';
import career15 from '../../assets/images/career/career15.jpg';
import career16 from '../../assets/images/career/career16.jpg';
import career18 from '../../assets/images/career/career18.jpg';
import career19 from '../../assets/images/career/career19.jpg';
import career20 from '../../assets/images/career/career20.jpg';
import career21 from '../../assets/images/career/career21.jpg';
import career22 from '../../assets/images/career/career22.jpg';
import career23 from '../../assets/images/career/career23.jpg';
import career24 from '../../assets/images/career/career24.jpg';
import career25 from '../../assets/images/career/career25.jpg';
import career26 from '../../assets/images/career/career26.jpg';
import career27 from '../../assets/images/career/career27.jpg';
import career28 from '../../assets/images/career/career28.jpg';
import career29 from '../../assets/images/career/career29.png';
import career30 from '../../assets/images/career/career30.png';



const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

// 职位数据
const jobList = [
  {
    id: 1,
    title: '保安（男性）',
    tags: ['18—50周岁', '初中及以上', '保安'],
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
    items: [career8, career10, career11, career13, career14, career16, career18, career21, career22],
  },
  {
    title: '员工福利',
    items: [career23, career26, career27, career28],
  },
  {
    title: '职业发展',
    items: [career29, career30],
  },
];

const Career: React.FC = () => {
  usePageTitle('职业发展');
  const [activeKey, setActiveKey] = useState<string[]>([]);

  useEffect(() => {
    if (jobList.length === 1) {
      setActiveKey([jobList[0].id.toString()]);
    }
  }, [jobList]);

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
                        <Button type="primary" size="middle">
                          查看详情 <RightOutlined />
                        </Button>
                      </div>
                      <div className="job-tags-wrapper">
                        <Space size={8} className="job-tags">
                          {job.tags.map((tag, index) => (
                            <Tag color={['blue', 'gold', 'green', 'purple'][index % 4]} key={index}>{tag}</Tag>
                          ))}
                        </Space>
                      </div>
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
                  <Col xs={24} sm={8} lg={8} key={itemIndex}>
                    <Card 
                      className="culture-card"
                      style={{ background: item }}
                    >
                      <div className="tech-overlay">
                        <img src={item} alt={`culture-${itemIndex}`} />
                      </div>
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