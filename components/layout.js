import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'

const siteTitle = 'Aravind Vaddi'
const siteLink = 'https://avaddi.dev'
const siteDescription = 'Aravind Vaddi\'s website'

export default function Layout({ children, links }) {
	return (
		<div>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>" />
				<meta property='og:title' content={siteTitle} />
				<meta property='og:description' content={siteDescription} />
				<meta property='og:url' content={siteLink} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='description' content={siteDescription} />
				<meta author='Aravind Vaddi' />
				<meta name="keywords" content="Aravind Vaddi"></meta>
			</Head>
			<Navbar links={links}>
			</Navbar>
			<div className={styles.container}>
				<div>{children}</div>
			</div>
		</div>
	)
}
