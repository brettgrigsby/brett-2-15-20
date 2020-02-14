const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => res.json({
  msg: 'The API is ready'
}))

app.get('/documents', (req, res) => res.json([
  { name: 'Doc1', size: 300000 },
  { name: 'Doc2', size: 400000 },
  { name: 'Doc3', size: 200000 },
  { name: 'DocBrown', size: 121000 },
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
