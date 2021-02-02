import styles from './navbar.module.css'
import NavLink from './nav-link'

export default function Navbar({links}) {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarInnerWrapper}>
				{
					links.map(link => <NavLink key={link} page={link}></NavLink>)
				}
			</div>
		</nav>
	)
}
