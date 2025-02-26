import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { usePageTitle } from '../../../hooks/usePageTitle';
import coreProduct from '../../../assets/images/business/tech/core-product.png';
import customCase11 from '../../../assets/images/business/tech/case1-1.png';
import customCase12 from '../../../assets/images/business/tech/case1-2.png';
import customCase21 from '../../../assets/images/business/tech/case2-1.jpg';
import customCase22 from '../../../assets/images/business/tech/case2-2.jpg';
import customCase31 from '../../../assets/images/business/tech/case3-1.png';
import customCase32 from '../../../assets/images/business/tech/case3-2.jpg';
import customCase41 from '../../../assets/images/business/tech/case4-1.jpg';
import customCase42 from '../../../assets/images/business/tech/case4-2.png';
import customCase51 from '../../../assets/images/business/tech/case5-1.jpg';
import customCase52 from '../../../assets/images/business/tech/case5-2.png';

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 修改核心产品数据结构为数组
const coreProductsData = [
  {
    id: 1,
    title: "地理信息系统（ZT-Earth）",
    description: `ZT-Earth平台是中泰民安集团子公司兴泰科技自主研发的一套全方位覆盖时空数据的数字地理信息平台（GIS）。平台可实现数据预案存储、分析与共享。实现三维地理信息技术与空间立体可视化技术的深度融合，致力于打造一款多端数据互联、自主可控、跨行业应用、多领域融合的地理信息和数据运营服务平台。
平台集空间数据处理、云服务、云计算等核心技术，通过二次开发平台、数字化预案库形成定制化服务模板，通过共享平台的技术存储与数据权限收发，完成基于高分数字地球的全量大数据展示与分析，形成基于数据、预案、服务的多维服务体系，保证了时空专项数据的高效利用及互联互通；通过丰富的GIS应用，进行大量应用级接口封装，提供广泛的行业应用案例及预案，从而提升了平台业务可扩展能力；通过结合仿真工具、物联网、虚拟现实等科技手段，将物理世界映射到虚拟空间中，形成数字镜像，达到虚实结合、数字孪生建设的目的。并且高分地球平台支持跨平台及国产软硬件环境的部署，搭建了完整的地理信息可视化应用生态圈。
`,
    image: coreProduct,
  },
];

// 定制产品案例数据
const customCases = [
  {
    id: 1,
    title: "数字沙盘",
    description: `依托自研军事地理信息系统和三维可视化平台，集成多源数据，支持海量模型加载和城市级场景呈现，真实还原地形地貌、建筑、水利、资源等信息。在宏观上支持兵力部署分析，微观上可交互式浏览固定目标、查询属性信息。具备三维交互、目标监控、兵力部署、军标标绘、态势显示、地理分析、路径搜索及实时视频监控等功能，为作战训练提供全面支撑。`,
    images: [customCase11, customCase12],
  },
  {
    id: 2,
    title: "PLA维和指挥平台",
    description: `系统为部队海外维和任务提供信息化平台和技术支持，包括遥感与地理数据更新，支持任务筹划、人员编组、环境勘察及模拟演练。实现战时任务规划、行动调度、实时指挥与通信，构建“一张网、一张图、一个库”。通过多中心部署，实现国内指挥中心、联合国指挥中心与维和部队的异地协同，保障执勤、巡逻和训练任务。`,
    images: [customCase21, customCase22],
  },
  {
    id: 3,
    title: "山东某局应急管控平台",
    description: `平台依托航空航天遥感与地理信息，结合AI算法、物联网和视频分析技术，实现突发事件区域的快速锁定与封控。通过实时互动，精准调度人员力量，确保封控“精准、高效、有序、灵活”。功能包括： `,
    extra: ['快速确定管控区域，精准测算封控力量；', '自动标注基础信息点位，统计区域内要素；', '支援封控力量信息上报，自动分组匹配任务，形成人员库。'],
    images: [customCase31, customCase32],
  },
  {
    id: 4,
    title: "海警某局海上执法平台",
    description: `整合全球地理信息与空间数据，支持海域科学化管理，具备地理环境显示、目标定位、轨迹分析、影像对比等功能，为海上安全防卫、秩序维护、生态保护及渔业监测提供技术支撑。  `,
    extra: ['支持海上维权执法，保障治安、刑事、缉私、渔业及环保等任务；', '提供智能化服务，协助海上事件处置与海洋执法，整合船舶用户及海洋资源信息；', '构建海上维权体系，优化军民协同指挥流程，实现情报实时共享与行动协同联动。'],
    images: [customCase41, customCase42],
  },
  {
    id: 5,
    title: "林草防灭火综合管控平台",
    description: `林草防灭火应急指挥系统由丛静华教授指导、兴泰科技研发，融合航天遥感、无人机监测、气象采集、地基观测和视频监控等技术，实现全地形森林火点全天候监测及火情处置全过程管控。  `,
    extra: ['精准定位火点，分析附近救火资源、监控点及道路信息，辅助决策；', '结合风向、等高线和数字高程模型，支撑救援、防火及人员撤离决策；', '快速统计过火面积、损失及扑火投入，实现大数据与三维态势可视化展示。'],
    images: [customCase51, customCase52],
  },

];

const TechBusiness: React.FC = () => {
  usePageTitle('科技板块');

  return (
    <Content className="tech-business-page">
      {/* 核心产品 */}
      <section className="core-product">
        <div className="section-content">
          <Title level={2}>核心产品</Title>
          {coreProductsData.map((product) => (
            <Row 
              key={product.id} 
              gutter={[48, 48]} 
              align="middle" 
              className="product-row"
            >
              <Col xs={24} lg={12}>
                <div className="product-image">
                  <div className="tech-overlay">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="product-info">
                  <Title level={3} className="product-info-title">
                    {product.title}
                  </Title>
                  <Paragraph className="product-info-description">
                    {product.description}
                  </Paragraph>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </section>

      {/* 定制产品案例 */}
      <section className="custom-cases">
        <div className="section-content">
          <Title level={2}>定制产品案例</Title>
          <Row gutter={[24, 24]}>
            {customCases.map(item => (
              <Col xs={24} sm={24} lg={24} key={item.id}>
                <Card className="case-card" bordered={false}>
                  <Title className="case-title" level={4}>{item.title}</Title>
                  <div className="case-image">
                    {item.images.map((image, index) => (
                      <div key={index}  className="tech-overlay">
                        <img src={image} alt={item.title} />
                      </div>
                    ))}
                  </div>
                  <div className="case-info">
                    <Paragraph>{item.description}</Paragraph>
                    {item.extra && (
                      <ul className="extra-info">
                        {item.extra.map((extra, index) => (
                          <li key={index}>{extra}</li>
                        ))}
                      </ul>
                    )}
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

export default TechBusiness; 