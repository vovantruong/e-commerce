import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './NewFeature.module.scss'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsCart } from 'react-icons/bs'
import { dataAllProduct } from '~/constant/dataAllProduct'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { ImEye } from 'react-icons/im'
import CardProduct from '~/components/CardProduct/CardProduct'

const cx = classNames.bind(styles)

const NewFeature = () => {
	const swiperRef = useRef()

	return (
		<div className={cx('feature-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('head-wrap')}>
						<div className={cx('title-box')}>
							<p className={cx('title-hightlighter')}>
								<span>
									<BsCart />
								</span>
								This Week's
							</p>
							<h2 className={cx('title')}>New Arrivals</h2>
						</div>
						<div className={cx('slide-arrow')}>
							<button onClick={() => swiperRef.current.swiper.slidePrev()}>
								<HiOutlineArrowNarrowLeft />
							</button>
							<button onClick={() => swiperRef.current.swiper.slideNext()}>
								<HiOutlineArrowNarrowRight />
							</button>
						</div>
					</div>
					<div className={cx('slide-section')}>
						<Swiper
							ref={swiperRef}
							loop={true}
							spaceBetween={30}
							slidesPerView={4}
							freeMode={true}
							speed={1000}
							breakpoints={{
								0: {
									slidesPerView: 1,
									slidesPerGroup: 1,
								},
								768: {
									slidesPerView: 2,
									slidesPerGroup: 2,
								},
								1024: {
									slidesPerView: 4,
									slidesPerGroup: 1,
								},
							}}
						>
							{
								dataAllProduct.map((item, key) => (
									<SwiperSlide key={key}>
										<CardProduct data={item} type={3} />
									</SwiperSlide>
								))
							}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewFeature
