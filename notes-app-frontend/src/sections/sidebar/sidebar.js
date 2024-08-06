import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { CiHome } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import images from '../../assets/assets';
import styles from './sidebar.module.scss';

function SideBar({ setCreateNewNotes }) {
  const brandLight = images[1];

  function newNotes() {
    setCreateNewNotes(true);
  }

  return (
    <section className={styles.section}>
      <img src={brandLight} alt="brand-img" className={styles.img} />
      <article className={styles.article}>
        <button className={styles.button}>
          <CiHome className={styles.svg} />
        </button>
        <button className={styles.button} onClick={newNotes}>
          <FaPlus className={styles.svg} />
        </button>
      </article>
      <button className={styles.button}>
        <MdLogout className={styles.svg} />
      </button>
    </section>
  );
}

export default SideBar;
