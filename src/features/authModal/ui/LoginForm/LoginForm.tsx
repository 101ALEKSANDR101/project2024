import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { AppButton } from "shared/ui/appButton";
import { useTranslation } from "react-i18next";
import { AppInput } from "shared/ui/appInput";


type LoginFormProps = {
	className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
	const {
		className,
	} = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<AppInput autoFocus placeholder={t('Введите имя пользователя')} className={cls.input} />
			<AppInput placeholder={t('Введите пароль')} className={cls.input} />
			<AppButton className={cls.btn}>{t('Войти')}</AppButton>
		</div>
	)
}