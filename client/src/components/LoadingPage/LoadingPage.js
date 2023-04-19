import React from 'react'
import classNames from 'classnames/bind'
import styles from './LoadingPage.module.scss'
import { TbLoader3 } from 'react-icons/tb'

const cx = classNames.bind(styles)

const LoadingPage = () => {
    return (
        <div className={cx('loading')}>
            <div className={cx("wrapper")}>
                <div className={cx("loader")}>
                    <TbLoader3 />
                </div>
                <p className={cx('text')}>Loading ...</p>
            </div>
        </div>
    )
}
export default LoadingPage