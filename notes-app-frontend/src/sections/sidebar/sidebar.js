import React, { useState } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa6';
import { CiHome } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import images from '../../assets/assets';
import styles from './sidebar.module.scss';
import{useNavigate} from "react-router-dom";
import useNotes from '../../data/notes.js';

// import Routes from "../../route"

function SideBar({ setCreateNewNotes }) {
  const brandLight = images[1];
  // const [statusLog, setStatusLog] = useState(false);
  const navigate=useNavigate();

  function newNotes() {
    setCreateNewNotes(true);
  }

  const logoutUrl = "http://localhost:8000/api/users/logout";

  function logOut() {
    
    localStorage.removeItem('token');
    const token = localStorage.getItem('token'); 
    if(!token){
      navigate('/login')
    }
  
    console.log(localStorage.getItem("email"));
    console.log("token"+token);
    // <Routes/>

    axios.post(
      logoutUrl,
      {email:localStorage.getItem("email"),
      token:localStorage.getItem("token")
    },
      {
        
        headers: {
          Authorization: ` ${token}`
        }
      }
    )
    .then((response) => {
      const data = response.data;
      console.log("data"+data.success);
      if(data.success){
        // setStatusLog(true);
        localStorage.removeItem('token');
        navigate('/login');
      }
      console.log("data", data);
     
     
     
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        
        console.error('Error Response Data:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);
      } else if (error.request) {
       
        console.error('Error Request:', error.request);
      } else {
        
        console.error('Error Message:', error.message);
      }
    });
  
  }

  return (
    <section className={styles.section}>
      <img src={brandLight} alt="brand-img" className={styles.img} />
      <article className={styles.article}>
        <button className={styles.button}>
          <CiHome className={styles.svg} />
        </button>
        <button className={styles.button} onClick={newNotes}>
          <FaPlus className={styles.svg} />
        </button>
      </article>
      <button className={styles.button} onClick={logOut}>
        <MdLogout className={styles.svg} />
      </button>
    </section>
  );
}

export default SideBar;
