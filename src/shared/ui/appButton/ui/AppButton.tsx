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
	CLEAR_INVERTED = 'clear-inverted',
	SQUARE = 'square',
	OUTLINE = 'outline',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	size?: AppButtonSize;
	disabled?: boolean;
}

export const AppButton = (props: AppButtonProps) => {
	const {
		className,
		children,
		theme,
		size,
		disabled,
		...others
	} = props;

	const mods: Record<string, boolean> = {
		[cls.disabled]: disabled,
	}

	return (
		<button data-testid='appButton' className={classNames(cls.appButton, mods,
			[className, cls[theme], cls[size]])} {...others}>
			{children}
		</button>
	)
}