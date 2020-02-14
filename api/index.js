const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const documents = [
  { name: 'Doc1', size: 300000 },
  { name: 'Doc2', size: 400000 },
  { name: 'Doc3', size: 200000 },
  { name: 'DocBrown', size: 121000 },
  { name: 'Captain Picard', size: 420000 },
]

const nameFilter = (searchText) => (doc) => doc.name.toLowerCase().includes(searchText.toLowerCase())

app.use(cors())

app.get('/', (req, res) => res.json({
  msg: 'The API is ready'
}))

app.get('/documents', (req, res) => {
  const { searchText } = req.query
  const filtered = searchText ? documents.filter(nameFilter(searchText)) : documents
  res.json(filtered)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
