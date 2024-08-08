const express= require("express");
const Router = express.Router();

const {auth} = require("../middlewares/auth.middlewares.js");
const {createNote} = require("../controllers/notes.controllers.js");
const {getNote} = require("../controllers/notes.controllers.js");
const router = require("./user.routes");

router.post("/createnotes",auth, createNote);
router.get("/getnote",auth, getNote );

module.exports=router;
