const express = require("express");
const app = express();

app.get("/days", (req, res) => {
  const days = {
    monday: "express",
    tuesday: "api",
    wednesday: "git",
    thursday: "react",
  };
  res.send(days);
});
const port = 30000;

app.listen(port, console.log(`server started on: ${port}`));
