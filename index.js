// const express = require('express');
// const app = express();

// app.listen(3000, ()=>{
//     console.log("APP is running successfully");
// })

const express = require('express');
const app = express();

// load config from new env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


// import routes for Todo API
const todoRoutes = require('./routes/todos')

// mount api routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})

// connect to the db
const dbConnect = require("./config/database");
dbConnect();

// default router
app.get('/', (req, res)=>{
    res.send(`<h1>This is homepage</h1>`)
})