const express =require("express")
const app = express()
// require("dotenv").config();

const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const router = require("./routes/userr")
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ["https://internshipfrontend-po9g.onrender.com"],
    credentials: true,
  })
);

// const mongo_url = process.env.MONGO_CONN;


mongoose.connect("mongodb+srv://fk29837:faizan@cluster0.q2fszrh.mongodb.net/internship?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected to database")
})

app.use("/auth",router)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

