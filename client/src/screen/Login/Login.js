import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Logo from '../../assets/logo-text.png'
import { Link } from 'react-router-dom'
import { MediaQueryContext } from '~/context/MediaQueryContext'

const cx = classNames.bind(styles)

const Login = () => {
	const isBreakPoint = useContext(MediaQueryContext)

	return (
		<div className={cx('login')}>
			<div className={cx('wrapper')}>
				{!isBreakPoint.mobile && (
					<div className={cx('wrapper__intro')}>
						<Link to="/">
							<img src={Logo} className={cx('logo-img')} alt="..." />
						</Link>
						<h3 className={cx('desc-title')}>We Offer the Best Products</h3>
					</div>
				)}

				{isBreakPoint.mobile && (
					<div className={cx('logo-img-mb')}>
						<Link to="/">
							<img src={Logo} className={cx('logo-img')} alt="..." />
						</Link>
					</div>
				)}
				<div className={cx('wrapper__login')}>
					<div className={cx('next-signup')}>
						<span>Not a member?</span>
						<Link to="/register" className={cx('link')}>
							Sign Up Now
						</Link>
					</div>
					<form className={cx('signin-form')} autoComplete="off">
						<h3 className={cx('form-title')}>Sign in to Tshop</h3>
						<p className={cx('form-desc-title')}>Enter your detail below</p>
						<div className={cx('form-group')}>
							<input id="email" type="email" className={cx('form-control')} name="email" />
							<label htmlFor="email">Email</label>
						</div>
						<div className={cx('form-group')}>
							<input id="pass" type="password" class="form-control" name="password" />
							<label htmlFor="pass">Password</label>
						</div>
						<div className={cx('form-btn')}>
							<button type="submit" className={cx('submit-btn')}>
								Sign In
							</button>
							<Link className={cx('forgot-btn')}>Forgot password?</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Login
