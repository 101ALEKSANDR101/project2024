import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import AppRouter from './providers/appRouter/AppRouter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/user';


const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initUser());
	}, [dispatch]);


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