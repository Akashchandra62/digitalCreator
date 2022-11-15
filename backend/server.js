import express from 'express'
import cors from "cors"
import User from './db/userSchema.js'
import bodyParser from 'body-parser';
import {dbConnection}  from './db/connection.js';
import multer from 'multer';
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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/getuser", (req, res) => {
    res.json({
        message: "success"
    })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./db/images");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,  fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

app.post("/createcard", upload.single('images'), (req, res) => {
    const { name, email, mobile, designation } = req.body;
    res.json({ name, email, mobile, designation });
})




app.listen(PORT, ()=>console.log(`server started at port ${PORT}`))