import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppButton, AppButtonTheme } from 'shared/ui/appButton';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { AppButtonSize } from 'shared/ui/appButton/ui/AppButton';
import { LoginModal } from 'features/authModal';


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

	const authModalClose = useCallback(() => {
		setAuthModal(false);
	}, [setAuthModal]);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<AppButton className={cls.btn} onClick={authModalOpen} size={AppButtonSize.M} theme={AppButtonTheme.CLEAR_INVERTED}>{t('Войти')}</AppButton>
			<LoginModal onOpen={authModal} onClose={authModalClose} />
		</div>
	)
}

export default Navbar;