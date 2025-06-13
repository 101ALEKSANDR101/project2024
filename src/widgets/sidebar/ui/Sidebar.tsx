import cls from './Sidebar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { pathsConfig } from "shared/config/routerConfig/routerConfig";
import { AppLink } from "shared/ui/appLink";
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { AppButton, AppButtonTheme } from 'shared/ui/appButton';
import { useState } from 'react';
import { AppButtonSize } from 'shared/ui/appButton/ui/AppButton';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import { LangSwitcher } from 'widgets/langSwitcher';
import { useTranslation } from 'react-i18next';


type SidebarProps = {
	className?: string;
}

const Sidebar = (props: SidebarProps) => {
	const {
		className,
	} = props;

	const [collapsed, setCollapsed] = useState(true);
	const { t } = useTranslation();

	const mods: Record<string, boolean> = {
		[cls.collapsed]: collapsed,
	}

	const toggleCollapse = () => {
		setCollapsed(prev => !prev);
	}

	return (
		<div className={classNames(cls.sidebar, mods, [className])}>
			<div className={cls.links}>
				<AppLink to={pathsConfig.main}>
					{<div className={cls.link}>
						<IconMain className={cls.icon} />
						<div className={cls.text}>{t('Главная')}</div>
					</div>}
				</AppLink>
				<AppLink to={pathsConfig.about}>
					{<div className={cls.link}>
						<IconAbout className={cls.icon} />
						<div className={cls.text}>{t('О сайте')}</div>
					</div>}
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<AppButton size={AppButtonSize.L}
				theme={AppButtonTheme.SQUARE}
				className={cls.btn}
				onClick={toggleCollapse}>
				{collapsed ? '>' : '<'}
			</AppButton>
		</div>
	)
}

export default Sidebar;