import { Fragment, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { adminRoutes, customerRoutes } from './routes/routes'

function App() {

	useEffect(() => {
		document.title = "Tshop | Online Solution"
	},[])

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{/* ================ ROUTES CUSTOMMER ===================== */}
					{customerRoutes.map((routes, index) => {
						let Page = routes.components ?? Fragment
						let Layout = routes.layout ?? Fragment
						return <Route key={index} path={routes.path} element={<Layout><Page /></Layout>} />
					})}

					{/* ==================== ROUTES ADMIN ===================== */}
					{adminRoutes.map((routes, index) => {
						let Page = routes.components ?? Fragment
						let Layout = routes.layout ?? Fragment
						return <Route key={index} path={routes.path} element={<Layout><Page /></Layout>} />
					})}
				</Routes>
			</div>
			<ScrollToTop />
		</BrowserRouter>
	)
}

export default App
