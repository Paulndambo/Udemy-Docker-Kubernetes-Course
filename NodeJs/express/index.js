const express = require("express");
const process = require("process");
const fs = require("fs")
app = express()

process.on('SIGINT', () => {
    console.log("Application is being interrupted!!")
    process.exit(0);
})

process.on("SIGTERM", () => {
    console.log("Application is being terminated")
    process.exit(0);
})

app.get("/", (req, res) => {
    res.send("Hello World from express APP!!!")
})

app.post("/file", (req, res) => {
    console.log(req.params)
    res.send("Hello World")
})

app.listen(3000)