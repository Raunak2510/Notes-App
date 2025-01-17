import React, { useState } from "react";
import { FaRegHandSpock } from "react-icons/fa6";

import SideBar from "../../sections/sidebar/sidebar.js";
import SearchBar from "../../components/searchbar/searchbar.js";
import useNotes from "../../data/notes.js";
import Note from "../../components/notes/notes.js";
import SavedNotes from "../../components/saved_notes/saved_notes.js";
import styles from "./mainpage.module.scss";

function MainPage() {
  const notes = useNotes();
//  cons
  const [createNewNotes, setCreateNewNotes] = useState(false);
  const [callGet, setCallGet] = useState(false);
  const [currentText, setCurrentText] = useState("");
  //  const [userName, setUserName] = useState("");
     let userName ="user";
    // console.log("notes"+useNotes());
   
    if (notes.length > 0 && notes[0].email) {
      userName=notes[0].email;
    }
    
    
  let newUserName="";
  for(let i=0; i<userName.length; i++){
    if(userName[i]==='@'){
      break;
    } else{
       newUserName+=userName[i];
    }
  }

 

  return (
    <section className={styles.section1}>
      <section className={styles.section2}>
        <SideBar setCreateNewNotes={setCreateNewNotes} />
        <SearchBar />
      </section>
      <section className={styles.section3}>
        <article className={styles.card1}>
          <h2>
            Hello,
            <span className={styles.span}>
              {newUserName} {<FaRegHandSpock className={styles.svg} />}
            </span>
          </h2>
          <h7>All your notes here, in one place</h7>
        </article>
        <article className={styles.card2}>
          {createNewNotes  && <Note text={1}  setCallGet={setCallGet}  setCurrentText={setCurrentText}/>}
          {callGet && <SavedNotes text={currentText} />
          
          }
          {notes.map((note) => (
            <SavedNotes key={note._id} text={note.text} />
          ))}
        </article>
      </section>
    </section>
  );
}

export default MainPage;
