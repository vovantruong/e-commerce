import React, { useLayoutEffect, useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import InfoProduct from './InfoProduct/InfoProduct'
import Thumbnail from './Thumbnail/Thumbnail'


const cx = classNames.bind(styles)

const ProductDetail = () => {

	const isBreakPoint = useContext(MediaQueryContext)

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={cx('detail-area')}>
			<div className="container">
				<div className={cx("heads")}>
					<h2 className={cx("product-title")}>Ella Everyday Tote</h2>
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
