import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconProfile from 'shared/assets/icons/profile-20-20.svg';
import { pathsConfig } from 'shared/config/routerConfig/routerConfig';


export type SidebarItemType = {
	path: string;
	text: string;
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
	{
		path: pathsConfig.main,
		text: 'Главная',
		Icon: IconMain
	},
	{
		path: pathsConfig.about,
		text: 'О сайте',
		Icon: IconAbout
	},
	{
		path: pathsConfig.profile,
		text: 'Профиль',
		Icon: IconProfile
	},
]