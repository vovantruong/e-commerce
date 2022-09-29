require('dotenv').config({path: "./config.env"})
const express = require('express');
const connectDB = require('./config/mongoDB');

connectDB();

const app = express();

app.use(express.json())

app.use("/api/auth", require('./routes/auth'))
app.use("/api/auth-admin", require('./routes/authAdmin'))

const POST = process.env.POST || 5050

app.listen(POST, () => console.log(`Server running on post ${POST}`))