import Head from 'next/head'
import Layout from '../components/layout'
import { getPageName, getPageContent } from '../lib/pages'
import utilStyles from '../styles/utils.module.css'


export default function Page({ pageData }) {
	return (
		<Layout>
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
	console.log(paths)
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const pageData = await getPageContent(params.page)
	return {
		props: {
			pageData
		}
	}
}
