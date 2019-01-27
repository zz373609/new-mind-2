import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { SubTitle } from '../../components'

const aboutus = {
  zh: '心冥想',
  en: 'SHINE MEDITATION'
}
const p1 = {
  zh: '“心冥想”品牌成立于2017年，是基于人类未来生存方式的健康生活品牌，包含富有全新体验的家居产品及冥想释压服务两部分。“心冥想”以全球知名家具——冥想座具为核心产品，扩展出多个品类、不同款式的冥想周边产品系列。以往我们将产品的功能着眼于物品的基本使用功能，而随着认识提升，我们逐渐发现对于人类精神层面更高的探求也将成为功能需求不可或缺的一个方面。在社会高速发展的今天，人们将不得不面对由于快速高效的工作所带给我们的精神压力与体能透支，外部物质世界的不断充裕已很难为人们带来更多的幸福感。于是我们转向对于自我内心深藏之物的探究，究竟真实而美好的幸福源于何处？ 2018年我们向全球推出“心生活”运动，并开始着手打造中国的东方灵性生活文化，以冥想的生活方式激发人们的身心潜能，构建社会协作及个人生活的幸福感知！',
  en: '"Shine Meditation", founded in 2017, is a brand of healthy life based on the future way of human survival. It includes two parts: home products with brand-new experience and meditation relief service. "Meditation" takes the world-renowned furniture - Meditation seat as its core product, expanding a variety of categories, different styles of meditation peripheral product series. In the past, we focused on the basic use function of products. With the improvement of our understanding, we gradually found that the exploration of higher spiritual level of human beings will become an indispensable aspect of functional needs. Today, with the rapid development of society, people will have to face the mental pressure and physical overdraft brought by fast and efficient work. The continuous abundance of the external material world can no longer bring more happiness to people. So we turn to the inquiry into what is hidden in our heart. Where does real and beautiful happiness come from? In 2018, we launched the "Heart Life" campaign to the whole world, and began to build China\'s Oriental spiritual life culture, to stimulate people\'s physical potential by meditative lifestyle, and to build social collaboration and happiness perception of personal life!'
}

const seatl = {
  zh: '冥想座具',
  en: 'MEDITATION SEAT'
}

