import { AppLink } from "shared/ui/appLink";
import { SidebarItemType } from "../model/items";
import cls from './SidebarItem.module.scss';
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";


type SidebarItemProps = {
	item?: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
	const {
		item,
		collapsed
	} = props;

	const { t } = useTranslation();
	const mods: Record<string, boolean> = {
		[cls.collapsed]: collapsed,
	}

	return (
		<AppLink to={item.path}>
			{<div className={cls.link}>
				<item.Icon className={cls.icon} />
				<div className={classNames(cls.text, mods, [])}>{t(item.text)}</div>
			</div>}
		</AppLink>
	)
});