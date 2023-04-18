import React from 'react'
import classNames from 'classnames/bind'
import styles from './CardProduct.module.scss'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const cx = classNames.bind(styles)

const CardProduct = ({ data, type = 1 }) => {

    // Render card type 1
    function renderCardType1() {
        return (
            <div className={cx('pd-card', 'type__1')}>
                <Link to={`/${data.product_category}/${data.product_slug}`} className={cx('btn-add-cart')}>
                    <BsCart2 />
                </Link>
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

    function renderCardType2() {
        return <div>2</div>
    }

    function renderCardType3() {
        return <div>4</div>
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
                break;
            case 2:
                return renderCardType2();
                break;
            case 3:
                return renderCardType3();
                break;
            case 4:
                return renderCardType4();
                break;
            default:
                return renderCardTypeNull()
                break
        }
    }

    return (
        renderCard()
    )
}
export default CardProduct