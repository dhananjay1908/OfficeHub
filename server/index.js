import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postsRoutes from "./routes/posts.js";
import todoRoutes from "./routes/todos.js";
import dbConnection from "./db.js";

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json({ extended: "true" }));
app.use(cors());
app.use('/', todoRoutes)

const PORT = 5000;
dbConnection();
app.listen(PORT, () => { console.log(`Server is running successfully on Port: ${PORT}`); })
