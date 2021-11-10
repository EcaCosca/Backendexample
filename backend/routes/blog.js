const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("blog.json", "utf8", (err, data) => {
    res.send(data);
  });
});

router.post("/", (req, res) => {
  fs.readFile("blog.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);

    let newPost = {
      id: arr.length + 1,
      title: req.body.title || "post" + (arr.length + 1),
      body: req.body.body,
      date: req.body.date,
    };
    arr.push(newPost);

    fs.writeFile("blog.json", JSON.stringify(arr), (err) => {
      res.json(arr);
    });
  });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);  
  fs.readFile("blog.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);
    
    if(arr.findIndex((e) => e.id === id) === -1) res.json("id not found")
    let index = arr.findIndex((e) => e.id === id);
    arr[index] = {
      id: id,
      title: req.body.title || "post" + (arr.length + 1),
      body: req.body.body,
      date: req.body.date,
    };

    fs.writeFile('blog.json', JSON.stringify(arr), (err) => {
        res.json(arr);
    })
  });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    
    fs.readFile("blog.json", "utf8", (err, data) => {
      let arr = JSON.parse(data);
      if(arr.findIndex((e) => e.id === id) === -1) res.json("id not found")

      arr = arr.filter((e) => e.id !== id);
  
      fs.writeFile('blog.json', JSON.stringify(arr), (err) => {
          res.json(arr);
      })
    });
  });

module.exports = router;
