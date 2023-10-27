import Link from 'next/link'
import React from 'react'
import sidebar from "./Blog.json";

function Sidebar(props: any) {
  const { styles } = props
  return (
    <>
      {sidebar.map((sidebar) => {
        return (
          <div className={styles.widget_container} key={sidebar.id}>
            <h3>{sidebar.title}</h3>
            <ul>

              {sidebar.menu.map((sidebar) => {
                return (
                  <li>
                    <Link href="#">{sidebar.link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  )
}

export default Sidebar