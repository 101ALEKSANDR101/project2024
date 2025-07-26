import { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/themeContext";

interface ThemeProviderProps {
	children?: ReactNode;
	initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
document.body.className = defaultTheme;

export const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
	const {
		children,
		initialTheme
	} = props;

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

	const defaultProps = useMemo(() => (
		{
			theme: theme,
			setTheme: setTheme
		}
	), [theme])


	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}