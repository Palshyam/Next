import styles from '@/styles/Home.module.scss'
import Banner from './components/banner'

export default function Page() {
  return (
    <main className={styles.main}>
        <Banner styles={styles} />
    </main>
  )
}
