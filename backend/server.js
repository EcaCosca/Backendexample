const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const PORT = 8000;
const homework = require('./routes/homeworks')
const blog  = require('./routes/blog')

app.use('/homework',homework)
app.use('/blog',blog)


app.listen(PORT, (err) => {
  if (err) console.log("ERROR", err);
  console.log("listening on PORT" + PORT);
});
