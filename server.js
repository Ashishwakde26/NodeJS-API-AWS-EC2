const express = require('express')
const app = express();
const dbconnect = require('./db');
const { registerUser, getAllUser } = require ('./controller/user.controller')

app.use(express.json());

dbconnect();


app.get('/', (req, res) => {
    res.send("API server is working successfully.")
})

app.get('/home', (req, res) => {
    res.json({
        message: "This is after updates with: CI/CD pipeline."
    })
})

app.post('/usercreate', registerUser);

app.get('/getAllUsers', getAllUser);

app.listen(3000, ()=> {
    console.log("Server is running on PORT:3000...")
})