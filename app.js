const express = require("express")
const app = express()
const port = 3000;


// Register the public folder and send to client
app.use(express.static(__dirname + "/public"))

// Create the different routes for the website
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/home.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/works.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/about.html")
})

app.listen(port, () => {
    
})

