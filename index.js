const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{res.send('ak')})

app.get('/login',(req,res)=>{res.send('<h1>please login at ashwikas code</h1>')
})

app.get('/instagram',(req,res)=>{res.send('<h2>ashwikssss</h2>')})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})