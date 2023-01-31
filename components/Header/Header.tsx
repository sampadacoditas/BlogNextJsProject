import Link from 'next/link'
import React from 'react'
import styles from "../../styles/Header.module.scss"
export default function Header() {
  return (
    <header>
        <div className={styles.container}>
            <Link href="/" passHref>
                <h2>Blog</h2>
            </Link>
        </div>
    </header>
  )
}
