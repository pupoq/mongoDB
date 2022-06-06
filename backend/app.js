const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

const carsRouter = require("./routers/carsRouter");
const usersRouter = require("./routers/usersRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/cars", carsRouter);
app.use("/users", usersRouter);

const CONNECTION_STRING = "mongodb+srv://Pupoq:Vasness06031412@cluster0.56vbdv4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, function(err){
        if(err) return console.log(err);
        app.listen(8080);
    }
);
