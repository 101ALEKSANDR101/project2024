import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss';
import { AppSpinner } from "shared/ui/appSpinner";


export const PageLoader = () => {

	return (
		<div className={classNames(cls.pageLoader, {}, [])}>
			<AppSpinner />
		</div>
	)
}