const reward = {
  zh: '“冥想座具”可被誉为真正意义上的中国原创健康功能家具。它的出现使得人类从古至今一直保留的盘腿坐姿拥有了与之相匹配的完美座具！借由这种独特的坐姿，我们以冥想的方式开启与自我心灵的对话，并逐步改善大脑的功能结构，释放长久以来未被开发的思维潜力。从概念诞生之初便开始经历大量人体工程学试验，最终生成了现在的形态与体验感受。冥想座具一经出现便在全球大放异彩，成为中国当代家具的骄傲！2013年获得德国红点设计概念奖，2014年获得加拿大权威媒体YANKO DESIGN设计网评选的全球创意“TOP30: Best of best”殊荣；2016年获得德国iF设计量产奖、亚洲最具影响力设计银奖、中国好设计金奖、成功设计奖；2018年再次勇夺意大利A\'Design Award全场最高奖-- - 铂金奖，并被日本知名设计媒体AXIS评为2018年意大利A\'Design Award最受欢迎“TOP 10”作品！历年来亦频繁受邀参加全球各大展览，如“红点在中国展”、“尤伦斯当代艺术中心联想创客展”、曼谷中国文化中心展、“全球TOP100创意设计展”、上海国际家具展览会、意大利米兰设计周(Salone Del Mobile Milano)、英国伦敦设计周（London Design Fair）、美国高点家具展(High Point Market)、日本东京设计周（Tokyo Design Week）、法国圣艾蒂安双年展、香港设计营商周，德国埃森红点博物馆“亚洲新意境”设计展、德国iF设计博物馆展、意大利马尼亚尼菲洛尼宫展等、西班牙马德里中国文化中心展、马耳他中国文化中心展、中国美术馆展、中央文化管理干部学院中国创意人才库入选展等。亦成为全球各大知名设计媒体争相报道的产品。',
  en: 'Meditation seat can be praised as the original health function furniture in China in the true sense. Its appearance makes the cross-legged sitting posture that human beings have retained from ancient times to the present have the perfect seat matching with it! With this unique sitting posture, we initiate dialogue with our own mind in a meditative way, and gradually improve the functional structure of the brain, releasing the untapped thinking potential for a long time. From the beginning of concept\'s birth, a lot of ergonomic experiments have been carried out, and finally the present form and experience have been generated. Meditation seat, once it appeared, shined globally and became the pride of contemporary Chinese furniture. In 2013, it won the German Red Dot Design Concept Award; and in 2014, it won the Global Creative "TOP30: Best of best" from the Canadian authoritative media YANKO DESIGN; in 2016, it won the German iF Design Product Award, the Design for Asia Award (Silver Award), the China Good Design Award (Gold Award) and the Successful Design Award; in 2018, it won the Italian A\'Design Award (Platinum Award), and was awarded AXIS, a well-known Japanese design media, selected the most popular "TOP 10" works of A\'Design Award in 2018. Over the years, it has also been invited to participate in major global exhibitions, such as "Red Dot in China Exhibition", "Lenovo Creator Exhibition of Ullens Contemporary Art Center", "Global TOP100 Creative Design Exhibition" and "Shanghai International Furniture Exhibition", "Salone Del Mobile Milano ", "London Design Fair" in UK and " High Point Furniture Expo" in USA, Tokyo Design Week in Japan, Saint Etienne Biennale in France, Hong Kong Design Business Week, Red Dot Museum in Essen, Germany "New Asian Artistic Conception" Design Exhibition, iF Design Museum Exhibition in Germany, Manani Phoenix Palace Exhibition in Italy, Madrid Chinese Culture Center Exhibition in Spain, Malta Chinese Culture Center Exhibition, China Art Museum Exhibition, etc. It has also become a product reported by the world\'s famous design media.'
}

const aboutseat = {
  zh: '关于坐姿',
  en: 'ABOUT SITTING POSTURE'
}

const p2 = {
  zh: `盘腿是一种古老的坐姿，中国古人称为“居”，即所谓尊者的坐姿，乃双腿盘绕而坐。这样一种坐姿的好处在于能将身体团圆成一个有机整体，且身体的血液集中于人体上半身，使得脏腑与脑部供血充足，便于集中精力，古人常借这种姿势以打坐冥想，思考自然万物存在与关联的哲理。现代人虽仍有盘腿坐的习惯，却缺少一种用于此行为的坐具。希望借由这种坐具的引导，带来我们对东方生活方式的再思考。
从坐姿演变的历史看，东西方大致经历了从席地而坐到臀部逐渐抬高的转变。各个时期的坐具中几乎都未曾提及盘腿而坐的相关家具，这就成为此项研究的重要原因。 忙碌与快节奏构成了现代人对于生活与工作的基本定义，这样的过程伴随着能量的极大消耗。能量的留存有利于我们更好地发掘身体中潜藏的能力，且帮助改善人、物与环境之间的深层关系。
  一般人无法长时间盘腿，且坐姿多呈现不够中正挺立的姿态，这样一来便易产生脊椎疾病。冥想座具以人体工程学研究为基础，开发帮助人们形成正确、轻松盘腿坐姿的器具，并以冥想活动达到开发人体潜能与贮存能量的终极效果。长久使用会让我们爱上自己的身体，并学会与自我对话。`,
  en: `Cross- legged is an ancient sitting posture.Ancient Chinese people called it "residence".That is to say, the so - called sitting posture of respectful people is sitting with two legs coiled.The advantage of such a sitting posture is that it can reunite the body into an organic whole, and the blood of the body concentrates on the upper body of the human body, so that the viscera and brain supply enough blood to facilitate the concentration of energy.Ancient people often used this posture to meditate and think about the philosophy of the existence and association of natural things.Although modern people still have the habit of sitting cross - legged, they lack a seat for this behavior.It is hoped that the guidance of this kind of seat will lead us to rethink the Oriental way of life.
From the history of sitting posture evolution, the East and the West roughly experienced a change from sitting on the floor to gradually raising the buttocks.There is almost no mention of cross - legged furniture in the seating utensils of each period, which is an important reason for this study.Busy and fast rhythm constitute the basic definition of life and work for modern people.This process is accompanied by a great consumption of energy.The retention of energy is conducive to our better discovery of potential abilities in the body, and helps to improve the deep relationship between people, things and the environment.
Generally speaking, people can not cross their legs for a long time, and their sitting postures are not straight enough, so they are prone to spinal diseases.Meditation seat is based on ergonomics.It develops instruments to help people form correct and relaxed cross - legged sitting posture, and achieves the ultimate effect of developing human potential and storing energy through meditation activities.Long - term use will make us fall in love with our bodies and learn to talk to ourselves.`
}

