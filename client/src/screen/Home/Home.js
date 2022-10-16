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
	return (
		<main className={cx('home-page')}>
			<Banner />
			<Categories />
			<Countdown />
			<FLashDeals />
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
