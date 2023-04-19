import React, { lazy } from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import { useLocation } from 'react-router-dom'

const Banner = lazy(() => import('~/components/Banner/Banner'))
const Breadcrumb = lazy(() => import('~/components/Breadcrumb/Breadcrumb'))


const cx = classNames.bind(styles)

const Product = () => {
    const { search } = useLocation()
    const tagProduct = new URLSearchParams(search).get('tag')
    const cateProduct = new URLSearchParams(search).get('categories')

    return (
        <div className={cx('')}>
            <Breadcrumb category="All product" redirect={false} />
            <Banner />
            Product - {tagProduct ?? cateProduct}
        </div>
    )
}
export default Product