const person = {
  zh: `设计学博士，任教于中国美术学院，冥想座具主创设计师。在其博士研究中首次提出微设计理论，并以其思维方法指导设计实践。曾在2014年受邀于TEDx演讲，2017年因其微设计理念在设计领域富有洞见的全新视角而获颁英国大本钟奖（神工奖）暨十大杰出华裔青年设计师奖，并被同时授予中英国际设计周“中英创意产业交流大使”称号。其设计作品至今已囊获包括德国红点设计至尊奖、德国iF产品设计奖、意大利A设计铂金奖、德国通用设计奖、亚洲最具影响力设计银奖、中国好设计奖金奖、台湾金点设计奖 、成功设计奖在内的众多国内外权威设计大奖，并带领微客设计机构（Nanoin Design）获评德国红点奖概念类全球排名第二的佳绩，是华人机构在此项目上的最高排名。微设计理念的本质在于倡导人、物、环境三者和谐发展的关系，它强调以极其细微的视角观察事物，重新诠释设计要素的内在关联，提炼并删减掉不必要的设计要素，从而得到产品全新的形式表达。2017年创立以精神释压为核心理念的健康生活品牌“心冥想”（Shine Meditation），帮助提供身心平衡的健康产品及服务，并致力于开发人类身体及大脑未知的潜力。冥想座具受邀参加全球各大知名设计展览。其设计作品亦被报道于<INTERNI>（意大利）、<Chois Gallery>（美国）、《财经》、《红点年鉴》（德国）、<surface asia>（美国）、<Vida Simples>（巴西）、AXIS(日本)、《英中时报》（英国）、YankoDesign（加拿大）、ELLE Décor(美国)、Core77（美国）、Fashion Times(美国)、每日邮报（英国）、Trends Now(法国)、<ERGONOMICS in PRODUCT DESIGN>（HK)、联合早报（新加坡）、《青年时报》、《每日商报》、《浙江日报》、《钱江晚报》、《都市快报》、《杭州日报》、《瑞丽家居》、《产品设计》、中国设计在线等国内外媒体。`,
  en: `Doctor of Design, who teaches at the China Academy of Art, is the chief designer of Meditation Seat. In his doctoral research, micro-design theory was first put forward, and its thinking method was used to guide design practice. He was invited to speak at TEDx in 2014. In 2017, he was awarded the Big Ben Award (Shengong Award) and the Top Ten Outstanding Young Chinese Designers Award for his insightful new perspectives in the field of micro-design. He was also awarded the title of "Ambassador for the Exchange of Creative Industries between China and the UK" for the Sino-British International Design Week. His design works have won many authoritative design awards at home and abroad, including the German Red Spot Design Award, the German iF Product Design Award, the Italian A Platinum Design Award, the German General Design Award, the Asian Most Influential Design Silver Award, the Chinese Good Design Award, the Taiwan Golden Spot Design Award and the Successful Design Award. The second best achievement in the concept category of the National Red Spot Award is the highest ranking of Chinese organizations in this project. The essence of the concept of micro-design is to advocate the harmonious development of human, material and environment. It emphasizes observing things from a very subtle perspective, reinterpreting the internal relationship of design elements, refining and deleting unnecessary design elements, so as to get a brand-new form of product expression. In 2017, Shine Meditation, a brand of healthy life with mental stress relief as its core concept, was established to help provide balanced health products and services, and to develop the unknown potential of human body and brain. Meditation seats are invited to participate in major world-renowned design exhibitions. Its design works have also been reported in <INTERNI> (Italy), <Chois Gallery> (USA), <Finance and Economics>,<Red Dot Design Concept Yearbook (Germany), <Surface Asia> (USA), <Vida Simples> (Brazil), <AXIS> (Japan), <British and Chinese Times> (UK), <Yanko Design> (Canada), <ELLE Décor> (USA), <Core77> (USA), <Fashion Times> (USA), <Mail Online> (UK), <Trends Now> (France), <ERGONOMICS in PRODUCT Design> (HK), <Lianhe Zaobao> (Singapore), <Youth Times>, <Furniture Today> and many other domestic and foreign media.`
}

