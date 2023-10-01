const express = require('express')
const app = express()

const PORT = 4000

app.get('/hello',(req,res)=>{
    res.status(200).send('hello express js')
})



app.get('/user', (req, res) => {
    
  res.json(req.query) 
  
 })

 app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.send(`welcome ${firstname} ${lastname}`);
  });



app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})