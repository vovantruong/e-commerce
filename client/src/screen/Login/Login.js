import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Logo from '../../assets/logo-text.png'
import { Link } from 'react-router-dom'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

const cx = classNames.bind(styles)

const Login = () => {
	const isBreakPoint = useContext(MediaQueryContext)

	const schemaRegister = yup
		.object({
			email: yup.string().required('The email is required'),
			password: yup.string().required('The password is required'),
		})
		.required()

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(schemaRegister),
	})

	const handleLogin = (data) => {
		console.log(data)
	}

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
					<form className={cx('form-submit')} autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
						<h3 className={cx('form-title')}>Sign in to Tshop</h3>
						<p className={cx('form-desc-title')}>Enter your detail below</p>
						<div className={cx('form-group',{ 'valid-error-check': errors.email })}>
							<input id="email" className={cx('form-control')} {...register("email")} autoFocus />
							<label htmlFor="email">Email</label>
							{errors.email && <span className={cx('valid-error-message')}>{errors.email.message}</span>}
						</div>
						<div className={cx('form-group',{ 'valid-error-check': errors.password })}>
							<input id="pass" type="password" className={cx('form-control')} {...register("password")} />
							<label htmlFor="pass">Password</label>
							{errors.password && <span className={cx('valid-error-message')}>{errors.password.message}</span>}
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
