import styles from './nav-link.module.css'
import Link from 'next/link'
import Icons from './icons'

export default function NavLink(props) {

	const home = (props.page === "home")

	return <>
    { home ? (

        (<Link href="/" className={styles.navLink}>

            <div className={styles.navLinkWrapper}>
                <Icons type={props.page} />
                <span className={styles.navLinkCaption}>{props.page}</span>
            </div>

        </Link>)

    ) : (
        (<Link href="/[page]" as={`/${props.page}`} className={styles.navLink}>

            <div className={styles.navLinkWrapper}>
                <Icons type={props.page} />
                <span className={styles.navLinkCaption}>{props.page}</span>
            </div>

        </Link>)
    )}
    </>;
}
