const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

dotenv.config( { path: './env/.env' } )

app.set('view engine', 'ejs')

app.use('/', require('./routes/router'))

app.listen(3000, () => {
    console.log("Server is running on port 3000 http://localhost:3000")
    }
)

