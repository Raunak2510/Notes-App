import React from "react";

import styles from "./box.module.scss";

function Box(props){
    const {text} = props;
    
   
   
    return(
        <section className={styles.section}>
       <p>{text}</p>
       
        </section>
    )
}

export default Box;