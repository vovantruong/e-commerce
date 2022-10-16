import React from 'react'
import classNames from 'classnames/bind'
import styles from './Countdown.module.scss'
import { BsPhone } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Countdown = () => {
	return (
		<div className={cx('countdown-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('wrap-item')}>
						<div className={cx('content')}>
							<div className={cx('content-title')}>
								<div className={cx('title-hightlighter')}>
									<span className={cx('icon')}>
										<BsPhone />
									</span>
									<span className={cx('text-area')}>Don't Miss!!</span>
								</div>
								<h2 className={cx('title')}>Enhance Your Phone Experience</h2>
							</div>
							<div className={cx('content-countdown')}>
								<div className={cx('countdown-section')}>
									<div className={cx('countdown-number')}>0</div>
									<div className={cx('countdown-unit')}>Day</div>
								</div>
								<div className={cx('countdown-section')}>
									<div className={cx('countdown-number')}>00</div>
									<div className={cx('countdown-unit')}>Hrs</div>
								</div>
								<div className={cx('countdown-section')}>
									<div className={cx('countdown-number')}>00</div>
									<div className={cx('countdown-unit')}>Min</div>
								</div>
								<div className={cx('countdown-section')}>
									<div className={cx('countdown-number')}>00</div>
									<div className={cx('countdown-unit')}>Sec</div>
								</div>
							</div>

							<Link className={cx('content-btn')} to="#">
								Check it Out!
							</Link>
						</div>
					</div>
					<div className={cx('wrap-item')}>
						<div className={cx('thumbnail')}>
							<img src={require('../../../assets/product/iphone-14-pro-max.png')} alt="..." />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Countdown
