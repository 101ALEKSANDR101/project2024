import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppButton.module.scss';


export enum AppButtonSize {
	S = 's',
	M = 'm',
	L = 'l'
}

export enum AppButtonTheme {
	CLEAR = 'clear',
	SQUARE = 'square',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	size?: AppButtonSize;
}

export const AppButton = (props: AppButtonProps) => {
	const {
		className,
		children,
		theme,
		size,
		...others
	} = props;

	return (
		<button className={classNames(cls.appButton, {},
			[className, cls[theme], cls[size]])} {...others}>
			{children}
		</button>
	)
}