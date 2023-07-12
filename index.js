const express = require("express")
const mongoose = require("mongoose")

const app = express()


app.get("/", async (req, res) => {
  const a = await mongoose.connection.db.listCollections().toArray()
  
  res.send(JSON.stringify(a.map(e => e.name)))
})

app.listen(4000, () => {
  (async () => {
    await mongoose.connect(
      "mongodb+srv://main:CQBS71F1XJBg4W7L@cluster9.lua1z.mongodb.net/resto?retryWrites=true&w=majority",
    )

    console.log("Mongoose and express connected! 🚀")

  })()
})
