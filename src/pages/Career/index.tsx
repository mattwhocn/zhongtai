import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col, Card, Button, Collapse, Tag, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';
import career1 from '../../assets/images/career/env/1.png';
import career2 from '../../assets/images/career/env/2.jpg';
import career3 from '../../assets/images/career/env/3.jpg';
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
import career39 from '../../assets/images/career/culture/career39.jpg';

import careerHonor11 from '../../assets/images/career/honor/1 1.jpg';
import careerHonor12 from '../../assets/images/career/honor/2 1.jpg';
import careerHonor13 from '../../assets/images/career/honor/3 1.jpg';

import careerHonor21 from '../../assets/images/career/honor/1 2.jpg';
import careerHonor22 from '../../assets/images/career/honor/2 2.jpg';
import careerHonor23 from '../../assets/images/career/honor/3 2.jpg';

import careerHonor31 from '../../assets/images/career/honor/1 3.jpg';
import careerHonor32 from '../../assets/images/career/honor/2 3.jpg';
import careerHonor33 from '../../assets/images/career/honor/3 3.jpg';

import careerHonor41 from '../../assets/images/career/honor/1 4.jpg';
import careerHonor42 from '../../assets/images/career/honor/2 4.jpg';
import careerHonor43 from '../../assets/images/career/honor/3 4.jpg';

import careerHonor51 from '../../assets/images/career/honor/1 5.jpg';
import careerHonor52 from '../../assets/images/career/honor/2 5.jpg';
import careerHonor53 from '../../assets/images/career/honor/3 5.jpg';
import axios from 'axios';
import { withErrorBoundary } from '@/components/ErrorBoundary';


const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

// 职位数据
const defaultJobList: JobMeta[] = [
  {
    id: 1,
    title: '保安（男性）',
    tags: ['18—50周岁', '初中及以上'],
    detail: `
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

interface JobMeta {
  id: number;
  title: string;
  tags: string[];
  detail: string;
}

// 公司文化数据
export const cultureSections = [
  {
    title: '公司环境',
    items: [career1, career2, career3],
  },
  {
    title: '企业文化',
    items: [career31, career32, career33, career34, career35, career36, career37, career38, career39],
  },
  {
    title: '集团荣誉',
    items: [
      careerHonor11, careerHonor12, careerHonor13,
      careerHonor21, careerHonor22, careerHonor23,
      careerHonor31, careerHonor32, careerHonor33,
      careerHonor41, careerHonor42, careerHonor43,
      careerHonor51, careerHonor52, careerHonor53,
    ],
  },
];

const Career: React.FC = () => {
  usePageTitle('职业发展');
  const [activeKey, setActiveKey] = useState<string[]>([]);
  const [jobList, setJobList] = useState<JobMeta[]>(defaultJobList);

  useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
    const fetchJobList = async () => {
      try {
        const response = await axios.get('http://static.ztmagroup.com/data/json/jobs/jobs.json');
        // 将带有 \r\n 的字符串分割成数组
        const jobList = response.data?.map((item: any) => ({
          ...item,
          id: Math.random(),
           // 使用正则表达式匹配 \r\n 或 \n
          tags: item.tags?.split(/\r\n|\n/)?.filter((item: any) => item)
        }));
        setJobList(jobList); // 设置处理后的数据
      } catch (error) {
        console.error('获取Job配置失败:', error);
      }
    };
    fetchJobList();
  }, []);

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
                      {job.detail}
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
                      className={`culture-card ${section.title === '集团荣誉' ? 'culture-honor-card' : ''}`}
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

export default withErrorBoundary(Career); 