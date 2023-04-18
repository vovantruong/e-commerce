import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Submenu.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Submenu = ({ className, children, visible, setVisible }) => {
    return (
        <ul className={cx('submenu', visible && 'active')}>
            {
                children?.map((item, key) => (
                    <li key={key} className={cx('sub-item')}>
                        <Link to={`/products?categories=${item.slug}`}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}
export default Submenu