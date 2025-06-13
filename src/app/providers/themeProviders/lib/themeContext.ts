import { createContext } from "react";


export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export type ThemeContextPropse = {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPropse>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';