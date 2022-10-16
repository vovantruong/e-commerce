import React from 'react'
import classNames from 'classnames/bind'
import styles from './BestSellers.module.scss'

const cx = classNames.bind(styles)

const BestSellers = () => {
	return (
		<div className={cx('best-sellers')}>
			<div className="container">
				<div className={cx('wrapper')}>BestSellers</div>
			</div>
		</div>
	)
}
export default BestSellers
