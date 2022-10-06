import React from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayoutAdmin.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const DefaultLayoutAdmin = ({ children }) => {
	return (
		<div className={cx('wrap-screen')}>
			<ul>
				<Link to="/ad/dash">Dashboard</Link>
				<Link to="/ad/login">Login Admin</Link>
				<Link to="/ad/register">Register Admin</Link>
			</ul>
			{children}
		</div>
	)
}
export default DefaultLayoutAdmin
