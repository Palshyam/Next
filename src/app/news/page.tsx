'use client'
import styles from '@/styles/News.module.scss'
import Link from 'next/link'
import blog_content from "./News.json";
import Searchblog from './Searchblog';
import Sidebar from './Sidebar';

export default function News() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>Latest<span> News</span></h1>
      </div>
      <div className={styles.leftsidebar}>
        <div className={styles.blog_items_container}>
          {blog_content.map((blog_content) => {
            return (
              <article className={styles.list_inner} key={blog_content.id}>
                <div className={styles.image}>
                  <img src={blog_content.image} alt='blog img' />
                </div>
                <div className={styles.details}>
                  <h3><Link href="#">{blog_content.title}</Link></h3>
                  <span><Link href="#">{blog_content.button}</Link></span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <>
        <div className={styles.rightsidebar}>
          <Searchblog styles={styles} />
          <Sidebar styles={styles} />
        </div>
      </>
    </main>
  )
}