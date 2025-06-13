import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/themeProviders';
import './style/index.scss';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import AppRouter from './providers/appRouter/AppRouter';



const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='page-wrapper'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App;