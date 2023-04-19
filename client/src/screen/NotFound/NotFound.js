import React from 'react'
import classNames from 'classnames/bind'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const NotFound = () => {

    return (
        <div className={cx('not-found')}>
            <div className={cx("face")}>
                <div className={cx("band")}>
                    <div className={cx("red")}></div>
                    <div className={cx("white")}></div>
                    <div className={cx("blue")}></div>
                </div>
                <div className={cx("eyes")}></div>
                <div className={cx("dimples")}></div>
                <div className={cx("mouth")}></div>
            </div>
            <h1 className={cx('text')}>Oops! Something went wrong!</h1>
            <Link to="/" className={cx("btn")}>Back to Home</Link>
        </div>
    )
}
export default NotFound