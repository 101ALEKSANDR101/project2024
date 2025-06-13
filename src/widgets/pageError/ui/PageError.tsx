import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { useTranslation } from "react-i18next";


export const PageError = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	}

	return (
		<div className={classNames(cls.pageError, {}, [])}>
			<div className={cls.content}>
				{t('Непредвиденная ошибка')}
				<button className={cls.btn} onClick={reloadPage}>{t('Перезагрузить страницу')}</button>
			</div>
		</div>
	)
}