@connect(state => ({
  loading: state.loading,
  homepage: state.homepage
}))
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { history, homepage } = this.props
    let { language } = homepage
    return <div style={{
      margin: '0 auto',
      background: '#fff',
      padding: '86px 7.45%'
    }}>
      <div style={{ width: '100%' }}>
        <SubTitle title={aboutus[language]} />
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26,
          marginTop: 32
        }}>
          {
            p1[language]
          }
        </p>
        <SubTitle title={seatl[language]} />
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26,
          marginTop: 32
        }}>
          {
            reward[language]
          }
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 26
        }}>
          <img src={'http://pkndszzxq.bkt.clouddn.com/world.png'} style={{ width: '100%' }} />
          <span style={{
            display: 'inline-block',
            fontFamily: 'Microsoft Yahei',
            fontSize: '11px',
            color: '#696969',
            marginTop: '16px'
          }} > {
              language == 'zh' ? '冥想座具荣获众多国际大奖并在各大国际设计展会亮相' : 'Meditation seat won several famous design awards and was exhibited all over the world'
            }</span>
        </div>
        <SubTitle title={aboutseat[language]} />
        <p style={{
          fontFamily: 'Microsoft Yahei',
          fontSize: '10px',
          lineHeight: '1.7',
          marginBottom: 26,
          marginTop: 32
        }}>
          {
            p2[language]
          }
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 56
        }}>
          <img src={'http://pkndszzxq.bkt.clouddn.com/siting.png'} style={{ width: '100%' }} />
          <span style={{
            display: 'inline-block',
            fontFamily: 'Microsoft Yahei',
            fontSize: '11px',
            color: '#696969',
            marginTop: '16px',
            marginBottom: '32px'
          }} >{
              language == 'zh' ? '中国传统坐姿研究' : 'Chinese Tranditional sitting posture'
            }</span>
          <img src={'http://pkndszzxq.bkt.clouddn.com/hisotry.png'} style={{ width: '100%' }} />
          <span style={{
            display: 'inline-block',
            fontFamily: 'Microsoft Yahei',
            fontSize: '11px',
            color: '#696969',
            marginTop: '16px',
            marginBottom: '16px'
          }} >{
              language == 'zh' ? '中国坐具历史' : 'Chinese seat hisotry'
            }</span>
        </div>
        <SubTitle title={language == 'zh' ?'创始人-高凤麟' : 'Founder-Gao Fengling'} />
        <div style={{
          marginTop: 32,
          display: 'flex'
        }}>
          <div style={{
            width: '30%',
            marginRight: '30px'
          }}>
            <img src={'http://pkndszzxq.bkt.clouddn.com/person.jpeg'} style={{ width: '100%', marginRight: '16px' }} />
          </div>
          <div style={{
            width: '70%',
            fontFamily: 'Microsoft Yahei',
            fontSize: '10px',
            lineHeight: '1.7',
            marginTop: '-4px'
          }}>
            {
              person[language]
            }
          </div>
        </div>
      </div>
    </div >
  }
}

About.propTypes = {
  history: PropTypes.object
}
export default connect(state => state)(About)
