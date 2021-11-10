const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

// get all posts
router.get("/", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/posts.json", "utf-8"));
  return res.json(data);
});

// add new post
router.post("/", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/posts.json", "utf-8"));
  let newPost = { id: data.length + 1, ...req.body };
  data.push(newPost); // push new post
  await fs.writeFile("data/posts.json", JSON.stringify(data));
  return res.json(newPost);
});

// update post
router.put("/:id", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/posts.json", "utf-8"));
  const index = data.findIndex((i) => i.id === parseInt(req.params.id)); // get current
  data[index] = { ...data[index], ...req.body }; // update data with body data
  console.log(data);
  let result = await fs.writeFile("data/posts.json", JSON.stringify(data));
  console.log(result);
  return res.json(data[index]);
});

// update post
router.delete("/:id", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/posts.json", "utf-8"));
  const newData = data.filter((i) => i.id !== parseInt(req.params.id));
  await fs.writeFile("data/posts.json", JSON.stringify(newData));
  return res.json(newData);
});

module.exports = router;
