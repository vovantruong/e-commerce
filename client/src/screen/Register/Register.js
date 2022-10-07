import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import Logo from '../../assets/logo-text.png'
import { Link } from 'react-router-dom'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { actionRegisterCustomer } from '~/app/customerRedux/userAction'

const cx = classNames.bind(styles)

const Register = () => {
	const isBreakPoint = useContext(MediaQueryContext)

	const dispatch = useDispatch();

	const schemaRegister = yup
		.object({
			username: yup
				.string()
				.required('The username is required')
				.matches(/^[a-zA-Z0-9 ]+$/, 'The username is only allow letters lowercase and numbers'),
			email: yup.string().required('The email is required').email('The email must be a valid email'),
			phone: yup
				.number('The phone number must be the number')
				.required('The phone number is required')
				.typeError("That doesn't look like a phone number")
				.positive('The phone number cannot start with negative numbers')
				.integer("The phone number can't include a decimal point")
				.min(10000000, 'The phone number cannot be less than 10 numbers'),
			address: yup.string().required('The address is required'),
			password: yup
				.string()
				.required('The password is required')
				.matches(/^[a-zA-Z0-9]+$/, 'Password is only allow letters and numbers')
				.min(6, 'The password must be at least 6 characters'),
			confirm: yup
				.string()
				.required('The confirm password is required')
				.oneOf([yup.ref('password'), null], "Confirm the password don't matching"),
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

	const handleRegister = (data) => {
		if(data){
			dispatch(actionRegisterCustomer(data))
		}
	}

	return (
		<div className={cx('register')}>
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
						<span>Already a member?</span>
						<Link to="/login" className={cx('link')}>
							Sign In
						</Link>
					</div>
					<form className={cx('form-submit')} onSubmit={handleSubmit(handleRegister)}>
						<h3 className={cx('form-title')}>Sign up to Tshop</h3>
						<p className={cx('form-desc-title')}>Enter your detail below</p>
						<div className={cx('form-group', { 'valid-error-check': errors.username })}>
							<input id="username" className={cx('form-control')} {...register('username')} autoFocus/>
							<label htmlFor="username">User Name *</label>
							{errors.username && <span className={cx('valid-error-message')}>{errors.username.message}</span>}
						</div>
						<div className={cx('form-group', { 'valid-error-check': errors.email })}>
							<input id="email" className={cx('form-control')} {...register('email')} />
							<label htmlFor="email">Email *</label>
							{errors.email && <span className={cx('valid-error-message')}>{errors.email.message}</span>}
						</div>
						<div className={cx('form-group', { 'valid-error-check': errors.phone })}>
							<input id="phone" type="number" className={cx('form-control')} {...register('phone')} />
							<label htmlFor="phone">Phone *</label>
							{errors.phone && <span className={cx('valid-error-message')}>{errors.phone.message}</span>}
						</div>
						<div className={cx('form-group', { 'valid-error-check': errors.address })}>
							<input id="address" type="text" className={cx('form-control')} {...register('address')} />
							<label htmlFor="address">Address *</label>
							{errors.address && <span className={cx('valid-error-message')}>{errors.address.message}</span>}
						</div>
						<div className={cx('form-group', { 'valid-error-check': errors.password })}>
							<input id="pass" type="password" className="form-control" {...register('password')} />
							<label htmlFor="pass">Password *</label>
							{errors.password && <span className={cx('valid-error-message')}>{errors.password.message}</span>}
						</div>
						<div className={cx('form-group', { 'valid-error-check': errors.confirm })}>
							<input id="confirm" type="password" className="form-control" {...register('confirm')} />
							<label htmlFor="confirm">Confirm Password *</label>
							{errors.confirm && <span className={cx('valid-error-message')}>{errors.confirm.message}</span>}
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
