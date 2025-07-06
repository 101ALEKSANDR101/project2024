import { render } from "@testing-library/react"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18n from "shared/config/i18next/i18nextForTests"


export function renderTest(children: ReactNode, url: string[]) {

	return render(
		<MemoryRouter initialEntries={url}>
			<I18nextProvider i18n={i18n}>
				{children}
			</I18nextProvider>
		</MemoryRouter>
	)
}