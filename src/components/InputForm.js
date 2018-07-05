import React, { Component } from 'react';

const InputForm = props => {
  const { handleSubmit, handleChange, value, title, btnVal } = props

  return (
  <div>
    <h2>{title}</h2>
    <input type="text" value={value} onChange={handleChange} />
    <button type="submit" onClick={handleSubmit}>
      {btnVal ? btnVal: 'Add'}
    </button>
  </div>
  )
}

export default InputForm
