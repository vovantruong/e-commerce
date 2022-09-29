import React from 'react'
import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'
import { Outlet } from 'react-router-dom'

const cx = classNames.bind(styles)

const Dashboard = () => {
  return(
    <div className={cx('')}>
        Dashboard
        <Outlet />
    </div>
  )
}
export default Dashboard