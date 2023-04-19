import React from 'react'
import classNames from 'classnames/bind'
import styles from './Breadcrumb.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Breadcrumb = ({ category, manufactory, product, redirect }) => {
    return (
        <div className='container'>
            <ul className={cx('breadcrumb')}>
                <li className={cx('breadcrumb-item')}>
                    <Link to="/" >Home</Link>
                </li>
                {
                    category && (
                        <li className={cx('breadcrumb-item')}>
                            <Link to={redirect ? `/products?tag=${category.toLowerCase()}` : ''}>{category}</Link>
                        </li>
                    )
                }
                {
                    manufactory && (
                        <li className={cx('breadcrumb-item')}>
                            <Link to={redirect ? `/products?tag=${manufactory.toLowerCase()}` : ''}>{manufactory}</Link>
                        </li>
                    )
                }
                {
                    product && (
                        <li className={cx('breadcrumb-item')}>
                            <Link to={redirect ? `/products?tag=${product.toLowerCase()}` : ''}>{product}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Breadcrumb