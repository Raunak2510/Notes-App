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
    axios.get(getNotesUrl)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);
  console.log("this is get notes");
   console.log(notes);
  
  return notes;
  
};

export default useNotes;
