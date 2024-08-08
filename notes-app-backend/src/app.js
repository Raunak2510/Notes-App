const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

// app.use(cors({
//    // origin: process.env.CORS_ORIGIN,
//    origin:'http://localhost:3000',
   
// }));

const corsOptions = {
    origin: 'http://localhost:3000', // Adjust as necessary
    credentials: true, // Allow credentials
    allowedHeaders: ['Content-Type', 'Authorization'], // Add Authorization to allowed headers
  };
  
  app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

const userRoutes = require("./routes/user.routes.js");
const notesRoutes= require("./routes/notes.route.js");

app.use("/api/users", userRoutes);
app.use("/api/notes", notesRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
