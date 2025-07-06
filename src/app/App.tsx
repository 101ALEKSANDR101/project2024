import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import AppRouter from './providers/appRouter/AppRouter';


const App = () => {


	return (
		<div className={classNames('app', {}, [])}>
			<Navbar />
			<div className='page-wrapper'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App;