const express = require('express')
const app = express()
const fs =require('file-system')

app.use(express.json())
// -----------------------------------------------

const homework = require('./router/hm')
app.use('/homework', homework)

//------------------------------------------
const cors = require('cors')
app.use(cors())

// -------------------------------------------------

// app.get("/hi", (req, res) =>{
//     res.send('hh')
//   console.log("hi b")
// });


app.listen(8081,(err) =>{
    if(err){
        return    console.log(err)
    }
    console.log('listen port 8081')
})