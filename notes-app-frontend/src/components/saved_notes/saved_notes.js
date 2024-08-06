import React, { useState } from "react";
import Button from "../../atoms/buttons/buttons.js";
import styles from "./saved_notes.module.scss";

function SavedNotes(props) {
  const { text, date, color } = props;
  const [expand, setExpand] = useState(false);
  const [noteText, setNoteText] = useState("");

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
      {/* <footer className={styles.footer}>
        <div>{formatDate(date)}</div>
        {noteText.length ? (
          <Button
            text={"save"}
            className={styles.saveBtn}
            handleClick={handleSave}
          />
        ) : null}
      </footer> */}
    </article>
  );
}

export default SavedNotes;
