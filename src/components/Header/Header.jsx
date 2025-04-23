import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { nav } from '../../db/db'
import Button from './Button/Button'
export default function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <Nav navigation={nav} />
            <Button/>
        </div>
    )
}