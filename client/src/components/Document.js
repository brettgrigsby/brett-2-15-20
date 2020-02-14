import React from 'react'
import styled from 'styled-components'

const DocumentContainer = styled.div`
  width: 100%;
  border: 1px solid #000000;
  padding: 15px 30px;
  margin: 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  .doc-name {
    font-size: 28px;
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

function Document({ doc }) {
  return(
    <DocumentContainer>
      <Description>
        <span className="doc-name">{doc.name}</span>
        <span className="doc-size">{doc.size}</span>
      </Description>
      <DeleteButton>delete</DeleteButton>
    </DocumentContainer>
  )
}

export default Document
