const express = require("express");
const path = require("path");
const urlRoute = require("./routes/urlRouter");
const staticRoute = require("./routes/staticRouter");
const connectToMongoDb = require("./connect");
const app = express();

const PORT = 4040;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() => {
  console.log("Mongodb connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
