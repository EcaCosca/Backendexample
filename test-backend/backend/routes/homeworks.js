const express = require("express");
const homeworks = require("./homework.json");
const cors = require("cors");
let router = express.Router();
router.use(express.json());

router.use(cors());

router.get("/getHomework", (req, res) => {
  res.send(homeworks);
});

router.post("/post", (req, res) => {
  req.body.data;
  const homework = {
    id: homeworks.length + 1,
    title: req.body.data.title,
    link: req.body.data.link,
    description: req.body.data.description,
  };
  homeworks.push(homework);
  res.send(homeworks);
});

router.delete("/delete/:id", (req, res) => {
  let found = homeworks.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let targetIndex = homeworks.indexOf(found);
    homeworks.splice(targetIndex, 1);
    res.send(homeworks);
  } else {
    res.sendStatus(404);
  }
});

router.put("/put/:id", (req, res) => {
  let found = homeworks.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let update = {
      id: found.id,
      title: req.body.data.title,
      link: req.body.data.link,
      description: req.body.data.description,
    };
    let targetIndex = homeworks.indexOf(found);
    homeworks.splice(targetIndex, 1, update);
    res.send(homeworks);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;

// ,
