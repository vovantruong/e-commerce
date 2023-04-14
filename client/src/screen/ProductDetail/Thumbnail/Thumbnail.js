import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Thumbnail.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const cx = classNames.bind(styles)

const Thumbnail = ({ }) => {
    const [activeThumb, setActiveThumb] = useState()
    const swiperRef = useRef()

    return (
        <React.Fragment>
            <Swiper
                ref={swiperRef}
                loop={true}
                spaceBetween={10}
                modules={[Thumbs]}
                grabCursor={true}
                thumbs={{
                    swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
                    slideThumbActiveClass: cx('active-thumbs'),
                }}
                className={cx('slides-thumbs')}
            >
                <SwiperSlide className={cx('wrap-image')}>
                    <img
                        src={require('../../../assets/product/ipad-4-cellular-white-4g.png')}
                        alt="product images"
                    />
                </SwiperSlide>
                <SwiperSlide className={cx('wrap-image')}>
                    <img
                        src={require('../../../assets/product/ipad-air-5-wifi-blue-thumb.png')}
                        alt="product images"
                    />
                </SwiperSlide>
                <div className={cx('wrap-navigate')}>
                    <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <BsChevronLeft />
                    </button>
                    <button onClick={() => swiperRef.current.swiper.slideNext()}>
                        <BsChevronRight />
                    </button>
                </div>
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className={cx('slides-gallery')}
            >
                <SwiperSlide className={cx('wrap-image')}>
                    <div className={cx('gallery-item')}>
                        <img
                            src={require('../../../assets/product/ipad-4-cellular-white-4g.png')}
                            alt="product images"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cx('wrap-image')}>
                    <div className={cx('gallery-item')}>
                        <img
                            src={require('../../../assets/product/ipad-air-5-wifi-blue-thumb.png')}
                            alt="product images"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}
export default Thumbnail