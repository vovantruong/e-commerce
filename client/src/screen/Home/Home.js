import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Banner from './Banner/Banner'
import FLashDeals from './FLashDeals/FLashDeals'
import BestSellers from './BestSellers/BestSellers'
import AboutUs from './AboutUs/AboutUs'
import NewFeature from './NewFeature/NewFeature'
import Categories from './Categories/Categories'
import Countdown from './Countdown/Countdown'
import Poster from './Poster/Poster'
import Newletter from './Newletter/Newletter'
import ExploreProduct from './ExploreProduct/ExploreProduct'
import Feedback from './Feedback/Feedback'
import WhyChose from './WhyChose/WhyChose'

const cx = classNames.bind(styles)

const Home = () => {

	const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
	const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000
	const NOW_IN_MS = new Date().getTime()

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS
	const dateTimeAfterOneDays = NOW_IN_MS + ONE_DAYS_IN_MS

	return (
		<main className={cx('home-page')}>
			<Banner />
			<Categories />
			<Countdown targetDate={dateTimeAfterThreeDays}/>
			<FLashDeals targetDate={dateTimeAfterOneDays}/>
			<AboutUs />
			<NewFeature />
			<BestSellers />
			<ExploreProduct />
			<WhyChose />
			<Feedback />
			<Poster />
			<Newletter />
		</main>
	)
}
export default Home
