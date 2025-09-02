import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppButton, AppButtonTheme } from 'shared/ui/appButton';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { AppButtonSize } from 'shared/ui/appButton/ui/AppButton';
import { LoginModal } from 'features/loginByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { useDispatch } from 'react-redux';


type NavbarProps = {
	className?: string;
}

const Navbar = memo(function Navbar(props: NavbarProps) {
	const {
		className
	} = props;

	const { t } = useTranslation();
	const [authModal, setAuthModal] = useState(false);
	const user = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const authModalOpen = useCallback(() => {
		setAuthModal(true);
	}, [setAuthModal]);

	const authModalClose = useCallback(() => {
		setAuthModal(false);
	}, [setAuthModal]);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);


	if (user) {
		return <div className={classNames(cls.navbar, {}, [className])}>
			<AppButton className={cls.btn} onClick={onLogout} size={AppButtonSize.M} theme={AppButtonTheme.CLEAR_INVERTED}>{t('Выйти')}</AppButton>
		</div>
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<AppButton className={cls.btn} onClick={authModalOpen} size={AppButtonSize.M} theme={AppButtonTheme.CLEAR_INVERTED}>{t('Войти')}</AppButton>
			{authModal && <LoginModal onOpen={authModal} onClose={authModalClose} />}
		</div>
	)
});

export default Navbar;