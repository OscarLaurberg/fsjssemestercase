require('dotenv').config();
import express from "express";
import path from "path";
const app = express();


app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

app.get("/api/dummy2", (req, res) => {
  res.json({ msg: "Hello2" })
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


