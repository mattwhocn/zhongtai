import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { 
  GlobalOutlined, 
  TrophyOutlined, 
  TeamOutlined, 
  EnvironmentOutlined,
  HeartOutlined 
} from '@ant-design/icons';
import { gradients } from '../../../utils/gradients';
import case1 from '../../../assets/images/sustainability/social/case1.jpg';
import case2 from '../../../assets/images/sustainability/social/case2.jpg';
import case3 from '../../../assets/images/sustainability/social/case3.jpg';
import case4 from '../../../assets/images/sustainability/social/case4.png';
import case5 from '../../../assets/images/sustainability/social/case5.jpg';
import case6 from '../../../assets/images/sustainability/social/case6.jpg';
import case7 from '../../../assets/images/sustainability/social/case7.jpg';
import case8 from '../../../assets/images/sustainability/social/case8.jpg';
import case9 from '../../../assets/images/sustainability/social/case9.jpg';
import './style.less';

const { Title, Paragraph } = Typography;

// 战略举措数据
const strategies = [
  {
    id: 1,
    title: '应急救援方面',
    content: `2016 年 7 月 20 日抗洪行动中，迅速启动抗洪应急预案，带领 460 名保安队员，出动车辆 60 余台次，携带 100 多万元的抗洪抢险物资奔赴抗洪一线，救助受困群众 200 余人，车辆 300 余台，抢救价值 9 千余万元的物资财产。
2023 年 7 月，中泰民安红十字应急救援服务中心发扬 "人道、博爱、奉献" 的红十字精神，出动 30 人，调动防汛车 1 辆，救援车 3 辆，大型抽水机 3 台等防汛救灾物资，到达永定河大堤、采育镇、榆垡镇、黄村镇、庞各庄镇、狼垡地区等重点点位地段进行巡视、开展救援，24 小时不间断值守。
`,
    gradient: gradients.techBlue,
    icon: <GlobalOutlined />
  },
  {
    id: 2,
    title: '安保服务方面',
    content: `疫情期间，成立 "中泰民安集团疫情防控党员先锋队"，设立党员带班值守岗位 20 个，董事长赵性仓每天到 80 余个执勤岗位了解防控情况，累计派出 50 余万人次，每天检测车辆达 15000 余台次，接触人员 50000 余人次。`,
    gradient: gradients.techGold,
    icon: <TrophyOutlined />
  },
  {
    id: 3,
    title: '消费帮扶方面',
    content: `2023 年 11 月 21 日，参与承办 "京蒙协作大兴消费帮扶合作基地成立大会暨锡林郭勒盟绿色农畜产品推介品鉴会"，锡林郭勒盟 14 家绿色农畜产品加工企业与采购企业达成合作意向并进行了签约，签约金额近 2 亿元，共同推进京蒙协作走实走深，助力乡村振兴。`,
    gradient: gradients.businessBlue,
    icon: <TeamOutlined />
  },
  {
    id: 4,
    title: '公益活动方面',
    content: `带领 128 名员工参加属地义务献血，共 4.8 万毫升；在对全国因公牺牲公安民警，一至四级伤残公安干警家庭及未成年子女的帮扶上捐助善款约 30 万元。
成立一支 300 人的民兵应急大队，配备各种应急、指挥车辆 33 台；支持对口精准扶贫财物价值 200 余万元。
带领 138 名党员、团员、青年志愿者参加社区清整卫生、垃圾分类、蒲公英计划、疫情期间值守、核酸检测、疫苗接种维护秩序等志愿服务活动，志愿服务时长累计达 8 万余小时；定点帮扶 10 余名孤寡老人。
成立中泰民安红十字志愿服务队与 "北京市大兴区中泰民安红十字救援服务中心"，参与了 "5.12 防灾减灾"、"2021.5.8 红气球定向越野赛暨京津冀应急救护达人大赛"、"首都社区应急救护大赛暨第五届全国红十字应急救护大赛" 等活动。
`,
    gradient: gradients.premiumGray,
    icon: <EnvironmentOutlined />
  },
  {
    id: 5,
    title: '员工关怀方面',
    content: `集团工会委员会为季度过生日的工会会员发去现金红包，让员工感受到集团的关爱和贴心。
发放季度项目好人好事奖金，对集团各项目中涌现出来的好人好事正能量事迹进行表彰，并对参与队员进行现金奖励。
`,
    gradient: gradients.aiGradient,
    icon: <HeartOutlined />
  }
];

// 社会责任案例数据
const socialCases = [
  {
    id: 1,
    title: '案例一',
    image: case1,
  },
  {
    id: 2,
    title: '案例二',
    image: case2,
  },
  {
    id: 3,
    title: '案例三',
    image: case3,
  },
  {
    id: 4,
    title: '案例四',
    image: case4,
  },
  {
    id: 5,
    title: '案例五',
    image: case5,
  },
  {
    id: 6,
    title: '案例六',
    image: case6,
  },
  {
    id: 7,
    title: '案例七',
    image: case7,
  },
  {
    id: 8,
    title: '案例八',
    image: case8,
  },
  {
    id: 9,
    title: '案例九',
    image: case9,
  }
];

const Social: React.FC = () => {
  return (
    <div className="social-page">
      <div className="section-content">
        <div className="section-header">
          <Title level={2}>社会责任</Title>
        </div>
        <div className="strategies-grid">
          <Row gutter={[24, 24]}>
            {strategies.map((strategy, index) => (
              <Col xs={24} md={12} key={strategy.id}>
                <Card 
                  className="strategy-card"
                  style={{ 
                    background: `linear-gradient(135deg, ${strategy.gradient}, ${strategy.gradient}66)`
                  }}
                >
                  <div className="strategy-content">
                    <div className="strategy-number">{index + 1}</div>
                    <Title level={3}>
                      {strategy.icon} {strategy.title}
                    </Title>
                    <Paragraph>{strategy.content}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="section-content">
        <div className="section-header">
          <Title level={2}>案例展示</Title>
        </div>
        <div className="cases-grid">
          <Row gutter={[24, 24]}>
            {socialCases.map(case_ => (
              <Col xs={24} sm={12} md={8} key={case_.id}>
                <Card className="case-card" bordered={false}>
                  <div className="case-image">
                    <img src={case_.image} alt={case_.title} />
                    <div className="case-title">
                      <h3>{case_.title}</h3>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Social; 