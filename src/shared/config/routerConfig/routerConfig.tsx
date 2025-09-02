import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { NotFoundPage } from "pages/notFoundPage";
import { ProfilePage } from "pages/profilePage";
import { RouteProps } from "react-router-dom";


export enum RouterPaths {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',

	NOT_FOUND = 'not_found'
}

export const pathsConfig: Record<RouterPaths, string> = {
	[RouterPaths.MAIN]: '/',
	[RouterPaths.ABOUT]: '/about',
	[RouterPaths.PROFILE]: '/profile',

	[RouterPaths.NOT_FOUND]: '*'
}

export const routerConfig: Record<RouterPaths, RouteProps> = {
	[RouterPaths.MAIN]: {
		path: pathsConfig.main,
		element: <MainPage />
	},
	[RouterPaths.ABOUT]: {
		path: pathsConfig.about,
		element: <AboutPage />
	},
	[RouterPaths.PROFILE]: {
		path: pathsConfig.profile,
		element: <ProfilePage />
	},

	[RouterPaths.NOT_FOUND]: {
		path: pathsConfig.not_found,
		element: <NotFoundPage />
	}
}