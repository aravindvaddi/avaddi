import styles from './navbar.module.css'
import NavLink from './nav-link'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarInnerWrapper}>
				<NavLink page="home"></NavLink>
				<NavLink page="resume"></NavLink>
				<NavLink page="contact"></NavLink>
			</div>
		</nav>
	)
}
