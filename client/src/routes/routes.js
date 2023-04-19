import { configRoutes } from '~/config/configRoutes'

// =========================== ROUTES CUSTOMER ================================== //
import DefaultLayout from '~/layouts/DefaultLayout'
import Home from '~/screen/Home/Home'
import Login from '~/screen/Login/Login'
import Register from '~/screen/Register/Register'
import Contact from '~/screen/Contact/Contact'
import Blog from '~/screen/Blog/Blog'
import AboutUs from '~/screen/AboutUs/AboutUs'
import Product from '~/screen/Product/Product'
import ProductDetail from '~/screen/ProductDetail/ProductDetail'
import WishList from '~/screen/WishList/WishList'
import Cart from '~/screen/Cart/Cart'
import MyAccount from '~/screen/MyAccount/MyAccount'
import NotFound from '~/screen/NotFound/NotFound'

const customerRoutes = [
	{ key: "login", path: configRoutes.login, components: Login },
	{ key: "register", path: configRoutes.register, components: Register },
	{ key: "home", path: configRoutes.home, components: Home, layout: DefaultLayout },
	{ key: "products", path: configRoutes.products, components: Product, layout: DefaultLayout },
	{ key: "productDetail", path: configRoutes.productDetail, components: ProductDetail, layout: DefaultLayout },
	{ key: "contact", path: configRoutes.contact, components: Contact, layout: DefaultLayout },
	{ key: "blog", path: configRoutes.blog, components: Blog, layout: DefaultLayout },
	{ key: "about", path: configRoutes.about, components: AboutUs, layout: DefaultLayout },
	{ key: "wishlist", path: configRoutes.wishlist, components: WishList, layout: DefaultLayout },
	{ key: "cart", path: configRoutes.cart, components: Cart, layout: DefaultLayout },
	{ key: "notFound", path: configRoutes.notFound, components: NotFound, layout: DefaultLayout },
	{ key: "account", path: configRoutes.account, components: MyAccount, layout: DefaultLayout, protected: true },
]

export { customerRoutes }
