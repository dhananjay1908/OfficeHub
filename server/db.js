import mongoose, { set } from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const Username = process.env.USER_NAME;
const Password = process.env.PASSWORD;

const dbConnection = () => {
    const CONNECTION_URL = `mongodb+srv://${Username}:${Password}@cluster0.vh9dhc0.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(CONNECTION_URL)

    mongoose.connection.on("connected", () => { console.log("Connection to the database is successful."); })
    mongoose.connection.on("disconnected", () => { console.log("Server disconnected."); })
    mongoose.connection.on("error", () => { console.log(error.message); })
}

export default dbConnection;