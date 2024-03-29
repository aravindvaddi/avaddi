import Layout from '../components/layout'
import { getPageName, getPageContent } from '../lib/pages'
import utilStyles from '../styles/utils.module.css'


export default function Page({ pageData, links }) {
	return (
		<Layout links={links}>
			<header>
				<h1 className={utilStyles.heading}>{pageData.heading}</h1>
			</header>
			<main className={utilStyles.text}>
				<div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {

	const paths = getPageName()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {

	const links = ['home', 'resume', 'projects', 'contact'];
	const pageData = await getPageContent(params.page)

	return {
		props: {
			pageData, links
		}
	}
}
