import { BugButton } from "app/providers/errorBoundary";
import { Counter } from "entities/counter";
import { useTranslation } from "react-i18next";


const MainPage = () => {
	const { t } = useTranslation('mainPage');


	return (
		<div>
			<BugButton />
			{t('Главная страница')}
			<Counter />
		</div>
	)
}

export default MainPage;