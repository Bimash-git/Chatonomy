const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const chats = require("./data/data");
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: "true"
}));

// taking in requests
// app.get("/", (req, res) => {
//     res.status(200).send("API's running successfully");
// })

app.use(express.json()); //allows to access server data

app.use(notFound);
app.use(errorHandler);

app.use("/api/user", cloudinaryRoutes);
app.use("/api/user", userRoutes);


// app.get("/api/chats", (req, res) => {
//     res.status(200).send(chats);
// })

// app.get("/api/chats/:id", (req, res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find(c => c._id === req.params.id);
//     res.status(200).send(singleChat);
// })

const PORT = process.env.PORT || 5000;

app.listen(5000, 
    console.log("Server has started")
    )