import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../../atoms/buttons/buttons";
import images from "../../assets/assets.js";
import Input from "../../atoms/input/input";

import styles from "./signup.module.scss";
import { IoLogoGoogle } from "react-icons/io";

function SignIn() {
  const BrandLight = images[0];
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");

  const sigInUrl="http://localhost:8000/api/users/login";

  function userLogin(){
    axios.post(sigInUrl, {
        email:email,
        password:password
        
    });
     console.log(email);
  }

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
          icon={<IoLogoGoogle className={styles.svg} />}
        />
        <Input
          placeholder={"Enter email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <Input
          placeholder={"Enter Password"}
         value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <Button text={"SignIn"} 
        className={styles.signupbutton}
        handleClick={userLogin}
         />
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </article>
    </section>
  );
}

export default SignIn;
