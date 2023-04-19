import React, { lazy, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { useLocation } from 'react-router-dom'

const Banner = lazy(() => import('../../components/Banner/Banner'))
const BestSellers = lazy(() => import('./BestSellers/BestSellers'))
const NewFeature = lazy(() => import('./NewFeature/NewFeature'))
const Categories = lazy(() => import('./Categories/Categories'))
const Countdown = lazy(() => import('./Countdown/Countdown'))
const FLashDeals = lazy(() => import('./FLashDeals/FLashDeals'))
const Poster = lazy(() => import('./Poster/Poster'))
const Newletter = lazy(() => import('./Newletter/Newletter'))
const ExploreProduct = lazy(() => import('./ExploreProduct/ExploreProduct'))
const Feedback = lazy(() => import('./Feedback/Feedback'))
const WhyChose = lazy(() => import('./WhyChose/WhyChose'))

const cx = classNames.bind(styles)

const Home = () => {

	const { pathname } = useLocation()
	useEffect(() => {
		document.title = 'Tshop | Online Solution'
	}, [pathname])

	const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
	const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000
	const NOW_IN_MS = new Date().getTime()

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS
	const dateTimeAfterOneDays = NOW_IN_MS + ONE_DAYS_IN_MS

	return (
		<div className={cx('home-page')}>
			<Banner />
			<Categories />
			<Countdown targetDate={dateTimeAfterThreeDays} />
			<BestSellers />
			<FLashDeals targetDate={dateTimeAfterOneDays} />
			<WhyChose />
			<NewFeature />
			<Feedback />
			<ExploreProduct />
			<Poster />
			<Newletter />
		</div>
	)
}
export default Home
