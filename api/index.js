const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const documents = [
  { id: 1, name: 'Doc1', size: 300000 },
  { id: 2, name: 'Doc2', size: 400000 },
  { id: 3, name: 'Doc3', size: 200000 },
  { id: 4, name: 'DocBrown', size: 121000 },
  { id: 5, name: 'Captain Picard', size: 420000 },
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

app.post('/documents', (req, res) => {
  console.log('trying to create')
})

app.delete('/documents/:id', (req, res) => {
  console.log('trying to delete')
  console.log({ params: req.params })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
