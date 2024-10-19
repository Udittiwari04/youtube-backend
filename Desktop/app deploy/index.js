require('dotenv').config()
console.log("app--deploy");

const express = require('express')//module syntax 
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('udit@1301')

})
app.get("/login",(req,res)=>{
    res.send('<h1>please login at deploy-app</h1>')
})
app.get("/youtube",(req,res)=>{
  res.send('<h2>watch the video on youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})