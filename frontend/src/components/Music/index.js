import React, { Component } from 'react'
import styles from './index.scss'
const QRcode = require('./image/QRcode.png')
const play = require('./image/play.png')
const play_black = require('./image/play_black.png')
const pause = require('./image/pause.png')
const pause_black = require('./image/pause_black.png')
let audio = document.createElement('audio')

class Music extends Component {
  constructor (props) {
    super(props)
    this.state = {
      musicIndex: null,
      inIcon: null
    }
  }
  render () {
    const { musicIndex, inIcon } = this.state
    const { musics } = this.props
    return (<div>
      <div style={{ width: '100%', margin: '0 auto', paddingBottom: 160, borderBottom: '1px solid #ddd', marginBottom: 20 }}>
        {musics.map((item, index) => (
          <div style={{ width: '70%', border: '1px solid #aaa', margin: '36px auto', display: 'flex', position: 'relative' }}>
            <div>
              <img src={item.coverUrl} style={{ height: 80 }} />
              {musicIndex !== index && <img style={{ position: 'absolute', height: '40px', top: 20, left: 20 }}
                onMouseEnter={() => {
                  this.setState({
                    inIcon: index
                  })
                }}
                onMouseLeave={() => {
                  this.setState({
                    inIcon: null
                  })
                }}
                onClick={() => {
                  audio.src = item.linkUrl
                  audio.oncanplay = () => {
                    audio.play()
                  }
                  this.setState({
                    musicIndex: index
                  })
                }}
                src={index === inIcon ? play_black : play} />}
              {musicIndex === index && <img style={{ position: 'absolute', height: '40px', top: 20, left: 20 }}
                src={index === inIcon ? pause_black : pause}
                onClick={() => {
                  audio.pause()
                  this.setState({
                    musicIndex: null
                  })
                }} />}
            </div>
            <div style={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', alignItems: 'center', paddingLeft: '6%', background: '#F5F6F7' }}>
              <div>
                <div style={{ width: '100%', marginBottom: 6, fontSize: 12, color: '#333' }} className={styles.en}>{item.title}</div>
                <div style={{ width: '100%', fontSize: 8 }} className={styles.en}>{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
        <img style={{ height: '84px' }} src={QRcode} />
      </div>
    </div>)
  }
}
export default Music
