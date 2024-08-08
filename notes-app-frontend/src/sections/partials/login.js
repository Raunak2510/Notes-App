import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../../atoms/buttons/buttons";
import images from "../../assets/assets.js";
import Input from "../../atoms/input/input";

import styles from "./signup.module.scss";
import { IoLogoGoogle } from "react-icons/io";
import MainPage from "../../pages/mainpage/mainpage";
import FirstPageRoute from "../../pages/firstpage/firstpage_router.js";

function SignIn() {
  const BrandLight = images[0];
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [userName, setUserName]= useState("");

  const sigInUrl="http://localhost:8000/api/users/login";

  function userLogin(){

    
    axios.post(sigInUrl, {
        email:email,
        password:password
        
    })
     .then((response)=>{
      const data = response.data;
      localStorage.setItem('token',data.token );
      setUserName(data.email);
    
      
      setStatus("Login Sucess");
      console.log(response.data);
     })
     .catch((error)=>{
        setStatus("Login Failed");
        console.log(error);
     })
  }
  if(status==="Login Sucess"){
    return (
      <MainPage userName={userName}/>
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
          type={"password"}
          placeholder={"Enter Password"}
         value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <Button text={"SignIn"} 
        className={styles.signupbutton}
        handleClick={userLogin}
         />
         {/* {status==="Login Sucess" && <Link to="/main"><MainPage /></Link>} */}
        <p className={styles.p}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </article>
      </article>
    </section>
  );
}
}

export default SignIn;
