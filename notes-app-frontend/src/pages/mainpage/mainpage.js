import React from "react";
import { FaRegHandSpock } from "react-icons/fa6";

import SideBar from "../../sections/sidebar/sidebar.js";
import SearchBar from "../../components/searchbar/searchbar.js";
import Box from "../../components/box/box.js";
import NotesData from "../../data/notes.js";

import styles from "./mainpage.module.scss";

function MainPage(){
    return(
       <section className={styles.section1}>
     <section className={styles.section2}>
      <SideBar />
    
      <SearchBar />
      </section>
      <section className={styles.section3}>
      <article className={styles.card1}>
      <h2>Hello,<span className={styles.span}>Raunak! {<FaRegHandSpock className={styles.svg} />}</span></h2>
      <h7>All your notes here, in one place </h7>
      </article>
     
     <article className={styles.card2}>
      {NotesData.map((item , index)=>{
             return  <Box item={item} key={index} />;
            })}
     </article>
     </section>
      
     </section>

    

    )
}

export default MainPage;