import Script from 'next/script'

function Logo(props:any) {
  const {styles} =props
  return (
    <div className={styles.logo}>
      Logo
    </div>
  )
}

export default Logo;