import React from 'react'
import classNames from 'classnames/bind'
import styles from './InfoProduct.module.scss'

const cx = classNames.bind(styles)

const InforProduct = () => {
    return (
        <div className={cx('content')}>
            <h3 className={cx("product-variant")}>
                <span className={cx('current-price')}>$1000</span>
                <span className={cx('old-price')}>$1500</span>
            </h3>
        </div>
    )
}
export default InforProduct