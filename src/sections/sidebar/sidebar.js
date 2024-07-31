import React from "react";

import images from "../../assets/assets";
import { CiHome } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import styles from "./sidebar.module.scss";


function SideBar(){
    const brandLight= images[1];
    return(
        <section className={styles.section}>
          <img  src={brandLight} alt={"brand-img"} className={styles.img}/>
          <article className={styles.article}>
            <CiHome className={styles.svg}/>
            <FaPlus className={styles.svg}/>
          </article>
          <MdLogout className={styles.svg}/>
        </section>
    )
}

export default SideBar;