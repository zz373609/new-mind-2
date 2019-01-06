import React, { Component } from 'react'
import propTypes from 'prop-types'
import styles from './index.scss'
import { Carousel, Row, Col } from 'antd'
import Divider from '../Divider'

const image = [1, 2, 3, 4, 5]

class Product extends Component {
	render() {
		const { } = this.props
		return <div>
			<div className={styles.Product}>
				<div className={styles.left}>
					<Carousel>
						<div>
							<Image src={'http://pkndszzxq.bkt.clouddn.com//image/project16.png'} />
						</div>
					</Carousel>
					<div className={styles.crads}>
						<ImageCard src={'http://pkndszzxq.bkt.clouddn.com//image/project12.png'} />
						<ImageCard src={'http://pkndszzxq.bkt.clouddn.com//image/project12.png'} />
						<ImageCard src={'http://pkndszzxq.bkt.clouddn.com//image/project12.png'} />
						<ImageCard src={'http://pkndszzxq.bkt.clouddn.com//image/project12.png'} />
					</div>
				</div>
				<div className={styles.right}>
					<Title text={'冥想坐具'} />
					<Divider />
					<Price text={'¥2180-2580'} />
					<Des />
					<Colors />
					<Share />
				</div>
			</div>
			<div>
			</div>
		</div>
	}
}

const Image = ({ src }) => {
	return <img src={src} style={{ width: '100%' }} />
}

const Title = ({ text }) => {
	return <p>{text}</p>
}

const Des = ({ text }) => {
	return <p style={{ fontSize: '10px', marginBottom: '16px' }}>盘腿是一种有益的古老姿势,但是现代人缺少一种合适的坐具以盘腿坐。这是一张真正意义上的辅助冥想的人体工学盘腿坐具。</p>
}

const Price = ({ text }) => {
	return <p style={{ marginTop: '16px' }}>{text}</p>
}

const Colors = ({ colors }) => {
	return <div>
		<p>颜色</p>
		<Divider />
		<div className={styles.colors}>
			<Row type="flex" justify="space-around">
				{
					image.map((item, index) => {
						return <Col span={4}>
							<Color src={'http://pkndszzxq.bkt.clouddn.com//image/project03.png'} />
						</Col>
					})
				}
			</Row>
			<Row type="flex" justify="space-around">
				{
					image.map((item, index) => {
						return <Col span={4}>
							<Color src={'http://pkndszzxq.bkt.clouddn.com//image/project03.png'} />
						</Col>
					})
				}
			</Row>
		</div>
	</div>
}

const Color = ({ src }) => {
	return <div className={styles.color}>
		<img src={src} style={{ width: '60%' }} />
	</div>
}

const ImageCard = ({ src }) => {
	return <div className={styles.imagecard}>
		<img src={src} style={{ width: '100%' }} />
	</div>
}

const Buy = ({ }) => {
	return <div>
	</div>
}

const Share = ({ }) => {
	return <div>
		<p>分享</p>
		<Divider />
		<div>
		</div>
	</div>
}

Product.propTypes = {
}
export default Product
