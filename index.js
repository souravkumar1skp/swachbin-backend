const connectToMongo = require("./db");
const express = require("express");
// const bodyparser= require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// app.use(bodyparser.urlencoded({extended: true}));

app.use("/add", require("./routes/Locate"));
app.use("/user", require("./routes/SignUp"));
app.use("/search", require("./routes/history"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

connectToMongo();
