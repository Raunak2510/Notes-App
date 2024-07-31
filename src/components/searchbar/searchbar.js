import React from 'react';
import { Icon } from "@iconify/react";
import { FiSunset } from "react-icons/fi";

import styles from "./searchbar.module.scss";

function SearchBar(){
    return(
     <article className={styles.bar}>
         <Icon icon={"mdi:search"} className={styles.svg}/>
       <input placeholder="search notes" />
       <FiSunset className={styles.svg}/>
     </article>
    );
}

export default SearchBar;