import { classNames } from "shared/lib/classNames/classNames";
import { AppModal } from "shared/ui/appModal";
import cls from './LoginModal.module.scss';
import { LoginForm } from "../LoginForm/LoginForm";


type LoginModalProps = {
	className?: string;
	onOpen?: boolean;
	onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const {
		className,
		onOpen,
		onClose,
	} = props;

	return (
		<AppModal lazy onOpen={onOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])}>
			<LoginForm />
		</AppModal>
	)
}