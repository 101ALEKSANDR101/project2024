import { useTheme } from "app/providers/themeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppButton, AppButtonTheme } from "shared/ui/appButton";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';


type ThemeSwitcherProps = {
	className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const {
		className
	} = props;

	const { theme, toggleTheme } = useTheme();

	return (
		<AppButton className={classNames(cls.themeSwitcher, {}, [className])}
			theme={AppButtonTheme.CLEAR}
			onClick={toggleTheme}>
			{theme === 'light' ? <LightIcon /> : <DarkIcon />}
		</AppButton>
	)
}