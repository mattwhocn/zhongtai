import React from 'react';
import { Layout, Row, Col, Typography, Card, Space } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import Elevator from '../../components/Elevator';
import companyImage from '../../assets/images/about/company.png';
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
import avatar2 from '../../assets/images/about/management/avatar2.png';
import culture1 from '../../assets/images/about/culture/culture1.png';
import { useLocation } from 'react-router-dom';

import './style.less';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 公司简介数据
export const companyProfile = {
  title: '公司简介',
  content: `中泰民安安全服务集团（创立于2005年）是总部位于北京大兴区的综合安防服务商，拥有10家子公司、33家分公司及1所培训学校。依托院士专家团队，企业通过武器装备等多项质量管理体系认证，秉持"合作共赢、百年传承"理念，在科技安防、智慧城市等领域实现突破：自主研发智能安保平台、三维仿真系统及警务通等管理平台；联合国家高分中心成立青岛遥感科技公司，推动遥感技术军民融合应用。作为北京市安防协会副理事长单位，集团2024年入选市级诚信企业名录，并获"党建示范单位"及"守信经营承诺单位"双重荣誉。`,
  background: gradients.techBlue
};

// 管理层数据
const managementTeam = [
  {
    id: 1,
    name: '赵性仓',
    title: '董事长',
    avatar: avatar2,
    description: `赵性仓，男，1968年3月出生，山东梁山人，中共党员，梁山在京流动党员党委副书记，中泰民安安全服务集团有限公司党支部书记、董事长，北京市大兴区中泰民安红十字救援服务中心总负责人。30多年来，他凭着矢志不渝的创业精神和强烈的社会责任感，始终以"有我在、跟我上、看我的"为理念，以"身先士卒、率先垂范"为要求，在平凡的岗位上带领团队创造了诸多不平凡的业绩。现集团旗下10家子公司、1所培训学校，解决就业3万余人次。`,
    moreDetails: [
      {
        title: '创业历程',
        content: '深耕安全服务领域30年，秉承“以安保为基础、科技为引领、文化传媒树品牌”理念，带领团队创新发展，多次参与首都重大灾害救援（如“7·21”北京特大暴雨、“11·18”重大火灾）及国家级盛事安保（如奥运会、国庆阅兵），助力首都安全稳定。',
      },
      {
        title: '个人荣誉',
        content: '获“诚信企业家”“北京市人道奖先进个人”“北京榜样·最美义工”等称号，2019年起连续获评“优秀共产党员”“优秀党组织书记”。',
      },
      {
        title: '社会贡献',
        content: '主导完成北京市红十字会防灾减灾演练、红十字会“5·12”纪念活动等，2024年获评“最美家乡人”“年度影响力人物”等社会公益奖项。',
      }
    ]
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

// 公司资质数据
const qualifications = {
  title: '公司资质',
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
  { key: 'qualifications', title: '公司资质' }
];

const About: React.FC = () => {
  usePageTitle('关于我们');
  const location = useLocation();
  
  // 添加状态来追踪当前活动的部分
  const [activeSection, setActiveSection] = React.useState('profile');
  // 添加标志位，防止循环触发
  const isScrolling = React.useRef(false);
  const isHashChanging = React.useRef(false);

  // 1. 处理 Hash 变化：触发页面定位和电梯组件选中
  React.useEffect(() => {
    const handleHashChange = () => {
      if (isScrolling.current) return; // 如果是滚动触发的，则不处理

      isHashChanging.current = true;
      const hash = window.location.hash.slice(1) || 'profile';
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        isHashChanging.current = false;
      }, 100);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  // 2. 处理页面滚动：触发 hash 变化和电梯组件选中
  React.useEffect(() => {
    const handleScroll = () => {
      if (isHashChanging.current) return; // 如果是 hash 变化触发的，则不处理

      const sections = elevatorItems.map(item => item.key);
      
      // 使用 requestAnimationFrame 优化滚动性能
      requestAnimationFrame(() => {
        isScrolling.current = true;
        
        // 找到当前可见的部分
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              if (activeSection !== section) {
                setActiveSection(section);
                // 更新 URL，但不触发滚动
                window.history.replaceState(null, '', `#${section}`);
              }
              break;
            }
          }
        }

        setTimeout(() => {
          isScrolling.current = false;
        }, 100);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // 3. 处理电梯组件点击：触发页面定位和 hash 变化
  const handleElevatorClick = (key: string) => {
    if (isScrolling.current) return; // 如果正在滚动，则不处理

    setActiveSection(key);
    isHashChanging.current = true;
    window.location.hash = key;
    
    // 手动触发滚动，因为有些浏览器可能不会响应 hash 变化
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isHashChanging.current = false;
    }, 100);
  };

  // 判断是否为单个管理层成员
  const isSingleManager = managementTeam.length === 1;

  return (
    <Content className="about-page">
      <Elevator 
        items={elevatorItems} 
        activeKey={activeSection}
        onChange={handleElevatorClick}
      />
      
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
                  兴泰科技：兴泰启航，科技赋能
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
      <section id="management" className="management-team">
        <div className="section-content">
          {/* <Title level={2}>管理层介绍</Title> */}
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
                <div className="manager-more-details">
                  {managementTeam[0].moreDetails.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <h4>{detail.title}</h4>
                      <p>{detail.content}</p>
                    </div>
                  ))}
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

      {/* 公司资质 */}
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
                    <img src={item.image} alt="公司资质" />
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