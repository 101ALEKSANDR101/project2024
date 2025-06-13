import { AboutPageLazy } from "pages/aboutPage"
import { MainPageLazy } from "pages/mainPage"
import { NotFoundPage } from "pages/notFoundPage"
import { RouteProps } from "react-router-dom"


export enum RouterPaths {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export const pathsConfig: Record<RouterPaths, string> = {
	[RouterPaths.MAIN]: '/',
	[RouterPaths.ABOUT]: '/about',


	[RouterPaths.NOT_FOUND]: '*'
}

export const routerConfig: Record<RouterPaths, RouteProps> = {
	[RouterPaths.MAIN]: {
		path: pathsConfig.main,
		element: <MainPageLazy />
	},
	[RouterPaths.ABOUT]: {
		path: pathsConfig.about,
		element: <AboutPageLazy />
	},
	[RouterPaths.NOT_FOUND]: {
		path: pathsConfig.not_found,
		element: <NotFoundPage />
	}
}