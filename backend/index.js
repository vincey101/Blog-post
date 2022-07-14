const express = require("express")
const cors = require("cors")
const connection = require("./db")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const app = express()
require("dotenv").config()


//database connection
connection()

//middlewears
app.use(express.json())
app.use(cors())


//routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

//port
const port = process.env.PORT || 8081
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

console.log(`Server up`)

