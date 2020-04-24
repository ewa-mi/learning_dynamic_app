const express = require("express");
const app = express();

app.get("/days", (req, res) => {
  const days = {
    yesterday: "express",
    today: "api",
  };
  res.send(days);
});
const port = 30000;

app.listen(port, console.log(`server started on: ${port}`));
