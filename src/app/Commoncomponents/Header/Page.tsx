import Logo from '@/app/components/logo'
import Navigation from '@/app/components/navigation'
import styles from '@/styles/Header.module.scss'

import React from 'react'

function Header() {
  return (
    <header className={styles.header}>
      <Logo styles={styles} />
      <Navigation styles={styles} />
    </header>
  )
}

export default Header