import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { SubTitle } from '../../components'
import picture from './image/picture.png'
import seat from './image/seat.png'
import gao from './image/gao.png'

@connect(state => ({
  loading: state.loading
}))
class About extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { history } = this.props
    return <div style={{
      width: '68.25%',
      margin: '0 auto',
      background: '#fff',
      padding: '86px 7.45%'
    }}>
      <div style={{ width: '100%' }}>
        <SubTitle title='ABOUT US / 关于我们' />
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26,
          marginTop: 32
        }}>
          以往我们将产品的功能着眼于物品基本使用功能，而随着认识提升，我们逐渐发现精神层面的需求也将成为功能需求不可或缺的一个方面。中国在高速发展的今天，不得不面对人们由于快速高效的工作所导致精神上的巨大压力与体能上的疲惫！外部物质世界的不断充裕已不再能为人们的内心带来更多幸福感，于是我们转向对于自身反思及内心深藏之物的探究，真实而美好的幸福？高凤麟携手微客团队在2018年以“冥想座具”为起初，向全球推出“心生活”运动，打造新中国的“心生活”文化，共同构建社会及个人生活的幸福感知！
        </p>
        <p style={{
          fontFamily: 'Helvetica',
          fontSize: '8px',
          lineHeight: '1.7',
          marginBottom: 56,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          hyphens: 'auto',
          color: '#3e3e3e'
        }}>
          In the past, we focused on the basic functions of products, and as awareness increased, we gradually found that the spiritual level of demand will also become an indispensable aspect of functional requirements. Today, in the rapid development of China, China has to face the tremendous pressure and physical exhaustion caused by people's fast and efficient work! The constant abundance of the external material world can no longer bring more happiness to people's hearts. So we turn to the exploration of self-reflection and deep-seated things, real and beautiful happiness? In 2018, Gao Fenglin and the micro-bus team launched the “Heart Life”campaign to create a “heart life”culture in the new China, and jointly built a sense of happiness in society and personal life.
        </p>
        <SubTitle title='MEDITATION SEAT / 冥想座具' />
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26,
          marginTop: 32
        }}>
          2013年获得德国红点的冥想座具！ 2014获得YANKO DESIGN设计网的“TOP30: Best of best”殊荣。此后微客设计机构花费近两年时间将其量产，于2016年获得了德国iF量产奖、亚洲最具影响力设计银奖、中国好设计金奖、今年2018年再次勇夺意大利A'Design设计最高奖---铂金奖等多项国内外设计奖，历年来亦广受并受邀参加“红点在中国展”、“尤伦斯当代艺术中心展”、“曼谷中国文化中心展”、“全球TOP100创意设计展”、2015、2016上海国际家具展览会以及2016年的意大利米兰设计周(Salone Del Mobile Milano)、英国伦敦设计周（London Design Fair）、美国高点家具展(High Point Market)、日本东京设计周（Tokyo Design Week）、香港设计营商周、德国埃森博物馆2018亚洲新意境设计展等。
        </p>
        <p style={{
          fontFamily: 'Helvetica',
          fontSize: '8px',
          lineHeight: '1.7',
          marginBottom: 26,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          hyphens: 'auto',
          color: '#3e3e3e'
        }}>
          In 2013, I got the meditation seat of the German red dot! 2014 won the "TOP30: Best of best" award from YANKO DESIGN. Since then, its micro-customer design has been in mass production for nearly two years. In 2016, it won the German iF production award, the most influential design silver award in Asia, and the China Good Design Gold Award. This year, 2018 once again won the highest design of Italian A'DESIGN. Awards - Platinum Awards and many other domestic and international design awards, have been widely invited to participate in "Red Dot in China Exhibition", "Ulence Contemporary Art Center Exhibition", "Bangkok China Cultural Center Exhibition", "Global TOP100 Creative" Design Exhibition, 2015, 2016 Shanghai International Furniture Fair and 2016 Salone Del Mobile Milano, London Design Fair, Tokyo Design Week, Hong Kong Design Business Week, The 2018 Asian New Concept Design Exhibition of the Essen Museum in Germany.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 26
        }}>
          <img src={picture} style={{ width: '100%' }} />
          <span style={{
            display: 'inline-block',
            fontFamily: 'Microsoft Yahei',
            fontSize: '11px',
            color: '#696969',
            marginTop: '16px'
          }} > 冥想座具荣获6项国际大奖并在各大国际设计展会亮相</span>
        </div>
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26
        }}>
          盘腿是一种古老的坐姿，中国古人称为“居”，即所谓尊者的坐姿，乃双腿盘绕而坐。这样一种坐姿的好处在于能将身体团圆成一个有机整体，且身体的血液集中于人体上半身，使得脏腑与脑部供血充足，便于集中精力，古人常借这种姿势以打坐冥想，思考自然万物存在与关联的哲理。现代人虽仍有盘腿坐的习惯，却缺少一种用于此行为的坐具（seat ware）。希望借由这种坐具的引导，带来我们对东方生活方式的再思考。<br />
          高凤麟也了解到一般人无法盘腿,同时也因长久姿势不正确, 轻者引发腰酸背痛,重则发生脊柱侧弯变型,腰椎盘突出,甚至长骨刺等身体疾病的问题。而盘腿这种坐姿,其双盘者的腰臀及至脊柱与一般人有着大不同,双盘而坐的习惯者相较不会出现弯腰驼背外,同时骨盆是张开现象,腰,臀至背部能保持着自然挺立却不累的现象。<br />
          从坐姿演变的历史看，东西方大致经历了从席地而坐到臀部逐渐抬高的转变。各个时期的坐具中几乎都未曾提及盘腿而坐的相关家具。这就成为此项研究吸引高凤麟的一大原因。
