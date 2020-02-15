import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchBar from './components/SearchBar'
import Document from './components/Document'

const AppContainer = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 20px 15px;
  font-family: 'Roboto', sans-serif;
`

const UploadButton = styled.button`
  background-color: #c6d4fa;
  border: 1px solid #000000;
  font-size: 28px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  @media only screen and (min-device-width: 500px) {
    width: 200px;
  }
`

const DocumentCount = styled.div`
  font-size: 48px;
  margin: 10px 0;
  @media only screen and (min-device-width: 500px) {
    margin: 0;
  }
`

const TotalSize = styled.div`
  font-size: 24px;
  @media only screen and (min-device-width: 500px) {
    margin-bottom: 6px;
  }
`

const ActionBar = styled.div`
  @media only screen and (min-device-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`

const Stats = styled.div`
  @media only screen and (min-device-width: 500px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`

const Documents = styled.div`
  @media only screen and (min-device-width: 500px) {
    display: inline-grid;
    grid-column-gap: 30px;
    grid-template-columns: auto auto auto;
  }
`

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

function App() {
  const fileInput = useRef(null)
  const [documents, setDocuments] = useState([])
  const [searchText, setSearchText] = useState('')
  const [uploads, setUploads] = useState(0)

  useEffect(() => {
    async function fetchDocuments() {
      try {
        let url = 'http://localhost:5000/documents'
        if (searchText) url = url + '?searchText=' + searchText
        const response = await fetch(url)
        const docs = await response.json()
        setDocuments(docs)
      } catch (err) {
        console.log('failed to fetch documents')
      }
    }
    fetchDocuments()
  }, [searchText, uploads])

  const triggerUpload = () => {
    fileInput.current.click()
  }

  const handleUploadFile = async (e) => {
    const { files } = e.currentTarget
    const formData = new FormData()
    formData.append('imageFile', files[0])

    await fetch('http://localhost:5000/documents', {
      method: 'POST',
      body: formData
    })

    setUploads(uploads + 1)
  }

  const size = documents.reduce((acc, doc) => (acc + doc.size), 0)

  return (
    <AppContainer>
      <ActionBar>
        <UploadButton onClick={triggerUpload}>UPLOAD</UploadButton>
        <SearchBar value={searchText} setValue={setSearchText} />
      </ActionBar>
      <Stats>
        <DocumentCount>{documents.length} documents</DocumentCount>
        <TotalSize>Total size: {size}</TotalSize>
      </Stats>
      <Documents>
        { documents.map(doc => <Document key={doc.id} doc={doc} />) }
      </Documents>
      <HiddenInput
        ref={fileInput}
        type="file"
        accept="image/png,image/jpg"
        onChange={handleUploadFile}
      />
    </AppContainer>
  )
}

export default App
