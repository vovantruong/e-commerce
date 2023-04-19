import React, { lazy, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import { useLocation } from 'react-router-dom'

const Banner = lazy(() => import('~/components/Banner/Banner'))
const Breadcrumb = lazy(() => import('~/components/Breadcrumb/Breadcrumb'))


const cx = classNames.bind(styles)

const Product = () => {
    const { search, pathname } = useLocation()
    const tagProduct = new URLSearchParams(search).get('tag')
    const cateProduct = new URLSearchParams(search).get('categories')

    useEffect(() => {
        const siteCate = cateProduct?.charAt(0).toUpperCase() + cateProduct?.slice(1);
        const siteTag = tagProduct?.charAt(0).toUpperCase() + tagProduct?.slice(1);

        document.title = `${siteTag || siteCate} - Tshop | Online Solution`
    }, [search, pathname])

    return (
        <div className={cx('')}>
            <Breadcrumb category="All product" redirect={false} />
            <Banner />
            Product - {tagProduct || cateProduct || 'All Products'}
        </div>
    )
}
export default Product