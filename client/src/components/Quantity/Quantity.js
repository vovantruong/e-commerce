import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Quantity.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const cx = classNames.bind(styles)

const Quantity = ({ className, value = 0, handleUp, handleDown }) => {
	const [number, setNumber] = useState(value)

	return (
		<div className={cx('quantity', className)}>
			<span onClick={() => (number > 0 ? setNumber((prev) => prev - 1) : {})}>
				<AiOutlineMinus />
			</span>
			<input
				type="number"
				className={cx('quantity-input')}
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<span onClick={() => setNumber((prev) => prev + 1)}><AiOutlinePlus /></span>
		</div>
	)
}
export default Quantity
