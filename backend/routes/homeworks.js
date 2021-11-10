const express = require("express")
let router = express.Router();

router.use(express.json());

// const hw = require('hw')
let fs = require('fs')

router.get('/', (req,res) => {
    fs.readFile('hw.json', 'utf8' , (err,data) => {
        res.send(data)
    })
    console.log("GET from homeworks");
    // res.send("homeworks works!")
})

router.post('/' , (req,res) => {
    fs.readFile('hw.json', 'utf8' , (err,data) => {
        let arr = JSON.parse(data);
        console.log(arr[0])
        // res.send(data)
        newData = {
            id: arr.length+1,
            title: req.body.title,
            link: req.body.link,
            description: req.body.description,
            technologies: req.body.technologies
        }
        arr.push(newData)
        fs.writeFile('hw.json', JSON.stringify(arr), (err)=>{
            res.json(arr);
        })
    })
})
module.exports = router ;