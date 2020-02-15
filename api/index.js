const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const fs = require('fs')

const dir = './uploads'
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

const PATH = './uploads/'
const upload = multer({ storage })
const port = 5000

const nameFilter = (searchText) => (doc) => doc.name.toLowerCase().includes(searchText.toLowerCase())
const nameAndId = (fileName) => {
  const splitName = fileName.split('-')
  const lastIndex = splitName.length - 1
  return [splitName.slice(0, lastIndex).join('-'), splitName[lastIndex]]
}

app.use(cors())

app.get('/', (req, res) => res.json({
  msg: 'The API is ready'
}))

app.get('/documents', (req, res) => {
  const files = fs.readdirSync(PATH)
  let documents = []
  for (let file of files) {
    const size = fs.statSync(PATH + file).size
    const [name, id] = nameAndId(file)
    documents.push({ id, name, size })
  }
  const { searchText } = req.query
  const filtered = searchText ? documents.filter(nameFilter(searchText)) : documents
  res.json(filtered)
})

app.post('/documents', upload.single('imageFile'), (req, res) => {
  res.json({ msg: 'success' })
})

app.delete('/documents/:id', (req, res) => {
  console.log({ params: req.params })
  const { id } = req.params
  const files = fs.readdirSync(PATH)
  const file = files.filter(f => nameAndId(f)[1] === id)
  fs.unlinkSync(PATH + file)
  res.json({ msg: 'success' })
})

app.listen(port, () => console.log(`API listening on port ${port}!`))
