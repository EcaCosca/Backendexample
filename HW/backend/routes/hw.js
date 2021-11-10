const express = require("express");
const router = express.Router();

router.use(express.json());

const fs = require("fs");

let jsonData = fs.readFileSync("./hwData.json");
let jsonObj = JSON.parse(jsonData);

//GET
router.get("/", (req, res) => {
  res.json(jsonObj);
});
//POST
router.post("/", (req, res) => {
  //create new obj with data
  let postData = [
    {
      id: jsonObj.length + 1,
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
    },
  ];
  //  merge the current Obj with the new Obj
  let newPost = { id: jsonObj.length + 1, ...req.body };
  jsonObj.push(newPost); // push new post

  //push in the current json file
  fs.writeFile("./hwData.json", JSON.stringify(jsonObj), (err) => {});

  //display message that indecate sucess
  res.json(jsonObj);
});

// PUT
router.put("/", (req, res) => {
  let index = jsonObj.findIndex((item) => item.id === req.body.id);
  // if the user enter wrong id
  if (index == -1) return res.send("The id is not exsist");
  //else
  let newPost = { id: jsonObj.length + 1, ...req.body };

  jsonObj[index] = newPost;

  fs.writeFile("./hwData.json", JSON.stringify(jsonObj), (err) => {
    if (err) {
      throw err;
    }
  });
  res.send(jsonObj);
});
// //DELETE
router.delete("/:id", (req, res) => {
  let index = jsonObj.findIndex((item) => item.id === parseInt(req.params.id));
  // if the user enter wrong id
  if (index == -1) return res.send("The id is not found");
  //else
  jsonObj.splice(index, 1);

  fs.writeFile("./hwData.json", JSON.stringify(jsonObj), (err) => {
    if (err) {
      throw err;
    }
  });
  res.send(jsonObj);
});

module.exports = router;
