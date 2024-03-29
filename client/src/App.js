import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ProtectedRoute from './routes/ProtectedRoute'
import { customerRoutes } from './routes/routes'

function App() {

	const settingToast = {
		position: 'top-center',
		autoClose: 3000,
		pauseOnHover: false,
		style: {
			fontSize: '16px',
			fontWeight: '400',
			lineHight: '24px',
			width: '450px',
		},
	}

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<BrowserRouter>
			<ToastContainer {...settingToast} />
			<div className="App">
				<Routes>
					{/* ================ ROUTES CUSTOMMER ===================== */}
					{customerRoutes.map((routes, index) => {
						let Page = routes.components ?? Fragment
						let Layout = routes.layout ?? Fragment
						return (
							<Route
								key={routes.key}
								path={routes.path}
								element={
									<Layout>
										{routes.protected ? (
											<ProtectedRoute>
												<Page />
											</ProtectedRoute>
										) : (
											<Page />
										)}
									</Layout>
								}
							/>
						)
					})}
				</Routes>
			</div>
			<ScrollToTop />
		</BrowserRouter>
	)
}

export default App
