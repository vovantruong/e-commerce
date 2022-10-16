import React from 'react'
import classNames from 'classnames/bind'
import styles from './AboutUs.module.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const cx = classNames.bind(styles)

const AboutUs = () => {
	return (
		<div className={cx('about-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('content')}>
						<div className={cx('wrap-title')}>
							<div className={cx('title-hightlighter')}>
								<span className={cx('icon')}>
									<AiOutlineQuestionCircle />
								</span>
								<span className={cx('text-area')}>About Us</span>
							</div>
							<h2 className={cx('title')}>Who we are</h2>
						</div>
						<div className={cx('wrap-content')}>

						</div>
					</div>
					<div className={cx('about-gallery')}></div>
				</div>
			</div>
		</div>
	)
}
export default AboutUs
