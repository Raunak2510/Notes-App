import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatDate } from "../../utils/formatdate.js"

import Button from "../../atoms/buttons/buttons.js";
import styles from "./notes.module.scss";
import axios from "axios";

function Note(props) {
  const { text, date, color, setCallGet, setCurrentText } = props;
  const [expand, setExpand] = useState(false);
  const [noteText, setNoteText] = useState("");

  const createNotesUrl = "http://localhost:8000/api/notes/createnotes";

  const handleSave = () => {
   
    // if (!noteText.length || noteText.split(" ").length < 2 )
    //   toast.error("Notes text should atleast contain 2 words!");

    axios.post(createNotesUrl, {
      text: noteText
    })
      .then((res) => {
        const data = res.data; 
        console.log(res.data);
        if (data?.success === 200) {
          toast.success("Notes added successfully!");
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Notes creation failed!");
      });
      setCallGet(true);
      setCurrentText(noteText);
  }

  return (
    <article className={styles.container} style={{ backgroundColor: color }}>
      <div>
        {!text.length ? (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className={styles.textarea}
          />
        ) : (
          <>
            <p className={expand ? styles.expanded : ""}>
              {text.substring(0, 154)}
            </p>
            {text.length > 154 ? (
              <button onClick={() => setExpand((prev) => !prev)}>
                Read {expand ? "less" : "more"}
              </button>
            ) : null}
          </>
        )}
      </div>
      <footer className={styles.footer}>
        <div>{formatDate(date)}</div>
        {noteText.length ? (
          <Button
            text={"save"}
            className={styles.saveBtn}
            handleClick={handleSave}
          />
        ) : null}
      </footer>
    </article>
  );
}

export default Note;
