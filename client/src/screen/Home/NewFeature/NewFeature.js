import React from 'react'
import classNames from 'classnames/bind'
import styles from './NewFeature.module.scss'

const cx = classNames.bind(styles)

const NewFeature = () => {
	return (
		<div className={cx('feature-area')}>
			<div className="container">
				<div className={cx('wrapper')}>New Feature</div>
			</div>
		</div>
	)
}
export default NewFeature
