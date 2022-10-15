import Link from 'next/link'
import React from 'react'
import styles from '../Navbar/navbar.module.css';


const index = () => {
  return (
    <ul className={styles.navbar}>
        <li className={styles.navbar__lst}> <Link href="/">Home</Link> </li>
        <li className={styles.navbar__lst}> <Link href="/about">About</Link></li>
    </ul>
  )
}

export default index