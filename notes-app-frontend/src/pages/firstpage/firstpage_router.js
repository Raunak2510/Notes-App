import React from "react";




import images from "../../assets/assets.js";
import SignUp from "../../sections/partials/signup.js";
import SignIn from "../../sections/partials/login.js";
import MainPage from "../mainpage/mainpage.js";

import styles from "./first.module.scss";



function FirstPageRoute(){
    const frontimg= images[2];
    return(
        <section className={styles.section}>
           
            <img src={frontimg} className={styles.img}/>
            <h3>
                Keep Life Simple 
            </h3>
            <p>Store all your notes in simple and intutive app that help</p>
          
            
            
        </section>
    )
}

export default FirstPageRoute;