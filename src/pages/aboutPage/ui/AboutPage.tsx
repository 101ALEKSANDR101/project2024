import { Counter } from "entities/counter";
import { useTranslation } from "react-i18next";


const AboutPage = () => {
	const { t } = useTranslation('aboutPage')

	return (
		<div>
			{t('О сайте')}
			<Counter />
		</div>
	)
}

export default AboutPage;