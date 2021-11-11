const express = require('express')
const Router = express.Router()
const fs =require('file-system')
// const { append } = require('vary')
const hws =require ('../hw.json')

// ---------------------------------------------------

Router.get('/getHW', (req, res) =>{
    console.log(res)
    res.send(JSON.stringify(hws))
})

// ---------------------------------------------------

Router.post('/postHW', (req, res) =>{
    
    let hw ={
        id:hws.length +1,
        title:req.body.title,
        link:req.body.link,
        description:req.body.description,
        technologies:req.body.technologies
    }
    hws.push(hw)
    fs.writeFile("hw.json", `${JSON.stringify(hws)}`, (err) =>{
        if(err) throw err;
        res.send(hw)
    })
})

// --------------------------------------------------------------------
    
    // Router.put('/put', (req, res) => {
    //     let hw = hws.filter((hw)=>{
    //         return(
    //             hw.id == req.body.id 
    //         )
    //     })
    //     hw[0].title=req.body.title
    //     hw[0].link=req.body.link
    //     hw[0].description=req.body.description
    //     hw[0].technologies=req.body.technologies
        
    //     fs.writeFile("hw.json", `${JSON.stringify(hws)}`,(err)=>{
    //         if(err) throw err;
    //         res.send(hw)
    //     })
    // })    

// ------------------------------------------------------------------------

 module.exports = Router