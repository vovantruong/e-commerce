import React, { useLayoutEffect, useContext, useState, useEffect, lazy } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { useLocation } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const InfoProduct = lazy(() => import('./InfoProduct/InfoProduct'))
const Thumbnail = lazy(() => import('./Thumbnail/Thumbnail'))
const Breadcrumb = lazy(() => import('~/components/Breadcrumb/Breadcrumb'))


const cx = classNames.bind(styles)

const ProductDetail = () => {
	const isBreakPoint = useContext(MediaQueryContext)
	const { pathname } = useLocation();
	const keyParam = pathname.split('/').filter(Boolean)
	const cateProduct = keyParam[0];
	const slugProduct = keyParam[1];

	useEffect(() => {
		const newStr = slugProduct.split("-").join(" ")
		document.title = `${newStr.charAt(0).toUpperCase() + newStr.slice(1)} - Tshop | Online Solution`
	}, [pathname])


	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={cx('detail-area')}>
			<div className="container">
				<Breadcrumb category='Tablet' manufactory="Apple" product="Ipad" />
				<div className={cx("heads")}>
					<h2 className={cx("product-title")}>Ipad Pro M1 2022</h2>
					<div className={cx('st-rating')}>
						<span className={cx('rating-icon')}>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</span>
						<span className={cx('rating-number')}>(100) Rating </span>
					</div>
				</div>
				<div className={cx('details')}>
					<div className={cx('col', isBreakPoint.mobile ? '' : 'sticky-top')}>
						<Thumbnail />
					</div>
					<div className={cx('col')}>
						<InfoProduct />
					</div>
				</div>

			</div>
		</div>
	)
}
export default ProductDetail
