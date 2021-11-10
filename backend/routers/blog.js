const express = require("express");
const router = express.Router();
const blogs = require("../blogs.json");
const fs = require("fs");
// ------------------- GET
router.get("/get", (req, res) => {
  res.json(blogs);
});
// ------------------- POST
router.post("/post", (req, res) => {
  const item = {
    id: blogs.length + 1,
    title: req.body.title,
    body: req.body.body,
  };
  blogs.push(item);
  fs.writeFile("./blogs.json", JSON.stringify(blogs), (err) => {
    if (err) throw err;
  });
  res.json(blogs);
});
// ------------------- DELETE
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  blogs.forEach((e) => {
    if (e.id > id) {
      e.id = e.id - 1;
    }
  });
  blogs.splice(id - 1, 1);
  fs.writeFile("./blogs.json", JSON.stringify(blogs), (err) => {
    if (err) throw err;
  });
  res.json(blogs);
});
// -------------------- PUT
router.put("/put/:id", (req, res) => {
  const id = req.params.id;

  blogs.forEach((e) => {
    if (e.id == id) {
      e.title = req.body.title;
      e.body = req.body.body;
    }
  });

  fs.writeFile("./blogs.json", JSON.stringify(blogs), (err) => {
    if (err) throw err;
  });
  res.json(blogs);
});
module.exports = router;
