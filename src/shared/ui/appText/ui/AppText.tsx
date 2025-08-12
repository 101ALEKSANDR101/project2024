import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppText.module.scss';


export enum AppTextTheme {
	NORMAL = 'normal',
	ERROR = 'error',
}

type AppTextProps = {
	className?: string;
	title?: string;
	text?: string;
	error?: boolean;
	theme?: AppTextTheme;
}

export const AppText = (props: AppTextProps) => {
	const {
		className,
		title,
		text,
		theme,
	} = props;

	const mods: Record<string, boolean> = {
		
	}

	return (
		<div className={classNames(cls.appText, mods, [className, cls[theme]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}