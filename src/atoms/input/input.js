
import React from "react"; 

import styles from "./input.module.scss";

function Input(props){

    const {placeholder1, placeholder2 }= props;
    return(
     <section className={styles.input}>
        <input placeholder={placeholder1}/>
        <br></br>
        <input placeholder={placeholder2}/>
     </section>
    )
}

export default Input;