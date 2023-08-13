import Link from "next/link";
import styles from './page.module.css';


export default function Home() {
  return (
    <main>
        <ul className={styles.menu}>
          <li>
              <Link href="/about">About </Link>
          </li>
          <li>
              <Link href="/contact">Contact </Link>
          </li>
          <li>
              <Link href="/dashboard">Dashboard </Link>
          </li>
          <li>
              <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
        <h2 className={styles.textCenter}>Home page</h2>
    </main>
  )
}
