const express = require("express");
const app = express();
const blogRotute = require("./routes/blog");
const postRoute = require("./routes/hw");
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));
app.use("/blog", blogRotute);
app.use("/hw", postRoute);

app.listen(3001);
