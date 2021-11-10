const express = require("express");
const homeworks = require("./homework.json");
// const cors = require("cors");
// app.use(cors());
let router = express.Router();
router.use(express.json());

router.get("/getHomework", (req, res) => {
  res.send(homeworks);
});

router.post("/post", (req, res) => {
  //   req.body;
  const homework = {
    id: homeworks.length + 1,
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
  };
  homeworks.push(homework);
  res.send(homeworks);
});

router.delete("/delete/:id", (req, res) => {
  id = req.params;
  let deletedHomework = homeworks.splice(id, 1);

  res.send(deletedHomework);
});

router.put("/put/:id", (req, res) => {
  let found = homeworks.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let update = {
      id: found.id,
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
    };
    let targetIndex = homeworks.indexOf(found);
    homeworks.splice(targetIndex, 1, update);
    res.send(homeworks);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
