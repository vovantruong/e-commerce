import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './UserAccount.module.scss'
import { BiUser } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from 'react-router-dom'

const dataMenuItem = [
	{
		title: 'My Account',
		icon: '',
		url: '#',
		isLogin: true,
	},
	{
		title: 'Notification',
		icon: '',
		url: '#',
		isLogin: true,
	},
	{
		title: 'Support',
		icon: '',
		url: '#',
		isLogin: false,
	},
	{
		title: 'Language',
		icon: '',
		url: '#',
		isLogin: false,
	},
]

const cx = classNames.bind(styles)

const UserAccount = ({ className, buttonClassName }) => {
	const [visible, setVisible] = useState(false)

	const token = false

	function renderUserIsLogin() {
		return (
			<React.Fragment>
				<ul>
					{dataMenuItem.map((item, i) => (
						<li key={i}>
							<Link className={cx('menu-item')} to>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<Link to="#" className={cx('btn-auth')}>Sign out</Link>
			</React.Fragment>
		)
	}

	function renderUserNotLogin() {
		return (
			<React.Fragment>
				<ul>
					{dataMenuItem.map(
						(item, i) =>
							!item.isLogin && (
								<li key={i}>
									<Link className={cx('menu-item')} to>
										{item.title}
									</Link>
								</li>
							)
					)}
				</ul>
				<Link to="/login" className={cx('btn-auth')}>Login</Link>
				<div className={cx('register-foot')}>
					<span>No account yet?</span>
					<Link to="/register" className={cx('link')}>register here.</Link>
				</div>
			</React.Fragment>
		)
	}

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div className={cx('user-account', className)}>
				<button className={cx(buttonClassName)} onClick={() => setVisible(!visible)}>
					<BiUser />
				</button>
				<div className={cx('wrapper', { 'show-wrapper': visible })}>
					<span className={cx('wrapper-title')}>Quicklinks</span>
					{token ? renderUserIsLogin() : renderUserNotLogin()}
				</div>
			</div>
		</OutsideClickHandler>
	)
}
export default UserAccount
