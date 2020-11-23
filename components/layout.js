import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'

const siteTitle = 'Aravind Vaddi'
const siteLink = 'https://avaddi.dev'
const siteDescription = 'Aravind Vaddi\'s website'

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>{siteTitle}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={siteTitle} />
				<meta property='og:description' content={siteDescription} />
				<meta property='og:url' content={siteLink} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='description' content={siteDescription} />
			</Head>
			<Navbar>
			</Navbar>
			<div className={styles.container}>
				<div>{children}</div>
			</div>
		</div>
	)
}
