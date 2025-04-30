const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res)=> {
    res.send('_sujeet_17')
})

app.get('/coffee', (req,res) => {
    res.send('aaj ka')
})

app.get('/login', (req,res) => {
    res.send( '<h1> hii <h1>'
        
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


