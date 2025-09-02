import cls from './Sidebar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { AppButton, AppButtonTheme } from 'shared/ui/appButton';
import { memo, useState } from 'react';
import { AppButtonSize } from 'shared/ui/appButton/ui/AppButton';
import { LangSwitcher } from 'widgets/langSwitcher';
import { SidebarItemList } from 'widgets/sidebar/model/items';
import { SidebarItem } from 'widgets/sidebar/sidebarItem/SidebarItem';


type SidebarProps = {
	className?: string;
}

const Sidebar = memo(function Sidebar(props: SidebarProps) {
	const {
		className,
	} = props;

	const [collapsed, setCollapsed] = useState(true);

	const mods: Record<string, boolean> = {
		[cls.collapsed]: collapsed,
	}

	const [toggle, setToggle] = useState(false);

	const toggleCollapse = () => {
		setCollapsed(prev => !prev);
	}


	return (
		<div data-testid='sidebar-test' className={classNames(cls.sidebar, mods, [className])}>
			<div className={cls.links}>
				{SidebarItemList.map((item) => (
					<SidebarItem collapsed={collapsed} key={item.path} item={item} />
				))}
			</div>
			<div className={cls.switchers}>
				<button onClick={() => setToggle(prev => !prev)}>{toggle ? 'fuck' : 'sheet'}</button>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<AppButton data-testid='sidebar-btn' size={AppButtonSize.L}
				theme={AppButtonTheme.SQUARE}
				className={cls.btn}
				onClick={toggleCollapse}>
				{collapsed ? '>' : '<'}
			</AppButton>
		</div>
	)
});

export default Sidebar;