let dbUsers = [
  {
      username: "kang",
      password: "123456",
      name: "Kang",
      email: "kang@student.utem.edu.my"
  },
  {
      username: "john",
      password: "123456",
      name: "John",
      email: "john@student.utem.edu.my"
  },
  {
      username: "ali",
      password: "123456",
      name: "Ali",
      email: "ali@student.utem.edu.my"
  },
]

function login(reqUsername,reqPassword){
  let matchUser = dbUsers.find(x => x.username == reqUsername)
 // console.log(matchUser)

  if(!matchUser) return "User not found!"
  if(matchUser.password == reqPassword){
      return matchUser
  }else{
      return "Invalid password"
  }
}

function register(reqUsername,reqPassword,reqName,reqEmail){
  dbUsers.push({
      username: reqUsername,
      password: reqPassword,
      name: reqName,
      email: reqEmail
  })
}



const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)

  let result=login(req.body.username, req.body.password)

  res.send(result)
})

//app.get('/', (req, res) => {
//  res.send('Hello UTeM!')
//})

//app.get('/Bye', (req, res) => {
//   res.send('Bye Bye UTeM!')
//  })

app.post('/register', (req, res) => {
  let result = register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
  )
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


