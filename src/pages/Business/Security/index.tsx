import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { gradients } from '../../../utils/gradients';
import { usePageTitle } from '../../../hooks/usePageTitle';
import businessSecurity from '../../../assets/images/business/security/security-main.png';
import case1Img1 from '../../../assets/images/business/security/case1-1.jpg';
import case1Img2 from '../../../assets/images/business/security/case1-2.jpg';
import case1Img3 from '../../../assets/images/business/security/case1-3.jpg';
import case1Img4 from '../../../assets/images/business/security/case1-4.jpg';

import case2Img1 from '../../../assets/images/business/security/case2-1.jpg';
import case2Img2 from '../../../assets/images/business/security/case2-2.jpg';
import case2Img3 from '../../../assets/images/business/security/case2-3.jpg';
import case2Img4 from '../../../assets/images/business/security/case2-4.jpg';

import case3Img1 from '../../../assets/images/business/security/case3-1.jpg';
import case3Img2 from '../../../assets/images/business/security/case3-2.jpg';
import case3Img3 from '../../../assets/images/business/security/case3-3.jpg';

import case4Img1 from '../../../assets/images/business/security/case4-1.jpg';
import case4Img2 from '../../../assets/images/business/security/case4-2.jpg';
import case4Img3 from '../../../assets/images/business/security/case4-3.jpg';
import case4Img4 from '../../../assets/images/business/security/case4-4.jpg';
import case4Img5 from '../../../assets/images/business/security/case4-5.jpg';
import case4Img6 from '../../../assets/images/business/security/case4-6.jpg';
import case4Img7 from '../../../assets/images/business/security/case4-7.jpg';
import case4Img8 from '../../../assets/images/business/security/case4-8.jpg';


import './style.less';

const { Title, Paragraph } = Typography;

// 安防板块数据
const securitySection = {
  title: '安防板块',
  description: '北京中泰民安保安服务公司的主营业务主要分为安保服务、技术服务以及其他服务三大类，其中: ',
  extra: ['技术服务包括保安技术培训、安防工程建设、安全技术咨询等', '安保服务包括门卫服务、巡逻服务、守护服务、随卫服务等', '其他服务包括保洁服务、停车场管理服务、物业管理以及劳务派遣服务等'],
  image: businessSecurity,
  cases: [
    {
      id: 1,
      name: '1. 日常安全巡逻',
      images: [case1Img1, case1Img2, case1Img3, case1Img4],
    },
    {
      id: 2,
      name: '2. 抗洪抢险项目',
      images: [case2Img1, case2Img2, case2Img3, case2Img4],
    },
    {
      id: 3,
      name: '3. 小区值守业务',
      images: [case3Img1, case3Img2, case3Img3],
    },
    {
      id: 4,
      name: '4. 各类临时勤务',
      images: [case4Img1, case4Img2, case4Img3, case4Img4, case4Img5, case4Img6, case4Img7, case4Img8],
    },
  ]
};

const SecurityBusiness: React.FC = () => {
  usePageTitle('安防板块');
  
  // 根据图片数量返回合适的列数
  const getColSpan = (imageCount: number) => {
    if (imageCount < 3) return 8;
    if (imageCount == 3) return 24;
    if (imageCount <= 5) return 12;
    return 24;
  };

  return (
    <Layout.Content className="security-business-page">
      {/* 安防板块 */}
      <section className="section-security" id="security">
        <div className="section-content">
          <div className="section-text">
            <Title level={2}>安防板块</Title>
          </div>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-image">
                <div className="tech-overlay">
                  <img src={securitySection.image} alt={securitySection.title} />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} className='section-security-text'>
              <Paragraph className='section-security-description'>{securitySection.description}</Paragraph>
              <ul>
                {securitySection.extra.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      <section className="section-cases">
        <div className="section-content">
          <Title level={2}>项目案例</Title>
          <Row gutter={[24, 48]}>
            {securitySection.cases.map(case_ => (
              <Col xs={24} lg={getColSpan(case_.images.length)} key={case_.id}>
                <Card className="case-card">
                  <Title level={4} className="case-title">{case_.name}</Title>
                  <div className="case-images">
                    {case_.images.map((image, index) => (
                      <div key={index} className="image-wrapper">
                        <img src={image} alt={`${case_.name}-${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

    </Layout.Content>
  );
};

export default SecurityBusiness; 