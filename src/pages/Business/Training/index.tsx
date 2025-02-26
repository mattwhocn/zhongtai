import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { usePageTitle } from '../../../hooks/usePageTitle';
import trainingSchoolIntro from '../../../assets/images/business/training/school-intro.png';
import trainingSchoolScope from '../../../assets/images/business/training/school-scope.png';
import case1Img1 from '../../../assets/images/business/training/case1-1.jpg';
import case1Img2 from '../../../assets/images/business/training/case1-2.jpg';
import case1Img3 from '../../../assets/images/business/training/case1-3.jpg';
import case1Img4 from '../../../assets/images/business/training/case1-4.png';
import case2Img1 from '../../../assets/images/business/training/case2-1.jpg';
import case2Img2 from '../../../assets/images/business/training/case2-2.jpg';
import case2Img3 from '../../../assets/images/business/training/case2-3.png';
import case2Img4 from '../../../assets/images/business/training/case2-4.png';
import case3Img1 from '../../../assets/images/business/training/case3-1.jpg';
import case3Img2 from '../../../assets/images/business/training/case3-2.jpg';
import case3Img3 from '../../../assets/images/business/training/case3-3.jpg';
import case3Img4 from '../../../assets/images/business/training/case3-4.jpg';
import case4Img1 from '../../../assets/images/business/training/case4-1.jpg';
import case4Img2 from '../../../assets/images/business/training/case4-2.jpg';
import case4Img3 from '../../../assets/images/business/training/case4-3.jpg';
import case4Img4 from '../../../assets/images/business/training/case4-4.jpg';
import case5Img1 from '../../../assets/images/business/training/case5-1.jpg';
import case5Img2 from '../../../assets/images/business/training/case5-2.jpg';
import case5Img3 from '../../../assets/images/business/training/case5-3.jpg';
import case5Img4 from '../../../assets/images/business/training/case5-4.jpg';
import case6Img1 from '../../../assets/images/business/training/case6-1.jpg';
import case6Img2 from '../../../assets/images/business/training/case6-2.jpg';
import case6Img3 from '../../../assets/images/business/training/case6-3.jpg';
import case6Img4 from '../../../assets/images/business/training/case6-4.png';


import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 培训学校数据
const trainingData = {
  // 学校介绍
  introduction: {
    title: '大兴兴宾职业技能培训学校',
    descriptions: [
      `大兴兴宾职业技能培训学校是经北京市大兴区人力资源和社会保障部门审批，北京市民政部门注册的民非企业；由北京市消防协会专家评审通过的开展消防安全教育培训的专业化培训机构。`,
      `学校办公及教学占地面积2000余平方米，拥有办公楼、培训室、实操室、保障楼、宿舍楼等。拥有 140会议室2个，100人会议室1个，消防设施实操训练室1个，急救培训室1个，实操场地600余平方米等基 础教育培训设施。食堂可同时满足200人用餐，拥有男女生公寓28间，并配建标准酒店式客房 12间。`
    ],
    image: trainingSchoolIntro
  },

  // 业务范围
  businessScope: {
    title: '学校业务范围',
    descriptions: [
      `消防类
        1、消防设施操作员初、中级职业培训
        2、“一警六员”消防技能实训
        3、消防理论培训及各种器材设备操作技能培训，消防安全管理、检查、巡查社区居民家庭消防知识、逃生技能培训等`,
      `应急救援类
        1、应急救援员培训，应急救护员培训
        2、防暴处突培训`,
      `保安员培训
        1、保安员职业等级培训
        2、保安员资格证培训考试
      `
    ],
    image: trainingSchoolScope
  },

  // 培训案例
  cases: [
    {
      id: 1,
      title: '1. 消防培训实操课程',
      images: [case1Img1, case1Img2, case1Img3, case1Img4]
    },
    {
      id: 2,
      title: '2. 应急救援实操课',
      images: [case2Img1, case2Img2, case2Img3, case2Img4]
    },
    {
      id: 3,
      title: '3. 泰康集团培训',
      images: [case3Img1, case3Img2, case3Img3, case3Img4]
    },
    {
      id: 4,
      title: '4. 消防设施四级培训',
      images: [case4Img1, case4Img2, case4Img3, case4Img4]
    },
    {
      id: 5,
      title: '5. 保安证考试',
      images: [case5Img1, case5Img2, case5Img3, case5Img4]
    },
    {
      id: 6,
      title: '6. 消防协会逃生演练',
      images: [case6Img1, case6Img2, case6Img3, case6Img4]
    }
  ]
};

const TrainingBusiness: React.FC = () => {
  usePageTitle('培训学校');

  // 根据图片数量返回合适的列数
  const getColSpan = (imageCount: number) => {
    console.log(imageCount);
    if (imageCount == 3) return 12;
    if (imageCount == 4) return 12;
    return 24;
  };

  return (
    <Content className="training-business-page">
      {/* 学校介绍 */}
      <section className="school-intro">
        <div className="section-content">
          <Title level={2}>{trainingData.introduction.title}</Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-image">
                <img src={trainingData.introduction.image} alt="学校介绍" />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="section-text introduction-text">
                {trainingData.introduction.descriptions.map((description, _index) => (
                  <Paragraph key={description}>{description}</Paragraph>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 业务范围 */}
      <section className="business-scope">
        <div className="section-content">
          <Title level={2}>{trainingData.businessScope.title}</Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-text business-scope-text">
                {trainingData.businessScope.descriptions.map((description, _index) => (
                  <Paragraph key={description}>{description}</Paragraph>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="section-image">
                <img src={trainingData.businessScope.image} alt="业务范围" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 培训案例 */}
      <section className="training-cases">
        <div className="section-content">
          <Title level={2}>培训案例</Title>
          <Row gutter={[24, 48]}>
            {trainingData.cases.map(case_ => (
              <Col xs={24} lg={getColSpan(case_.images.length)} key={case_.id}>
                <Card className="case-card">
                  <Title level={4} className="case-title">{case_.title}</Title>
                  <div className="case-images">
                    {case_.images.map((image, index) => (
                      <div key={index} className="image-wrapper">
                        <img src={image} alt={`${case_.title}-${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default TrainingBusiness; 