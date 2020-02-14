import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #000000;
  width: 100%;
  font-size: 28px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
`

function SearchBar({ value, setValue }) {
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return(
    <StyledInput
      type="text"
      placeholder="Search documents..."
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchBar
