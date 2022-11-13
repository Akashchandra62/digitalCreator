import express from 'express'
import cors from "cors"
import User from './db/userSchema.js'
import {dbConnection}  from './db/connection.js';
const app = express();
const PORT = 8000;
dbConnection();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/getuser", (req, res) => {
    res.json({
        message: "success"
    })
})

app.post("/createcard", (req, res) => {
    const { name, email, mobile, designation } = req.body;
    res.json({ name, email, mobile, designation });
})




app.listen(PORT, ()=>console.log(`server started at port ${PORT}`))