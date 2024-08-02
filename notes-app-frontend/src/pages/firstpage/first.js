import React from "react";

import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';


import images from "../../assets/assets.js";
import SignUp from "../../sections/partials/signup.js";
import SignIn from "../../sections/partials/login.js";

import styles from "./first.module.scss";



function FirstPage(){
    const frontimg= images[2];
    return(
        <section className={styles.section}>
            <article className={styles.article1}>
            <img src={frontimg} className={styles.img}/>
            <h3>
                Keep Life Simple 
            </h3>
            <p>Store all your notes in simple and intutive app that help</p>
            </article>
            <article className={styles.article2}>
                
            <Router>
          
      <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
            </article>
            
        </section>
    )
}

export default FirstPage;