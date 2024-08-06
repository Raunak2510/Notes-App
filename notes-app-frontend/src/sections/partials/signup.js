import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../../atoms/buttons/buttons";
import images from "../../assets/assets.js";
import Input from "../../atoms/input/input";
import styles from "./signup.module.scss";
import FirstPage from "../../pages/firstpage/first.js";
import MainPage from "../../pages/mainpage/mainpage.js";

import { IoLogoGoogle } from "react-icons/io";
// import { response } from "express";
import FirstPageRoute from "../../pages/firstpage/firstpage_router";

const signUpUrl = "http://localhost:8000/api/users/register";

function SignUp() {
  const BrandLight = images[0];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus]= useState("");

  function signUp() {
    axios.post(signUpUrl, {
      email: email,
      password: password,
    })
    .then((response)=>{
      setStatus("SignUp success");
      console.log(response.data);
    }

    )
    .catch((error)=>{
      setStatus("signUp failed try gain");
      console.log(error);
    })
  }
  if(status==="SignUp success"){
    return (
      <MainPage />
    )
  } else{
  
  return (

    <section className={styles.section}>
      <article className={styles.component1}>
     <FirstPageRoute />
     </article>
     <article className={styles.component2}>
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text={"SignUp"}
          className={styles.signupbutton}
          handleClick={signUp}
        />
        {status && <p className={styles.status}>{status}</p>}
        <p className={styles.p}>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        </article>
      </article>
    </section>
  );
}
}

export default SignUp;
