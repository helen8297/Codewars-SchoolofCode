const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const PORT = 5000;

app.use(cors());

app.get("/codewars/:username", async function(req, res) {
  const { username } = req.params;
  const response = await fetch(
    "https://www.codewars.com/api/v1/users/helen8297"
  );
  const data = await response.json();
  res.send({ payload: data });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
