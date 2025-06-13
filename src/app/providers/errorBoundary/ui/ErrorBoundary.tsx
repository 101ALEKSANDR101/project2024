import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/pageError';

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<Suspense fallback=''>
					<PageError />
				</Suspense>
			)
		}

		return this.props.children;
	}
}

export default ErrorBoundary;