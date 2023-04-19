import React from 'react'
import classNames from 'classnames/bind'
import styles from './CardProduct.module.scss'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { ImEye } from 'react-icons/im'

const cx = classNames.bind(styles)

const CardProduct = ({ data, type = 1 }) => {

    // Render card type 1
    function renderCardType1() {
        return (
            <div className={cx('pd-card', 'type__1')}>
                <button className={cx('btn-add-cart')}>
                    <BsCart2 />
                </button>
                <Link to={`/${data.product_category}/${data.product_slug}`} className={cx('card-content')}>
                    <div className={cx('card-info')}>
                        <div className={cx('pd-title')}>
                            {data.product_name}
                        </div>
                        <div className={cx('pd-price')}>
                            <span className={cx('current')}>${data.product_price}</span>
                            {data.product_old_price && data.product_old_price !== '0' && (
                                <span className={cx('price', 'old')}>
                                    ${data.product_old_price}
                                </span>
                            )}
                        </div>
                        <div className={cx('pd-rating')}>
                            <span className={cx('rating-icon')}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <span className={cx('rating-number')}>{`(${data.product_reviews})`}</span>
                        </div>
                    </div>
                    <div className={cx('pd-thumbnail')}>
                        <img src={data.product_img} alt="..." />
                    </div>
                </Link>
            </div>
        )
    }

    // Render card type 2
    function renderCardType2() {
        return <div className={cx('pd-card', 'type__2')}>
            <div className={cx('pd-thumbnail')}>
                <Link to={`/${data.product_category}/${data.product_slug}`} className={cx('thumbnail-img')}>
                    <img src={data.product_img} alt="..." />
                </Link>
                {data.product_sale_off && data.product_sale_off !== '0' && (
                    <div className={cx('thumbnail-badget')}>{data.product_sale_off}% OFF</div>
                )}
                <div className={cx('hover-action')}>
                    <ul className={cx('card-action')}>
                        <li className={cx('wishlist')}>
                            <Link to="#">
                                <FiHeart />
                            </Link>
                        </li>
                        <li className={cx('add-to-cart')}>
                            <button>Add to cart</button>
                        </li>
                        <li className={cx('quick-view')}>
                            <Link to="#">
                                <ImEye />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('card-content')}>
                <h4 className={cx('pd-title')}>
                    <Link to={`/${data.product_category}/${data.product_slug}`}>{data.product_name}</Link>
                </h4>
                <div className={cx('pd-price')}>
                    <span className={cx('current')}>${data.product_price}</span>
                    {data.product_old_price && data.product_old_price !== '0' && (
                        <span className={cx('price', 'old')}>
                            ${data.product_old_price}
                        </span>
                    )}
                </div>
            </div>
        </div>
    }

    // Render card type 2
    function renderCardType3() {
        return <div className={cx('pd-card', 'type__3')}>
            <div className={cx('thumbnail')}>
                <Link to={`/${data.product_category}/${data.product_slug}`} className={cx('thumbnail-img')}>
                    <img src={data.product_img} alt="..." />
                </Link>
                {data.product_sale_off && data.product_sale_off !== '0' && (
                    <div className={cx('thumbnail-badget')}>
                        {data.product_sale_off}% OFF
                    </div>
                )}
            </div>
            <div className={cx('card-content')}>
                <h4 className={cx('pd-title')}>
                    <Link to={`/${data.product_category}/${data.product_slug}`}>{data.product_name}</Link>
                </h4>
                <div className={cx('pd-price')}>
                    <span className={cx('current')}>${data.product_price}</span>
                    {data.product_old_price && data.product_old_price !== '0' && (
                        <span className={cx('old')}>${data.product_old_price}</span>
                    )}
                </div>

                <ul className={cx('card-action')}>
                    <li className={cx('wishlist')}>
                        <Link to="#">
                            <FiHeart />
                        </Link>
                    </li>
                    <li className={cx('add-to-cart')}>
                        <button>Add to cart</button>
                    </li>
                    <li className={cx('quick-view')}>
                        <Link to="">
                            <ImEye />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }

    function renderCardType4() {
        return <div>4</div>
    }

    function renderCardTypeNull() {
        console.log("Can't find type product. Please check type in code.");
    }

    function renderCard() {
        switch (type) {
            case 1:
                return renderCardType1();
            case 2:
                return renderCardType2();
            case 3:
                return renderCardType3();
            case 4:
                return renderCardType4();
            default:
                return renderCardTypeNull()
        }
    }

    return (
        renderCard()
    )
}
export default CardProduct