忙碌与快节奏构成了现代人对于生活与工作的基本定义，这样的过程伴随着能量的极大消耗。能量的留存有利于我们更好地生活，且帮助改善人与物与环境之间的深层关系。冥想坐具的真正意义在于留存人体的能量，同时倡导物尽其用的消费理念。
        </p>
        <p style={{
          fontFamily: 'Helvetica',
          fontSize: '8px',
          lineHeight: '1.7',
          marginBottom: 26,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          hyphens: 'auto',
          color: '#3e3e3e'
        }}>
          Cross-legged is an ancient sitting posture, the ancient Chinese called "home", the so-called "sacred" sitting posture, is sitting on both legs. The advantage of such a sitting posture is that the body can be reorganized into an organic whole, and the blood of the body is concentrated on the upper body of the human body, so that the blood supply to the organs and the brain is sufficient, so that it is easy to concentrate. The ancients often use this posture to meditate and think about nature. The philosophy of existence and association. Although modern people still have the habit of sitting cross-legged, they lack a seat ware for this behavior. I hope that with the guidance of this kind of seat, we will rethink our oriental lifestyle.<br />
          Gao Fenglin also learned that the average person can't cross-legged, but also because of the long-term posture is not correct, the lighter causes back pain, and the problem of scoliosis, lumbar disc herniation, and even long bone spurs. In the sitting position of the cross-legged, the waist and hip of the double-disc and the spine are very different from the average person. The habit of sitting on the double-disc is less than the hunchback, and the pelvis is open, waist, hip to back. Can maintain the phenomenon of natural standing but not tired.<br />
          From the history of the evolution of sitting posture, the East and the West have experienced a transition from sitting on the ground to sitting on the hips. Almost none of the seats in each period mentioned the related furniture sitting cross-legged. This has become a major reason for this study to attract Gao Fenglin.
          Busy and fast-paced constitute the basic definition of life and work for modern people. This process is accompanied by great energy consumption. The retention of energy helps us to live better and helps to improve the deep relationship between people and things and the environment. The true meaning of meditation is to retain the energy of the human body, while advocating the consumption concept of making the best use of it.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 56
        }}>
          <img src={seat} style={{ width: '100%' }} />
          <span style={{
            display: 'inline-block',
            fontFamily: 'Microsoft Yahei',
            fontSize: '11px',
            color: '#696969',
            marginTop: '16px'
          }} >中国传统坐姿研究</span>
        </div>
        <SubTitle title='FOUNDER / 高凤麟' />
        <div style={{
          marginTop: 32,
          display: 'flex'
        }}>
          <div style={{
            width: '30%',
            marginRight: '30px'
          }}>
            <img src={gao} style={{ width: '100%' }} />
          </div>
          <div style={{
            width: '70%',
            fontFamily: 'Microsoft Yahei',
            fontSize: '10px',
            lineHeight: '1.7',
            marginTop: '-4px'
          }}>
            设计学博士，中国美术学院工业设计系副教授，微客设计机构创始人兼首席设计师。曾作为访问学者赴意大利米兰理工大学学习产品服务系统设计，完成《2015年米兰世博会移动服务系统设计》项目。提出并践行“微设计”理念，即以“微”的方式善待并改良物，形成人、物、环境三者之和谐共生。其微设计作品获得包括德国红点至尊奖、德国iF产品设计奖、意大利A’ Design Award铂金奖、德国通用设计奖（Universal Design Award）、亚洲最具影响力设计银奖、中国好设计金奖、台湾金点奖、成功设计奖等众多国内外知名奖项。微客设计机构（NANOIN）也因此获评2013年全球红点概念排行榜第二位，是华人机构在此项目上的最高排名。其本人亦获得2017年英国大本钟奖暨全球十大杰出华裔青年奖， 2017年“中英创意产业交流大使”称号；2015年中国工业设计10佳杰出设计师提名奖；以及首届杭州都市圈新锐文创青年人物、浙江省优秀创意设计师、杭州市工业设计10大精英人物、中国美术学院重大科研创作成果表彰等荣誉，其博士论文获得博士研究国家奖学金。 2014年受邀参加TEDxXihu演讲，分享微设计理念；2015年6月微客设计机构作为中国唯一受邀设计机构于德国柏林参加国际“工业设计与创新峰会”，高凤麟作会议发言，阐述未来体验经济趋势下的设计方法。2017年高凤麟作为腾讯大讲堂受邀演讲嘉宾。其代表作品《冥想座具》于全球各大设计展会以及德国艾森红点博物馆、德国iF设计博物馆、中国美术馆、西班牙马德里中国文化中心、意大利弗罗伦萨马尼亚尼菲罗尼宫、泰国曼谷中国文化中心等地展览。其微设计相关作品被报道于《INTERNI》（意大利）、《Chois Gallery》（美国）、《财经》、《红点年鉴》（德国）、《surface asia》（美国）、《Vida Simples》（巴西）、AXIS(日本)、《英中时报》（英国）、YankoDesign（加拿大）、ELLE Décor(美国)、Core77（美国）、Fashion Times(美国)、每日邮报（英国）、Trends Now(法国)、《ERGONOMICS in PRODUCT DESIGN》（HK)、《瑞丽家居》、《产品设计》、《居周刊》、《壹平方》、《居尚》、《都市周报》、《创诣》、《青年时报》、《每日商报》、《浙江日报》、《钱江晚报》、《都市快报》、《杭州日报》、中国设计在线等国内外媒体。
          </div>
        </div>
        <p style={{
          fontFamily: 'Helvetica',
          fontSize: '8px',
          lineHeight: '1.7',
          marginBottom: 26,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          hyphens: 'auto',
          color: '#3e3e3e'
        }}>
          Ph.D of Industrial Design.<br />
          The associate professor of Industrial Design Department of China Academy of Art.<br />
          The founder &amp; chief designer of NANOIN DESIGN.<br />
          Thomas Gao studied the major of Product Service System Design as a visiting scholar in Politecnico di Milano from 2008 to 2009, completed the project of &lt;The PSSD about Mobilty of 2015 Milan’s Expo&gt;. After he came back to China, his Micro Design works won several famous design awards, including Red dot Design Awards best of the best, iF Design Award, A’Design Award Platinum Award), Universal Design Award ,Design For Asia Award Silver Award,China Good Award Gold Award, Golden Pin Design Awards, Successful Design Award and so on. The NANOIN Design Studio was ranked No.2 in the Red dot design ranking 2013: design studio. Up to now，NANOIN is China's top ranked design studio in Red dot concept ranking of this group. Thomas Gao won Big Ben Award of UK in 2017, also was awarded the "Sino British creative industries ambassador" in the same year, 10 outstanding designers of China's industrial design nominated awards in 2015, the vigorous creative young people of Hangzhou metropolitan area, outstanding creative designers in Zhejiang Province, Hangzhou Industrial Design 10 elite figures, China Academy of Fine Arts awards for major scientific research and creative achievements, his doctoral thesis won the national scholarship. Thomas Gao was invited to give a speech in the TEDx Xihu in 2014 to share his idea and works of micro-design; in June of 2015, as the only Chinese design agency invited to participate in the International Summit on Industrial Design and Innovation in Berlin, Germany, Gao Fenglin gave a speech of the design method under the future experience of economic trends. In 2017, Gao Fenglin was invited to speak in the Tencent Lecture Hall. His representative work, Meditation Sets, was exhibited at several famous design exhibitions around the world, also was exhibited at the Red Dot Museum in Eisen of Germany, the iF Design Museum in Germany, the Chinese Art Museum, the Chinese Cultural Center in Madrid, Spain, the Manani Phoenix Palace in Florence, Italy; and the Chinese Cultural Center in Bangkok, Thailand. Thomas Gao’s Micro Design works were published by famous media all around the world, such as &lt;INTERNI&gt; (Italy) , &lt;Chois Gallery&gt; (USA) , &lt;Economy&gt; (China) , &lt;Red dot design concept year book&gt; (Germany) , &lt;surface asia&gt; (USA) , &lt;Vida Simples&gt; (Brazil) , &lt;AXIS&gt; (Japan) , &lt;Mail Online&gt; (UK) , YankoDesign (Canada) , &lt;ELLE Décor&gt; (USA) , &lt;Core77&gt; (USA) , &lt;Fashion Times&gt; (USA) , &lt;UK CHINESE TIMES&gt; (UK) , &lt;Trends Now&gt; (France) , 《ERGONOMICS in PRODUCT DESIGN》 (HK) , Chinese Design Online and a lot of Chinese mainland’s media.
        </p>
      </div>
    </div >
  }
}

About.propTypes = {
  history: PropTypes.object
}
export default About
