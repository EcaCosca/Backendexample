const express = require("express");
const router = express.Router();
const data = require("../data.json");
const fs = require("fs");
// router.use(express.json());
router.get("/get", (req, res) => {
  res.json(data);
});
router.post("/post", (req, res) => {
  const item = {
    id: data.length + 1,
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
    technologies: req.body.technologies,
  };
  data.push(item);
  fs.writeFile("./data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
  res.json(data);
});
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  data.forEach((e) => {
    if (e.id > id) {
      e.id = e.id - 1;
    }
  });
  data.splice(id - 1, 1);
  fs.writeFile("./data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
  res.json(data);
});
router.put("/put/:id", (req, res) => {
  const id = req.params.id;

  data.forEach((e) => {
    if (e.id == id) {
      e.title = req.body.title;
      e.link = req.body.link;
      e.description = req.body.description;
      e.technologies = req.body.technologies;
    }
  });

  fs.writeFile("./data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
  res.json(data);
});
module.exports = router;
