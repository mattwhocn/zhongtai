import React from 'react';
import { Layout, Row, Col, Typography, Card, Space } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import Elevator from '../../components/Elevator';
import companyImage from '../../assets/images/about/company.png';
import globalLayoutImage from '../../assets/images/about/global-layout.png';
import qualifications1 from '../../assets/images/about/qualifications/图片 1.png';
import qualifications2 from '../../assets/images/about/qualifications/图片 2.png';
import qualifications3 from '../../assets/images/about/qualifications/图片 3.png';
import qualifications4 from '../../assets/images/about/qualifications/图片 4.png';
import qualifications5 from '../../assets/images/about/qualifications/图片 5.png';
import qualifications6 from '../../assets/images/about/qualifications/图片 6.png';
import qualifications7 from '../../assets/images/about/qualifications/图片 7.png';
import qualifications8 from '../../assets/images/about/qualifications/图片 8.png';
import qualifications9 from '../../assets/images/about/qualifications/图片 9.png';
import qualifications10 from '../../assets/images/about/qualifications/图片 10.png';
import qualifications11 from '../../assets/images/about/qualifications/图片 11.png';
import qualifications12 from '../../assets/images/about/qualifications/图片 12.png';
import qualifications13 from '../../assets/images/about/qualifications/图片 13.png';
import qualifications14 from '../../assets/images/about/qualifications/图片 14.jpg';
import qualifications15 from '../../assets/images/about/qualifications/图片 15.png';
import qualifications16 from '../../assets/images/about/qualifications/图片 16.png';
import qualifications17 from '../../assets/images/about/qualifications/图片 17.png';
import qualifications18 from '../../assets/images/about/qualifications/图片 18.png';
import qualifications19 from '../../assets/images/about/qualifications/图片 19.png';
import qualifications20 from '../../assets/images/about/qualifications/图片 20.png';
import qualifications21 from '../../assets/images/about/qualifications/图片 21.png';
import qualifications22 from '../../assets/images/about/qualifications/图片 22.png';
import qualifications23 from '../../assets/images/about/qualifications/图片 23.png';
import qualifications24 from '../../assets/images/about/qualifications/图片 24.png';
import avatar1 from '../../assets/images/about/management/avatar1.jpg';
import culture1 from '../../assets/images/about/culture/culture1.png';

import './style.less';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 公司简介数据
export const companyProfile = {
  title: '公司简介',
  content: `中泰民安集团成立于2005年，总部位于北京市大兴区，是一家以安全服务为核心，涵盖科技研发、教育培训、应急救援、物业管理等多领域的综合性企业集群。集团旗下包括多家独立运营的子公司，业务覆盖全国，致力于构建"大安全、大应急"产业生态，服务国家战略与民生需求。多年来积极参与灾害救援与公共安全建设，助力平安中国。`,
  background: gradients.techBlue
};

// 管理层数据
const managementTeam = [
  {
    id: 1,
    name: '赵性仓',
    title: '董事长',
    avatar: avatar1,
    description: `赵性仓，男，1968年3月出生，山东梁山人，中共党员，梁山在京流动党员党委副书记，中泰民安安全服务集团有限公司党支部书记、董事长，北京市大兴区中泰民安红十字救援服务中心总负责人。30多年来，他凭着矢志不渝的创业精神和强烈的社会责任感，始终以“有我在、跟我上、看我的”为理念，以“身先士卒、率先垂范”为要求，在平凡的岗位上带领团队创造了诸多不平凡的业绩。现集团旗下10家子公司、1所培训学校，解决就业3万余人次。`,
  },
  // ... 可能有更多管理层成员
];

// 企业文化数据
const culture = {
  title: '企业文化',
  items: [
    {
      title: '企业使命',
      content: '让城市更安全',
      background: gradients.techBlue,
      image: culture1,
    },
    {
      title: '企业愿景',
      content: '成为全球智慧安全领域的技术标准制定者与综合服务标杆',
      background: gradients.aiGradient,
      image: culture1,
    },
    {
      title: '企业理念',
      content: '合作共赢 百年传承',
      background: gradients.techGold,
      image: culture1,
    }
  ]
};

// 全球布局数据
const globalLayout = {
  title: '全球布局',
  description: '中泰民安立足国际化大都市北京，以首都雄厚的资源优势、人才储备及政策支持为依托，构建起辐射全球的业务网络。作为战略核心枢纽，北京总部汇聚创新动能与尖端技术，通过高效协同的全球化运营体系，将智慧解决方案与高品质服务延伸至亚洲、欧洲、美洲及非洲市场。',
  background: gradients.techMix,
  image: globalLayoutImage,
};

