import React, { useState, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'

const cx = classNames.bind(styles)

const ProductDetail = () => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div className={cx('detail-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('wrap-block')}>
						Product Gallery
					</div>
					<div className={cx('wrap-block')}>
						<div className={cx('content')}>
                            Product Detail
                        </div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductDetail
