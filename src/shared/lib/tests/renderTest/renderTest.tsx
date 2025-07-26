import { render } from "@testing-library/react"
import { createStore, StateSchema } from "app/providers/store"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import i18n from "shared/config/i18next/i18nextForTests"


type RenderTestOptions = {
	url?: string[];
	initialState?: StateSchema;
}

export function renderTest(children: ReactNode, options?: RenderTestOptions) {
	const {
		url,
		initialState
	} = options;
	const store = createStore(initialState);

	return render(
		<Provider store={store}>
			<MemoryRouter initialEntries={url}>
				<I18nextProvider i18n={i18n}>
					{children}
				</I18nextProvider>
			</MemoryRouter>
		</Provider>
	)
}