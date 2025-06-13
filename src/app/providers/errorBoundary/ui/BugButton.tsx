import { useEffect, useState } from "react"


export const BugButton = () => {
	const [error, setError] = useState(false);

	const throwError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<button onClick={throwError}>toggle error</button>
	)
}