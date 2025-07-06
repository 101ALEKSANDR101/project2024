import { createContext } from "react";


export enum Theme {
	LIGHT = 'app_theme_light',
	DARK = 'app_theme_dark',
}

export type ThemeContextPropse = {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPropse>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';