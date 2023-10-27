'use client'
import Link from 'next/link';
import { useState } from "react";
import { Modal } from 'antd';

import styles from '@/styles/About.module.scss'
import about_content from "./About.json";


export default function About() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.main}>
      {about_content.map((about_content) => {
        return (
          <>
            <div className={styles.about_img_part}>
              <img src={about_content.image} alt='about img' />
            </div>
            <div className={styles.about_content_part} key={about_content.id}>
              <h3>{about_content.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: about_content.descreption }}
              ></div>
              <div className={styles.content}
                dangerouslySetInnerHTML={{ __html: about_content.content }}
              ></div>
              <button type='button' onClick={showModal}>{about_content.button}</button>
            </div>
          </>
        );
      })}

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  
  
    </main>
  )
}

