import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';


type NavbarProps = {
	className?: string;
}

const Navbar = (props: NavbarProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames(cls.navbar, {}, [className])}>

		</div>
	)
}

export default Navbar;