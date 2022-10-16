import React from 'react'
import classNames from 'classnames/bind'
import styles from './ExploreProduct.module.scss'

const cx = classNames.bind(styles)

const ExploreProduct = () => {
	return (
		<div className={cx('product-area')}>
			<div className="container">
				<div className={cx('wrapper')}>Product Area</div>
			</div>
		</div>
	)
}
export default ExploreProduct
