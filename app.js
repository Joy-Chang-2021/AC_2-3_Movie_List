const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('movie page')
})

app.listen(port, () => {
  console.log(`this page is running by http://localhost:${port}`)
})