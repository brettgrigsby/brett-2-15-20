import React from 'react'
import styled from 'styled-components'
import { prettySize } from '../utils'

const DocumentContainer = styled.div`
  width: 100%;
  border: 1px solid #000000;
  padding: 25px 30px 20px 30px;
  margin: 15px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (min-device-width: 500px) {
    width: 300px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65px;
  .doc-name {
    font-size: 28px;
    white-space: nowrap;
    max-width: 130px;
  }
  .doc-size {
    font-size: 18px;
  }
`

const DeleteButton = styled.button`
  background-color: #c6d4fa;
  border: 1px solid #000000;
  padding: 0 25px;
  font-size: 14px;
`

const truncateName = (name) => {
  if (name.length < 19) return name
  return name.slice(0, 16) + '...'
}

function Document({ doc, refetch }) {
  const handleDelete = async () => {
    try {
      const url = `http://localhost:5000/documents/${doc.id}`
      const response = await fetch(url, { method: 'DELETE' })
      console.log({ response })
      refetch()
    } catch(err) {
      console.log('Error trying to delete: ', err)
    }
  }

  return(
    <DocumentContainer>
      <Description>
        <span className="doc-name">{truncateName(doc.name)}</span>
        <span className="doc-size">{prettySize(doc.size)}</span>
      </Description>
      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
    </DocumentContainer>
  )
}

export default Document
