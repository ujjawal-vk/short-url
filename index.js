const express = require("express");
const urlRoute = require("./routes/urlRouter");
const connectToMongoDb = require("./connect");
const app = express();

const PORT = 4040;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() => {
  console.log("Mongodb connected");
});

app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
