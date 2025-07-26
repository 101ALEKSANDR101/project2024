import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppButton, AppButtonTheme } from 'shared/ui/appButton';
import { useTranslation } from 'react-i18next';
import { AppModal } from 'shared/ui/appModal';
import { useCallback, useState } from 'react';
import { AppButtonSize } from 'shared/ui/appButton/ui/AppButton';


type NavbarProps = {
	className?: string;
}

const Navbar = (props: NavbarProps) => {
	const {
		className
	} = props;

	const { t } = useTranslation();
	const [authModal, setAuthModal] = useState(false);

	const authModalOpen = useCallback(() => {
		setAuthModal(true);
	}, [setAuthModal]);

	const authModaClose = useCallback(() => {
		setAuthModal(false);
	}, [setAuthModal]);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<AppButton className={cls.btn} onClick={authModalOpen} size={AppButtonSize.M} theme={AppButtonTheme.CLEAR_INVERTED}>{t('Войти')}</AppButton>
			<AppModal lazy onOpen={authModal} onClose={authModaClose}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni quaerat est harum. Iusto quasi facilis laboriosam. Dolorum tenetur fugiat, quod, sint nihil illum expedita, saepe officia maiores vero voluptatibus.</AppModal>
		</div>
	)
}

export default Navbar;