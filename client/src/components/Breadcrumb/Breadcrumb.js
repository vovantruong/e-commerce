import React from 'react'
import classNames from 'classnames/bind'
import styles from './Breadcrumb.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Breadcrumb = ({ category, manufactory, product }) => {
    return (
        <ul className={cx('breadcrumb')}>
            <li className={cx('breadcrumb-item')}>
                <Link to="/" >Home</Link>
            </li>
            {
                category && (
                    <li className={cx('breadcrumb-item')}>
                        <Link to={`/products?tag=${category.toLowerCase()}`}>{category}</Link>
                    </li>
                )
            }
            {
                manufactory && (
                    <li className={cx('breadcrumb-item')}>
                        <Link to={`/products?tag=${manufactory.toLowerCase()}`}>{manufactory}</Link>
                    </li>
                )
            }
            {
                product && (
                    <li className={cx('breadcrumb-item')}>
                        <Link to={`/products?tag=${product.toLowerCase()}`}>{product}</Link>
                    </li>
                )
            }
        </ul>
    )
}
export default Breadcrumb