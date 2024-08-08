const Notes = require("../models/notes.models.js");
const User = require("../models/user.models.js");

async function createNote(req, res) {
  const { text } = req.body;
  console.log("create notes");
  console.log(req.body);
  try {
    console.log(req.body);

    const newNote = new Notes({
      text,
      userId: req.userId
    });

    await newNote.save();
    res.status(201).json({ success: 200, data: newNote });
  } catch (error) {
    res.status(500).json({ success: 500, message: `Error creating note ${error}` });
  }
}

async function getNote(req, res) {
  try {
    const notes = await Notes.find({ userId: req.userId });
    const user = await User.findOne({ _id: req.userId });

    if (!notes) {
      return res.status(500).json({ message: "Notes not found" });
    }

    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    
    const notesWithEmail = notes.map(note => ({
      ...note.toObject(),
      email: user.email
    }));
   
    res.json(notesWithEmail);
  } catch (err) {
    res.status(500).json({ message: `Error fetching notes ${err}` });
  }
}

module.exports = {
  createNote,
  getNote,
};
