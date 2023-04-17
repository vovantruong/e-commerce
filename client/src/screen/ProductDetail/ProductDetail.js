import React, { useLayoutEffect, useContext, useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import InfoProduct from './InfoProduct/InfoProduct'
import Thumbnail from './Thumbnail/Thumbnail'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb'
import { FaStar } from 'react-icons/fa'


const cx = classNames.bind(styles)

const ProductDetail = () => {
	const isBreakPoint = useContext(MediaQueryContext)
	const { pathname } = useLocation();
	const keyParam = pathname.split('/').filter(Boolean)
	const cateProduct = keyParam[0];
	const idProduct = keyParam[1];

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
