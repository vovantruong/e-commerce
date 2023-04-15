import React from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import { useLocation } from 'react-router-dom'


const cx = classNames.bind(styles)

const Product = () => {
  const { search } = useLocation()
  const tagProduct = new URLSearchParams(search).get('tag')

  return (
    <div className={cx('')}>
      Product - {tagProduct}
    </div>
  )
}
export default Product