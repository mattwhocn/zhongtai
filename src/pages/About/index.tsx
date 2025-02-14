import React from 'react';
import { Layout, Row, Col, Typography, Card, Space } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import './style.less';
import Elevator from '../../components/Elevator';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 公司简介数据
const companyProfile = {
  title: '公司简介',
  content: `中泰民安科技有限公司成立于2000年，是一家专注于智能制造和数字化转型的高新技术企业。
    二十余年来，公司始终坚持"创新驱动发展"的理念，以卓越的技术能力和丰富的行业经验，
    为客户提供全方位的解决方案。我们的业务覆盖智能制造、工业互联网、数字化转型等领域，
    致力于帮助传统制造业实现智能化升级。`,
  background: gradients.techBlue
};

// 管理层数据
const management = {
  title: '管理层',
  members: [
    {
      name: '张三',
      position: '董事长',
      intro: '拥有20年制造业数字化转型经验，曾主导多个国家级智能制造项目',
      background: gradients.businessBlue
    },
    {
      name: '李四',
      position: '总经理',
      intro: '工业互联网领域专家，参与制定多项行业标准',
      background: gradients.techMix
    },
    {
      name: '王五',
      position: '技术总监',
      intro: '人工智能与大数据专家，拥有多项发明专利',
      background: gradients.premiumGray
    }
  ]
};

// 企业文化数据
const culture = {
  title: '企业文化',
  items: [
    {
      title: '企业使命',
      content: '以科技创新推动制造业升级，助力中国智造',
      background: gradients.techBlue
    },
    {
      title: '企业愿景',
      content: '成为全球领先的智能制造解决方案提供商',
      background: gradients.businessBlue
    },
    {
      title: '企业理念',
      content: '创新、专注、协作、共赢',
      background: gradients.techGold
    }
  ]
};

// 全球布局数据
const globalLayout = {
  title: '全球布局',
  description: '公司总部位于北京，在上海、广州、深圳等地设有研发中心和营销服务网络，业务覆盖全球多个国家和地区。',
  background: gradients.techMix
};

// 资质与荣誉数据
const qualifications = {
  title: '资质与荣誉',
  items: [
    {
      title: '国家高新技术企业',
      background: gradients.techBlue
    },
    {
      title: '专精特新"小巨人"企业',
      background: gradients.businessBlue
    },
    {
      title: '工信部制造业单项冠军',
      background: gradients.techGold
    },
    {
      title: 'ISO9001质量管理体系认证',
      background: gradients.techMix
    }
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

  return (
    <Content className="about-page">
      <Elevator items={elevatorItems} />
      
      {/* 公司简介 */}
      <section id="profile" className="section-profile">
        <div className="section-content">
          <Title level={2}>{companyProfile.title}</Title>
          <Row gutter={[48, 24]} align="middle">
            <Col xs={24} lg={12}>
              <div 
                className="profile-image"
                style={{ background: companyProfile.background }}
              >
                <div className="tech-overlay" />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph className="profile-text">
                {companyProfile.content}
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* 管理层 */}
      <section id="management" className="section-management">
        <div className="section-content">
          <Title level={2}>{management.title}</Title>
          <Row gutter={[24, 24]}>
            {management.members.map((member, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className="management-card">
                  <div 
                    className="member-avatar"
                    style={{ background: member.background }}
                  />
                  <Title level={4}>{member.name}</Title>
                  <Title level={5} type="secondary">{member.position}</Title>
                  <Paragraph>{member.intro}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
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
                  <Paragraph>{item.content}</Paragraph>
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
          <div 
            className="global-map"
            style={{ background: globalLayout.background }}
          >
            <div className="map-overlay" />
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
                  <div className="tech-overlay" />
                  <span>{item.title}</span>
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