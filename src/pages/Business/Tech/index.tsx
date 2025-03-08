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
import customCase61 from '../../../assets/images/business/tech/安消应急一体化平台1.png';
import customCase62 from '../../../assets/images/business/tech/安消应急一体化平台2.png';
import customCase71 from '../../../assets/images/business/tech/哨兵系统1.png';
import customCase72 from '../../../assets/images/business/tech/哨兵系统2.png';
import customCase81 from '../../../assets/images/business/tech/智慧园区运营管理平台1.png';
import customCase82 from '../../../assets/images/business/tech/智慧园区运营管理平台2.png';
import customCase91 from '../../../assets/images/business/tech/智能平安校园平台1.jpg';
import customCase92 from '../../../assets/images/business/tech/智能平安校园平台2.png';
import customCase101 from '../../../assets/images/business/tech/水上安全风险预警系统1.png';
import customCase102 from '../../../assets/images/business/tech/水上安全风险预警系统2.png';

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
  {
    id: 6,
    title: "安消应急一体化平台",
    description: `安消一体化平台是集成安全防范与消防管理的智能化综合管理系统。平台通过物联网、AI、大数据等技术，构建智能物联感知网络，实时采集消防设施、安防设备、环境监测等数据，实现安全监控与消防预警的深度融合。系统具备智能巡检、隐患识别、风险预警、应急指挥等功能模块，支持视频分析烟雾火情、设备故障自动告警、应急预案智能推送等核心应用。通过多系统数据互通与业务协同，有效解决传统安消系统信息孤岛问题，大幅提升隐患响应速度和处置效率。适用于工业园区、商业综合体、智慧社区等场景，助力企业实现"预防-监控-处置"全流程闭环管理，降低安全事故发生率，构建数字化安全防控体系。`,
    images: [customCase61, customCase62],
  },
  {
    id: 7,
    title: "消防管理平台",
    description: `消防管理平台包括“设备运维中心”“三维动态监测中心”“人员管理中心”“预警中心”以及“安全知识库”，涵盖安全、消防等各职能部门监管需求。`,
    images: [customCase71, customCase72],
  },
  {
    id: 8,
    title: "智慧园区运营管理平台",
    description: `平台集成基础数据、模型数据、园区信息化数据、运行数据、物联设备数据等，为园区运行提供支撑。`,
    images: [customCase81, customCase82],
  },
  {
    id: 9,
    title: "智能平安校园平台",
    description: `智能平安校园平台是基于AIoT技术构建的智慧安防管理系统，集成视频监控、人脸识别、电子围栏、应急报警等子系统，通过人工智能算法实现异常行为识别、危险区域闯入预警及消防隐患智能研判。平台打通校园门禁考勤、宿舍管理、周界防护等场景数据，支持一键报警、人员轨迹追踪、应急预案联动等功能，结合移动端实现家校安全信息共享。借助大数据分析能力，可动态评估校园安全态势，为管理者提供决策支持，全面提升校园风险防控能力与应急响应效率，构建覆盖"人-车-物-环境"的全方位防护体系。`,
    images: [customCase91, customCase92],
  },
  {
    id: 10,
    title: "水上安全风险预警系统",
    description: `水上交通风险预警与仿真系统是以智能船舶为理论依据，依托电子海图、空间数据库、仿真模拟以及二维可视化技术，以港口数据、通航要素数据、交流数据、预警信息数据和船舶数据为基础，模拟仿真下一代智能航运管控平台，实现水上交通一张图、风险预警管理和智能船舶监控管理等仿真功能。`,
    images: [customCase101, customCase102],
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
          <Row gutter={[24, 24]}>
            {coreProductsData.map((product) => (
              <Col xs={24} sm={24} lg={24} key={product.id}>
                <Card className="case-card" bordered={false}>
                  <Row 
                    key={product.id} 
                    gutter={[12, 12]}
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
                </Card>
              </Col>
            ))}
          </Row>
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
                  <Row gutter={[12, 12]} className="case-image">
                    {item.images.slice(0, 2).map((image, index) => (
                      <Col xs={24} sm={24} lg={12} key={index} className="tech-overlay">
                        <img src={image} alt={item.title} />
                      </Col>
                    ))}
                  </Row>
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