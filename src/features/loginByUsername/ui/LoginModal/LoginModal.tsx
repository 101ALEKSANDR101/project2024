import { AppModal } from "shared/ui/appModal";
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
		<AppModal lazy onOpen={onOpen} onClose={onClose} className={className}>
			<LoginForm />
		</AppModal>
	)
}