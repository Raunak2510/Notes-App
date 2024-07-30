import React from "react";

import images from "../../assets/assets";
import { CiHome } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import styles from "./sidebar.module.scss";


function SideBar(){
    const brandLight= images[0];
    return(
        <section className={styles.section}>
          <img  src={brandLight} alt={"brand-img"} className={styles.img}/>
          <article className={styles.article}>
            <CiHome />
            <FaPlus />
          </article>
          <MdLogout />
        </section>
    )
}

export default SideBar;