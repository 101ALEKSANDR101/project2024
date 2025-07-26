import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProviders/ui/ThemeProvider';
import App from 'app/App';
import 'shared/config/i18next/i18next';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import './app/style/index.scss';
import { StoreProvider } from 'app/providers/store';


const root = createRoot(document.getElementById('root'));
root.render(
	<StoreProvider>
		<ErrorBoundary>
			<ThemeProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</ErrorBoundary>
	</StoreProvider>
);