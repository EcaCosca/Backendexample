const express = require("express");
const cors = require("cors");
const posts = require("./routers/posts");
const homeworks = require('./routers/homeworks')
const app = express();
const port = 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use("/posts", posts);
app.use("/homeworks", homeworks);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
