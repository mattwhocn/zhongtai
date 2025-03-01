import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col, Card, Button, Collapse, Tag, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';
import career8 from '../../assets/images/career/env/career8.jpg';
import career10 from '../../assets/images/career/env/career10.jpg';
import career11 from '../../assets/images/career/env/career11.jpg';
import career13 from '../../assets/images/career/env/career13.jpg';
import career14 from '../../assets/images/career/env/career14.jpg';
import career16 from '../../assets/images/career/env/career16.jpg';
import career18 from '../../assets/images/career/env/career18.jpg';
import career21 from '../../assets/images/career/env/career21.jpg';
import career22 from '../../assets/images/career/env/career22.jpg';
import career31 from '../../assets/images/career/culture/career31.jpg';
import career32 from '../../assets/images/career/culture/career32.jpg';
import career33 from '../../assets/images/career/culture/career33.jpg';
import career34 from '../../assets/images/career/culture/career34.jpg';
import career35 from '../../assets/images/career/culture/career35.jpg';
import career36 from '../../assets/images/career/culture/career36.jpg';
import career37 from '../../assets/images/career/culture/career37.jpg';
import career38 from '../../assets/images/career/culture/career38.jpg';
import career41 from '../../assets/images/career/honor/career41.jpg';
import career42 from '../../assets/images/career/honor/career42.jpg';
import career43 from '../../assets/images/career/honor/career43.jpg';
import career44 from '../../assets/images/career/honor/career44.jpg';
import career45 from '../../assets/images/career/honor/career45.jpg';
import career46 from '../../assets/images/career/honor/career46.jpg';
import career47 from '../../assets/images/career/honor/career47.jpg';
import career48 from '../../assets/images/career/honor/career48.jpg';

import career51 from '../../assets/images/career/honor/career51.jpg';
import career52 from '../../assets/images/career/honor/career52.jpg';
import career53 from '../../assets/images/career/honor/career53.jpg';
import career54 from '../../assets/images/career/honor/career54.jpg';
import career55 from '../../assets/images/career/honor/career55.jpg';
import career56 from '../../assets/images/career/honor/career56.jpg';
import career57 from '../../assets/images/career/honor/career57.jpg';
import career58 from '../../assets/images/career/honor/career58.jpg';
import career59 from '../../assets/images/career/honor/career59.jpg';
import career60 from '../../assets/images/career/honor/career60.jpg';
import career61 from '../../assets/images/career/honor/career61.jpg';
import career62 from '../../assets/images/career/honor/career62.jpg';
import career63 from '../../assets/images/career/honor/career63.jpg';
import career64 from '../../assets/images/career/honor/career64.jpg';
import career65 from '../../assets/images/career/honor/career65.jpg';
import career66 from '../../assets/images/career/honor/career66.jpg';


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
export const cultureSections = [
  {
    title: '公司环境',
    items: [career8, career10, career11, career13, career14, career16, career18, career21, career22],
  },
  {
    title: '企业文化',
    items: [career31, career32, career33, career34, career35, career36, career37, career38],
  },
  {
    title: '集团荣誉',
    items: [career41, career42, career43, career44, career45, career46, career47, career48, career51, career52, career53, career54, career55, career56, career57, career58, career59, career60, career61, career62, career63, career64, career65, career66],
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
                      style={{ background: '#ffffff' }}
                    >
                      <div className={`tech-overlay ${section.title === '集团荣誉' ? 'tech-overlay-contain' : ''}`}>
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