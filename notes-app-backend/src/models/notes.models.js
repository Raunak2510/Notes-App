const mongoose = require("mongoose");


const notesSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  

  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt:{
    type: String,
    default: new Date().toISOString(),
  }
});


const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;