import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { AppButton, AppButtonTheme } from "shared/ui/appButton";
import { useTranslation } from "react-i18next";
import { AppInput } from "shared/ui/appInput";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/providers/store/config/StateSchema";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { AppText, AppTextTheme } from "shared/ui/appText";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";


type LoginFormProps = {
	className?: string;
}

export const LoginForm = memo(function LoginForm(props: LoginFormProps) {
	const {
		className,
	} = props;
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const changeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch]);

	const changePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch]);

	const loginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);


	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<AppText title={t('Форма авторизации')}/>
			{error && <AppText theme={AppTextTheme.ERROR} text={t('Неверный логин или пароль')}/>}
			<AppInput onChange={changeUsername}
				value={username}
				autoFocus placeholder={t('Введите имя пользователя')} className={cls.input} />
			<AppInput onChange={changePassword}
				value={password}
				placeholder={t('Введите пароль')} className={cls.input} />
			<AppButton disabled={isLoading} theme={AppButtonTheme.OUTLINE} onClick={loginClick}
				className={cls.btn}>{t('Войти')}</AppButton>
		</div>
	)
});