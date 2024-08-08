// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const useNotes = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const getNotesUrl = "http://localhost:8000/api/notes/getnote";
//     axios.get(getNotesUrl)
//       .then((response) => {
//         setNotes(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching notes:", error);
//       });
//   }, []);

//   return notes;
// };

// const NotesData = () => {
//   const notes = useNotes();

//   const notesList = [
//     {
//     id: notes._id,
//     message: notes.text,
//     date: notes.createdAt,}
//   ]
 
//  return notesList;
  
// };

// export default NotesData;


// useNotes.js
import { useState, useEffect } from "react";
import axios from "axios";



const useNotes = () => {
  const [notes, setNotes] = useState([]);
  

  useEffect(() => {
    const getNotesUrl = "http://localhost:8000/api/notes/getnote";
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

   console.log("token"+localStorage.key(4));
    axios.get(getNotesUrl, {
      headers: {
        'Authorization': ` ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      setNotes(response.data);
     
    })
    .catch((error) => {
      console.error("Error fetching notes:", error);
    });
  }, []);
  if(notes[0]>0){
  localStorage.setItem("email", notes[0].email);
  console.log(localStorage.getItem('email'));}
  return notes;
};

export default useNotes;
