const Notes = require("../models/notes.models.js");
const User = require("../models/user.models.js");

async function createNote(req, res) {
  const { text } = req.body;
  
  // console.log("req.body is ")
  // console.log(req.body);
  //  console.log(req.userId);
  try {
  //   if (!req.userId)
  //     res
  //       .status(403)
  //       .json({ success: 403, message: `You are not authorized  ${error}` });

  //  // console.log(req.userId);
  //   const user = await User.findById(req.userId);
  // //  console.log(user);
  //   if (!user)
  //     res
  //       .status(404)
  //       .json({ success: 403, message: `User not found ${error}` });

    const newNote = new Notes({
      text,
     
    });
    await newNote
      .save()
      .then(() => {
        console.log("Saved");
      })
      .catch((err) => {
        console.log("Not save", err);
      });
    res.status(201).json({ success: 200, data: newNote });
  } catch (error) {
    res
      .status(500)
      .json({ success: 500, message: `Error creating note ${error}` });
  }
}

async function getNote(req, res) {
  try {
    console.log("req");
    console.log(req);
    const note = await Notes.find(req.params.id);
    console.log(req.params.id);
    console.log(note);
    if (!note) {
      res.status(500).json({ message: "Note not present" });
    }
    res.json(note
     );
  } catch (err) {
    res.status(500).json({ message: `Error fetching notes ${err}` });
  }
}

module.exports = {
  createNote,
  getNote,
 
};