import React from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children, notFooter = false, notHeader = false }) => {
	return (
		<div className={cx('wrap-screen')}>
			{!notHeader && <Header />}
			{children}
			{!notFooter && <Footer />}
		</div>
	)
}
export default DefaultLayout
