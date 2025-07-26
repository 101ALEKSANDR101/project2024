import { ReactNode } from "react";
import { createPortal } from "react-dom";


type AppPortalProps = {
	children: ReactNode;
	element?: HTMLElement;
}

export const AppPortal = (props: AppPortalProps) => {
	const {
		children,
		element = document.body
	} = props;

	return createPortal(children, element);
}