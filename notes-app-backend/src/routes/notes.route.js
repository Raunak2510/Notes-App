const express= require("express");
const Router = express.Router();

const {createNote} = require("../controllers/notes.controllers.js");
const {getNote} = require("../controllers/notes.controllers.js");
const router = require("./user.routes");

router.post("/createnotes", createNote);
router.get("/getnote",getNote );

module.exports=router;
