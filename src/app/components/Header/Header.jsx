import Link from "next/link";
import styles from '../../page.module.css';


const Header = () => {


    return (
        <ul className={styles.menu}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About </Link>
        </li>
        <li>
            <Link href="/contact">Contact </Link>
        </li>
        <li>
            <Link href="/users">Users </Link>
        </li>
        <li>
            <Link href="/dashboard">Dashboard </Link>
        </li>
        <li>
            <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    );
};

export default Header;