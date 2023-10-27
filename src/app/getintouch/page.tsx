
import styles from '@/styles/Contact.module.scss'
import Link from 'next/link'
import contact from "./Contact.json";
import Form from '../components/Form';

export default function getintouch() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <div className={styles.heading}>
          <h1>Get in <span>Touch</span></h1>
        </div>
        <div className={styles.left}>
          <ul>
            {contact.map((contact) => {
              return (
                <li>
                  <div className={styles.list_inner}>
                    <span>
                      <Link href="#">{contact.socialname}</Link>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Form  styles={styles} />
      </div>
    </main>
  )
}
