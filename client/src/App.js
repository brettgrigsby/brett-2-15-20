import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from './components/SearchBar'
import Document from './components/Document'

const AppContainer = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 20px 15px;
`

const UploadButton = styled.button`
  background-color: #c6d4fa;
  border: 1px solid #000000;
  font-size: 28px;
  width: 100%;
  padding: 10px;
`

const DocumentCount = styled.div`
  font-size: 48px;
  margin: 10px 0;
`

const TotalSize = styled.div`
  font-size: 24px;
`

const docs = [
  { name: 'Doc1', size: 300000 },
  { name: 'Doc2', size: 400000 },
  { name: 'Doc3', size: 200000 },
]

function App() {

  const [documents, setDocuments] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log('triggered effect')
    setDocuments(docs)
  }, [searchText])

  const size = documents.reduce((acc, doc) => (acc + doc.size), 0)

  return (
    <AppContainer>
      <UploadButton>UPLOAD</UploadButton>
      <SearchBar value={searchText} setValue={setSearchText} />
      <DocumentCount>{documents.length} documents</DocumentCount>
      <TotalSize>Total size: {size}</TotalSize>
      { documents.map(doc => <Document key={doc.name + doc.size} doc={doc} />) }
    </AppContainer>
  )
}

export default App
