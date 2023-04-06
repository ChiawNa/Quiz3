const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)

  res.send('login')
})

app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/Bye', (req, res) => {
    res.send('Bye Bye UTeM!')
  })

app.get('/register', (req, res) => {
    res.send('Account Created!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})