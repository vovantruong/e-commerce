import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './BestSellers.module.scss'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { dataAllProduct } from '~/constant/dataAllProduct'
import Pagination from '~/components/Pagination/Pagination'
import CardProduct from '~/components/CardProduct/CardProduct'

const cx = classNames.bind(styles)

const BestSellers = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [perPage] = useState(8) // Total 

	// --------------------- Pagination page -------------------- //
	const indexOfLastPage = currentPage * perPage
	const indexOfFirstPage = indexOfLastPage - perPage
	const currentDataProducts = dataAllProduct.slice(indexOfFirstPage, indexOfLastPage)

	useEffect(() => {
		setCurrentPage(1)
	}, [dataAllProduct])

	const handleChangePage = (data) => {
		let numberPage = data.selected + 1
		setCurrentPage(numberPage)
	}

	return (
		<div className={cx('best-sellers')}>
			<div className="container">
				<div className={cx('wrap-title')}>
					<div className={cx('title-hightlighter')}>
						<span className={cx('icon')}>
							<RiShoppingBasket2Fill />
						</span>
						<span className={cx('text-area')}>This Month</span>
					</div>
					<h2 className={cx('title')}>Best Sellers</h2>
				</div>
				<div className={cx('wrap-products')}>
					{
						currentDataProducts.map((item, key) => (
							<CardProduct data={item} key={key} type={1} />
						))
					}
				</div>
				<Pagination handlePageClick={handleChangePage} data={dataAllProduct} totalPage={perPage} />
			</div>
		</div>
	)
}
export default BestSellers
