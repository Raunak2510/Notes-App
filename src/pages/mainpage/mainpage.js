import React from "react";

import SideBar from "../../sections/sidebar/sidebar.js";

import styles from "./mainpage.module.scss";

function MainPage(){
    return(
     <section className={styles.section}>
      <SideBar />
     </section>
    )
}

export default MainPage;