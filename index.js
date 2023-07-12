const express = require("express")
const mongoose = require("mongoose")

const app = express()


app.get("/", (req, res) => {
  res.send("!")
})

app.listen(4000, () => {
  (async () => {
    await mongoose.connect(
      "mongodb+srv://main:CQBS71F1XJBg4W7L@cluster9.lua1z.mongodb.net/resto?retryWrites=true&w=majority",
    )

    console.log("Mongoose and express connected! 🚀")

  })()
})
