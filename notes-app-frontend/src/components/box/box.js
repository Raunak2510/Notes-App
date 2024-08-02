import React from "react";

import styles from "./box.module.scss";

function Box(props){
    const {message, date} = props.item;
    
    return(
        <section className={styles.section}>
       <p>{message}</p>
       <p>{date}</p>
        </section>
    )
}

export default Box;