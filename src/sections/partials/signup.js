import React from "react";

import Button from "../../atoms/buttons/buttons";
import images from "../../assets/assets.js";
import Input from "../../atoms/input/input";
import styles from "./signup.module.scss";

import  {IoLogoGoogle}  from "react-icons/io";

function SignUp(){
    const BrandLight= images[0];
    return (
     <section className={styles.section}>
        <article className={styles.text1}>
        <img src={BrandLight} alt={"img"} className={styles.img} />
        <h2>NOTE.me</h2>
        </article>
        <article className={styles.text2}>
        <Button
         text={"Join with Google"}
         className={styles.googlebutton}
         icon={<IoLogoGoogle className={styles.svg}/>}/>
         <Input placeholder1={"Enter email"}
         placeholder2={"Enter Password"}
         />
         <Button text={"SignUp"} className={styles.signupbutton}/>
         
         </article>
         
     </section>
    )
}

export default SignUp;