const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/", (req, res) => {
  res.send("!")
})

app.listen(4000, () => { console.log('server running')})