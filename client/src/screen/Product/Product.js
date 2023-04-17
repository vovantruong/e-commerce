import React from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import { useLocation } from 'react-router-dom'


const cx = classNames.bind(styles)

const Product = () => {
  const { search } = useLocation()
  const tagProduct = new URLSearchParams(search).get('tag')
  const cateProduct = new URLSearchParams(search).get('categories')

  return (
    <div className={cx('')}>
      Product - {tagProduct ?? cateProduct}
    </div>
  )
}
export default Product