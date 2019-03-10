import React, { Component } from 'react'
import propTypes from 'prop-types'
import styles from './index.scss'
import { Carousel, Row, Col, Divider } from 'antd'
import './index.css'

const SelectList = [
  {
    value: 'des',
    text: {
      zh: '产品描述',
      en: 'Descrption'
    }
  },
  {
    value: 'param',
    text: {
      zh: '参数',
      en: 'Params'
    }
  },
  {
    value: 'after_sell',
    text: {
      zh: '售后',
      en: 'After Sell'
    }
  }
]

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'des'
    }
    this.goto = this.goto.bind(this)
    this.slider = null
    this.setKey = this.setKey.bind(this)
  }

  goto(index) {
    this.slider.goTo(index)
  }

  setKey(key) {
    this.setState({
      key: key
    })
  }

  componentDidMount() {
    this.goto(0)
  }

  render() {
    const { productone, language } = this.props
    return <div>
      <div className={styles.Product}>
        <div className={styles.left}>
          <Carousel
            effect="fade"
            ref={c => (this.slider = c)}
            autoplay
          >
            {
              productone && productone.images && productone.images.map((item, index) => {
                return <Image key={index} src={item.image} />
              })
            }
          </Carousel>
          <div className={styles.crads}>
            {
              productone && productone.image_card && productone.image_card.map((item, index) => {
                return <ImageCard key={index} src={item.card_image} onClick={this.goto} index={item.link} set={index} />
              })
            }
          </div>
        </div>
        <div className={styles.right}>
          <Title text={productone && productone.title && productone.title[language]} />
          <Divider />
          <Price text={productone && productone.price} />
          <Des text={productone && productone.description && productone.description[language]} />
          <Colors colors={productone.images} goto={this.goto} />
          <Buy buydata={productone && productone.buy} language={language} />
          <Share sharedata={productone && productone.share} language={language} />
        </div>
      </div>
      <div style={{ marginTop: '32px' }}>
        <Bottom language={language} current={this.state.key} setkey={this.setKey} productone={productone} />
      </div>
    </div>
  }
}

const Bottom = ({ language, current, setkey, productone }) => {
  return <div>
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start'
    }}>
      {
        SelectList.map((item, index) => {
          return <div key={index} className={styles.list}
            onClick={() => {
              setkey(item.value)
            }}
          >
            <span style={current == item.value ? { backgroundColor: 'black', color: 'white', padding: '2px' } : { backgroundColor: 'white', color: 'black', padding: '2px' }}>{item.text[language]}</span>
          </div>
        })
      }
    </div>
    <Divider />
    <div className={styles.bottomdes}>
      {
        productone && productone.more_infor && productone.more_infor.map((item, index) => {
          switch (item.type) {
            case "text":
              if (item.key == current) {
                return <p key={index} style={{ margin: '0 !important', fontSize: '10px', lineHeight: '1.5em' }}>{item.value[language]}</p>
              }
            case "image":
              if (item.key == current) {
                return <img key={index} style={{ width: '100%' }} src={item.value[language]} />
              }
          }
        })
      }
    </div>
  </div>
}

const Image = ({ src }) => {
  return <img src={src} style={{ width: '100%' }} />
}

const Title = ({ text }) => {
  return <p style={{ margin: '0', fontSize: '18px', fontWeight: '530' }}>{text}</p>
}

const Des = ({ text }) => {
  return <p style={{ margin: '0', fontSize: '8px', marginBottom: '8px', marginTop: '8px' }}>{text}</p>
}

const Price = ({ text }) => {
  return <p style={{ margin: '0', marginTop: '8px', fontWeight: '530' }}>{text}</p>
}

const Colors = ({ colors, goto }) => {
  return <div>
    <p style={{ margin: '0' }}>颜色</p>
    <Divider />
    <div className={styles.colors}>
      <Row type="flex" justify="start">
        {
          colors && colors.map((item, index) => {
            if (index < 5) {
              return <Col span={4} key={index} >
                <Color src={item.cricle_image} goto={goto} index={index} />
              </Col>
            }
          })
        }
      </Row>
      <Row type="flex" justify={"start"}>
        {
          colors && colors.map((item, index) => {
            if (index > 4 && item.cricle_image) {
              return <Col span={4} key={index} >
                <Color src={item.cricle_image} goto={goto} index={index} />
              </Col>
            }
          })
        }
      </Row>
    </div>
  </div>
}

const Color = ({ src, goto, index }) => {
  return <div className={styles.color} onClick={() => {
    goto(index)
  }}>
    <img src={src} style={{ width: '80%' }} />
  </div>
}

const ImageCard = ({ src, onClick, index, set }) => {
  return <div className={styles.imagecard} style={set == '3' ? { marginRight: '0px' } : {}} onClick={() => {
    onClick(index)
  }}>
    <img src={src} style={{ width: '100%' }} />
  </div>
}

const Buy = ({ buydata, language }) => {
  return <div style={{ width: '30%', margin: "20px 0px", cursor: 'pointer' }}
    onClick={() => {
      window.open(buydata.link, '_blank')
    }}
  >
    <img src={buydata && buydata.image[language]} style={{ width: '100%' }} className={styles.buybox}/>
  </div>
}

const Share = ({ sharedata, language }) => {
  return <div>
    <p style={{ margin: '0px', fontSize: '13px' }}>分享</p>
    <Divider />
    <div>
      <Row type="flex" justify="start">
        {
          sharedata && sharedata.map((item, index) => {
            return <Col span={4} key={index} className={styles.shareimage}>
              <img src={item.image[language]} style={{ width: '40%' }} />
            </Col>
          })
        }
      </Row>
    </div>
  </div>
}

Product.propTypes = {
}
export default Product
