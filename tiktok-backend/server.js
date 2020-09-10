const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 9000

app.get("/", (req, res) => {
  res.status(200).send("Hello World")
})

app.listen(port, () => console.log(`listening on localhost: ${port}`))
