import Link from 'next/link'

function Navigation(props:any) {
  const {styles} =props
  return (
    <div className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/myportfolio">My Portfolio</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/getintouch">Get in Touch</Link></li>
      </ul>
    </div>
  )
}

export default Navigation