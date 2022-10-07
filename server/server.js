require('dotenv').config({path: "./config.env"})
const express = require('express');
const connectDB = require('./config/mongoDB');
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

// connect mongodb
connectDB();

const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser())
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use("/api/auth", require('./routes/auth'))
app.use("/api/auth-admin", require('./routes/authAdmin'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const POST = process.env.POST || 5050

app.listen(POST, () => console.log(`Server running on post ${POST}`))