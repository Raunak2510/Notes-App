import React, { createContext, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [createNewNotes, setCreateNewNotes] = useState(false);

  return (
    <NotesContext.Provider value={{ createNewNotes, setCreateNewNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