// 资质与荣誉数据
const qualifications = {
  title: '资质与荣誉',
  items: [
    {
      background: gradients.techBlue,
      image: qualifications1,
    },
    {
      background: gradients.businessBlue,
      image: qualifications2,
    },
    {
      background: gradients.techGold,
      image: qualifications3,
    },
    {
      background: gradients.techMix,
      image: qualifications4,
    },
    {
      background: gradients.businessBlue,
      image: qualifications5,
    },
    {
      background: gradients.techMix,
      image: qualifications6,
    },
    {
      background: gradients.businessBlue,
      image: qualifications7,
    },
    {
      background: gradients.techMix,
      image: qualifications8,
    },
    {
      background: gradients.businessBlue,
      image: qualifications9,
    },
    {
      background: gradients.techMix,
      image: qualifications10,
    },
    {
      background: gradients.businessBlue,
      image: qualifications11,
    },
    {
      background: gradients.techMix,
      image: qualifications12,
    },
    {
      background: gradients.businessBlue,
      image: qualifications13,
    },
    {
      background: gradients.techMix,
      image: qualifications14,
    },
    {
      background: gradients.businessBlue,
      image: qualifications15,
    },
    {
      background: gradients.techMix,
      image: qualifications16,
    },
    {
      background: gradients.businessBlue,
      image: qualifications17,
    },
    {
      background: gradients.techMix,
      image: qualifications18,
    },
    {
      background: gradients.businessBlue,
      image: qualifications19,
    },
    {
      background: gradients.techMix,
      image: qualifications20,
    },
    {
      background: gradients.businessBlue,
      image: qualifications21,
    },
    {
      background: gradients.techMix,
      image: qualifications22,
    },
    {
      background: gradients.businessBlue,
      image: qualifications23,
    },
    {
      background: gradients.techMix,
      image: qualifications24,
    },
  ]
};

const elevatorItems = [
  { key: 'profile', title: '公司简介' },
  { key: 'management', title: '管理层' },
  { key: 'culture', title: '企业文化' },
  { key: 'global', title: '全球布局' },
  { key: 'qualifications', title: '资质与荣誉' }
];

const About: React.FC = () => {
  usePageTitle('关于我们');

  // 判断是否为单个管理层成员
  const isSingleManager = managementTeam.length === 1;

  return (
    <Content className="about-page">
      <Elevator items={elevatorItems} />
      
      {/* 公司简介 */}
      <section id="profile" className="section-profile">
        <div className="section-content">
          <Title level={2}>{companyProfile.title}</Title>
          <Row gutter={[48, 24]} align="middle">
            <Col xs={24} lg={12}>
              <div className="profile-image">
                <div className="tech-overlay">
                  <img src={companyImage} alt="companyImage" />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph className="profile-text">
                {companyProfile.content}
              </Paragraph>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  中泰民安：让城市更安全，让文明更韧性
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  兴泰科技：兴泰启航，科技护疆
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot" />
                  兴宾学校：兴宾育才，安全未来
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 管理层介绍 */}
      <section className="management-team">
        <div className="section-content">
          <Title level={2}>管理层介绍</Title>
          {isSingleManager ? (
            // 单个管理层成员时的布局
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={8}>
                <Card className="manager-card single">
                  <div className="avatar-wrapper">
                    <img src={managementTeam[0].avatar} alt={managementTeam[0].name} />
                  </div>
                  <div className="info">
                    <h3>{managementTeam[0].name}</h3>
                    <p>{managementTeam[0].title}</p>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={16}>
                <div className="manager-description">
                  <Paragraph>{managementTeam[0].description}</Paragraph>
                </div>
              </Col>
            </Row>
          ) : (
            // 多个管理层成员时的布局
            <Row gutter={[24, 48]}>
              {managementTeam.map(manager => (
                <Col xs={24} sm={12} lg={8} key={manager.id}>
                  <Card className="manager-card">
                    <div className="avatar-wrapper">
                      <img src={manager.avatar} alt={manager.name} />
                    </div>
                    <div className="info">
                      <h3>{manager.name}</h3>
                      <p>{manager.title}</p>
                    </div>
                    <div className="description">
                      <Paragraph>{manager.description}</Paragraph>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </section>

      {/* 企业文化 */}
      <section id="culture" className="section-culture">
        <div className="section-content">
          <Title level={2}>{culture.title}</Title>
          <Row gutter={[24, 24]}>
            {culture.items.map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <Card 
                  className="culture-card"
                  style={{ background: item.background }}
                >
                  <Title level={3}>{item.title}</Title>
                  <p>{item.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 全球布局 */}
      <section id="global" className="section-global">
        <div className="section-content">
          <Title level={2}>{globalLayout.title}</Title>
          <div className="global-map">
            <div className="map-overlay">
              <img src={globalLayout.image} alt="globalLayout" />
            </div>
          </div>
          <Paragraph className="global-description">
            {globalLayout.description}
          </Paragraph>
        </div>
      </section>

      {/* 资质与荣誉 */}
      <section id="qualifications" className="section-qualifications">
        <div className="section-content">
          <Title level={2}>{qualifications.title}</Title>
          <Row gutter={[24, 24]}>
            {qualifications.items.map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div 
                  className="qualification-item"
                  style={{ background: item.background }}
                >
                  <div className="tech-overlay">
                    <img src={item.image} alt="资质与荣誉" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default About; 