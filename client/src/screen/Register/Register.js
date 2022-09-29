import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import Logo from '../../assets/logo-text.png'
import { Link } from 'react-router-dom'
import { MediaQueryContext } from '~/context/MediaQueryContext'

const cx = classNames.bind(styles)

const Register = () => {
	const isBreakPoint = useContext(MediaQueryContext)

	return (
		<div className={cx('register')}>
			<div className={cx('wrapper')}>
				{!isBreakPoint.isMobile && (
					<div className={cx('wrapper__intro')}>
						<Link to="/">
							<img src={Logo} className={cx('logo-img')} alt="..." />
						</Link>
						<h3 className={cx('desc-title')}>We Offer the Best Products</h3>
					</div>
				)}

				{isBreakPoint.isMobile && (
					<div className={cx('logo-img-mb')}>
						<Link to="/">
							<img src={Logo} className={cx('logo-img')} alt="..." />
						</Link>
					</div>
				)}
				<div className={cx('wrapper__login')}>
					<div className={cx('next-signup')}>
						<span>Already a member?</span>
						<Link to="/login" className={cx('link')}>
							Sign In
						</Link>
					</div>
					<form className={cx('signin-form')} autoComplete="off">
						<h3 className={cx('form-title')}>Sign up to Tshop</h3>
						<p className={cx('form-desc-title')}>Enter your detail below</p>
						<div className={cx('form-group')}>
							<input id="username" type="text" className={cx('form-control')} name="username" />
							<label htmlFor="username">User Name</label>
						</div>
						<div className={cx('form-group')}>
							<input id="email" type="email" className={cx('form-control')} name="email" />
							<label htmlFor="email">Email</label>
						</div>
						<div className={cx('form-group')}>
							<input id="pass" type="password" class="form-control" name="password" />
							<label htmlFor="pass">Password</label>
						</div>
						<div className={cx('form-group')}>
							<input id="confirm" type="password" class="form-control" name="password" />
							<label htmlFor="confirm">Confirm Password</label>
						</div>
						<div className={cx('form-btn')}>
							<button type="submit" className={cx('submit-btn')}>
								Create Account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Register
