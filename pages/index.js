import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPageContent } from '../lib/pages'

const page = 'home'

export default function Home({ pageContent }) {
	return (
	<div>

		<Layout>
			<header className={utilStyles.header}>
				<img
					src='/images/profile-240w.jpg'
					className={`${utilStyles.homeImage} ${utilStyles.borderCircle}`}
					alt='Aravind Vaddi photo'
					height={240}
					width={240}
				/>
				<h1 className={utilStyles.heading}>{pageContent.heading}</h1>
			</header>
			<main className={utilStyles.text}>
				<div dangerouslySetInnerHTML={{ __html: pageContent.contentHtml }} />
			</main>
		</Layout>

	</div>
	)
}

export async function getStaticProps() {
	const pageContent = await getPageContent(page)

	return {
		props: {
			pageContent
		}
	}
}
