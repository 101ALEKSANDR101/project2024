import { classNames } from "shared/lib/classNames/classNames";
import { AppButton, AppButtonTheme } from "shared/ui/appButton";
import cls from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";


type LangSwitcherProps = {
	className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const {
		className
	} = props;

	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return (
		<AppButton theme={AppButtonTheme.CLEAR} onClick={toggleLang}
			className={classNames(cls.langSwitcher, {}, [className])}>
				{t('Язык')}
		</AppButton>
	)
}