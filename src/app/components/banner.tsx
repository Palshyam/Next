import Script from 'next/script'
import banner_descreption from "./Banner.json";
import Link from 'next/link';

function Banner(props: any) {
  const { styles } = props
  return (
    <div className={styles.banner}>

      {banner_descreption.map((banner_descreption) => {
        return (
          <div className={styles.banner_block} key={banner_descreption.id}>
            <h3>{banner_descreption.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: banner_descreption.descreption }}
            ></div>
            <Link href={banner_descreption.url}>{banner_descreption.button}</Link>
          </div>
        );
      })}

    </div>
  )
}

export default Banner