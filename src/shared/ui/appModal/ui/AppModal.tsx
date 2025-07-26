import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppModal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { AppPortal } from "shared/ui/appPortal/AppPortal";


type AppModalProps = {
	className?: string;
	onOpen?: boolean;
	onClose?: () => void;
	children?: ReactNode;
	lazy?: boolean;
}

export const AppModal = (props: AppModalProps) => {
	const {
		className,
		onOpen,
		onClose,
		children,
		lazy
	} = props;

	const refTimer = useRef(null);
	const [isClose, setIsClose] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const mods: Record<string, boolean> = {
		[cls.isOpen]: isOpen,
		[cls.isClose]: isClose,
	}

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClose(true);
			refTimer.current = setTimeout(() => {
				onClose();
				setIsClose(false);
				setIsOpen(false);
			}, 300);
		}
	}, [onClose]);

	const openHandler = useCallback(() => {
		if (onOpen) {
			setIsOpen(true);
		}
	}, [onOpen]);

	const contentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, [])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler])

	useEffect(() => {
		if (onOpen) {
			window.addEventListener('keydown', onKeyDown);
			refTimer.current = setTimeout(() => {
				openHandler();
			}, 300);
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			clearTimeout(refTimer.current);
		}
	}, [onOpen, onKeyDown, openHandler]);

	if (lazy && !onOpen) {
		return null;
	}

	return (
		<AppPortal>
			<div className={classNames(cls.appModal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div ref={refTimer} className={cls.content} onClick={contentClick}>
						{children}
					</div>
				</div>
			</div>
		</AppPortal>
	)
}