import { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const MediaQueryContext = createContext()

function MediaQueryProvider({ children }) {
	const isDesktop = useMediaQuery({ query: `(max-width: 1179px)` })
	const isTablet = useMediaQuery({ query: `(min-width: 740px) and (max-width: 1023px)` })
	const isMobile = useMediaQuery({ query: `(max-width: 739px)` })

	const breakpoint = {
		isDesktop,
		isTablet,
		isMobile
	}

	return <MediaQueryContext.Provider value={breakpoint}>{children}</MediaQueryContext.Provider>
}

export { MediaQueryContext, MediaQueryProvider }
