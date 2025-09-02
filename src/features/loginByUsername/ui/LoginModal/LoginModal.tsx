import { AppModal } from "shared/ui/appModal";
import { Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";
import { AppSpinner } from "shared/ui/appSpinner";


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
			<Suspense fallback={<AppSpinner />}>
				<LoginFormLazy onSuccess={onClose} />
			</Suspense>
		</AppModal>
	)
}