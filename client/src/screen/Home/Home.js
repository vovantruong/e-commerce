import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Banner from './Banner/Banner'
import FLashDeals from './FLashDeals/FLashDeals'
import BestSellers from './BestSellers/BestSellers'
import AboutUs from '../AboutUs/AboutUs'
import NewFeature from './NewFeature/NewFeature'
import Categories from './Categories/Categories'

const cx = classNames.bind(styles)

const Home = () => {
	function renderPosterCountdown() {
		return <div className={cx('poster-countdown')}>Poster Countdown</div>
	}

	return (
		<main className={cx('home-page')}>
			<div className="container">
				<Banner />
				<Categories />
				<BestSellers />
				<FLashDeals />
				<AboutUs />
				<NewFeature />
				{renderPosterCountdown()}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut venenatis tellus in metus. Sit amet consectetur adipiscing elit pellentesque.
				Platea dictumst quisque sagittis purus sit. Quam pellentesque nec nam aliquam sem et. Integer enim neque
				volutpat ac tincidunt vitae semper. Elementum nibh tellus molestie nunc non blandit massa enim. Nec
				ullamcorper sit amet risus nullam. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper
				velit sed ullamcorper morbi tincidunt. Blandit cursus risus at ultrices. Elementum integer enim neque
				volutpat ac tincidunt. Mattis pellentesque id nibh tortor id. Amet purus gravida quis blandit turpis
				cursus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In hendrerit gravida
				rutrum quisque non tellus. Proin libero nunc consequat interdum varius sit amet mattis. Iaculis nunc sed
				augue lacus viverra vitae. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium
				vulputate. Eget arcu dictum varius duis at. At auctor urna nunc id cursus metus aliquam. Eget mauris
				pharetra et ultrices. Ultrices dui sapien eget mi proin sed libero. Neque vitae tempus quam pellentesque
				nec nam aliquam. Amet risus nullam eget felis. Sapien eget mi proin sed. Sagittis id consectetur purus
				ut faucibus. At in tellus integer feugiat. Nec sagittis aliquam malesuada bibendum arcu vitae. Interdum
				consectetur libero id faucibus nisl. Massa massa ultricies mi quis hendrerit dolor. Sed egestas egestas
				fringilla phasellus faucibus. Dictum fusce ut placerat orci. Sem nulla pharetra diam sit amet nisl
				suscipit adipiscing. Augue lacus viverra vitae congue. Enim neque volutpat ac tincidunt vitae semper.
				Nullam non nisi est sit amet facilisis magna etiam tempor. At urna condimentum mattis pellentesque id
				nibh. Sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante.
				Libero enim sed faucibus turpis. Bibendum arcu vitae elementum curabitur. Nibh tellus molestie nunc non
				blandit massa enim. Orci dapibus ultrices in iaculis nunc. Morbi tristique senectus et netus. Massa
				tincidunt nunc pulvinar sapien et ligula ullamcorper. Porttitor rhoncus dolor purus non enim praesent
				elementum facilisis leo. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Fringilla ut
				morbi tincidunt augue interdum velit euismod. Condimentum id venenatis a condimentum vitae. Tincidunt
				praesent semper feugiat nibh sed. Sodales ut eu sem integer vitae justo eget magna. Ultrices in iaculis
				nunc sed augue lacus viverra vitae congue. Ultrices tincidunt arcu non sodales neque sodales ut. Pretium
				lectus quam id leo in vitae turpis massa sed. Aliquam sem et tortor consequat id porta nibh. Risus
				nullam eget felis eget nunc lobortis mattis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam.
				Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Massa sapien faucibus
				et molestie ac feugiat sed lectus. Posuere ac ut consequat semper viverra nam libero. Rhoncus mattis
				rhoncus urna neque viverra justo nec ultrices dui. Ut diam quam nulla porttitor massa id neque. Luctus
				venenatis lectus magna fringilla. Elementum eu facilisis sed odio morbi quis. Quam nulla porttitor massa
				id neque aliquam vestibulum. Donec massa sapien faucibus et molestie ac. Pulvinar elementum integer enim
				neque volutpat ac. Et pharetra pharetra massa massa. Proin fermentum leo vel orci porta. Egestas diam in
				arcu cursus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Sit amet consectetur
				adipiscing elit ut aliquam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
				Mauris augue neque gravida in. Enim nulla aliquet porttitor lacus luctus. Mauris pharetra et ultrices
				neque. Enim ut tellus elementum sagittis vitae et leo duis. Venenatis a condimentum vitae sapien. Ac
				orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Id velit ut tortor pretium
				viverra suspendisse. Quisque egestas diam in arcu cursus euismod quis. Quis varius quam quisque id diam
				vel. Ut consequat semper viverra nam libero. In cursus turpis massa tincidunt dui ut ornare lectus. Elit
				ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Id leo in vitae turpis. Quam
				quisque id diam vel. Faucibus nisl tincidunt eget nullam non nisi est sit. Cras ornare arcu dui vivamus
				arcu felis bibendum ut tristique. Eu facilisis sed odio morbi quis. Eget nunc scelerisque viverra mauris
				in aliquam sem. Integer quis auctor elit sed. Magna sit amet purus gravida quis. Tincidunt tortor
				aliquam nulla facilisi cras fermentum odio eu. Ut aliquam purus sit amet luctus venenatis. Nisl purus in
				mollis nunc sed id semper. Justo eget magna fermentum iaculis eu. Tellus mauris a diam maecenas sed enim
				ut sem. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Etiam non quam lacus
				suspendisse. Ac tincidunt vitae semper quis lectus. Leo vel orci porta non pulvinar neque. Nulla
				porttitor massa id neque aliquam vestibulum morbi. Sit amet mauris commodo quis imperdiet massa
				tincidunt. Amet purus gravida quis blandit turpis cursus. Elit pellentesque habitant morbi tristique.
				Sem et tortor consequat id porta. Elementum integer enim neque volutpat. Magna sit amet purus gravida
				quis. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Feugiat nisl
				pretium fusce id velit ut tortor pretium. Pellentesque sit amet porttitor eget dolor morbi non arcu.
				Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Magna ac placerat vestibulum lectus
				mauris. Eu ultrices vitae auctor eu augue. Aliquam etiam erat velit scelerisque. Et magnis dis
				parturient montes. Gravida in fermentum et sollicitudin. Quam id leo in vitae. Viverra justo nec
				ultrices dui sapien eget mi. Dui vivamus arcu felis bibendum. Tincidunt eget nullam non nisi. Pulvinar
				sapien et ligula ullamcorper malesuada proin libero nunc consequat. Bibendum enim facilisis gravida
				neque. Odio euismod lacinia at quis. Sed arcu non odio euismod. Eu augue ut lectus arcu bibendum at
				varius vel. Venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo
				laoreet. Sed vulputate mi sit amet. Posuere ac ut consequat semper viverra nam libero justo laoreet.
				Tristique senectus et netus et malesuada. Morbi leo urna molestie at elementum eu facilisis sed. Ipsum
				faucibus vitae aliquet nec ullamcorper. Non diam phasellus vestibulum lorem sed. Eget nunc lobortis
				mattis aliquam faucibus purus in massa. Vitae tortor condimentum lacinia quis vel eros. Consequat
				interdum varius sit amet mattis vulputate enim nulla aliquet. Interdum varius sit amet mattis vulputate.
				Et ligula ullamcorper malesuada proin libero. Facilisis mauris sit amet massa. Elit ut aliquam purus
				sit. Auctor elit sed vulputate mi sit amet mauris commodo. Nibh sed pulvinar proin gravida hendrerit
				lectus a. Diam vulputate ut pharetra sit amet aliquam. In iaculis nunc sed augue lacus viverra.
				Pellentesque elit ullamcorper dignissim cras tincidunt. Maecenas accumsan lacus vel facilisis. A diam
				sollicitudin tempor id eu nisl nunc mi. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Quis
				auctor elit sed vulputate mi. Velit ut tortor pretium viverra suspendisse potenti nullam. Laoreet non
				curabitur gravida arcu ac tortor. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
			</div>
		</main>
	)
}
export default Home
