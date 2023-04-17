import React from 'react'
import classNames from 'classnames/bind'
import styles from './InfoProduct.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const InforProduct = () => {
    return (
        <div className={cx('content')}>
            <div className={cx("wrap-price")}>
                <div className={cx('current-price')}>$1,000</div>
                <div className={cx('old-price')}><strike>$1,500</strike></div>
            </div>
            <div className={cx('wrap-select')}>
                <Link to="?options=128gb">128</Link>
            </div>
        </div>
    )
}
export default InforProduct