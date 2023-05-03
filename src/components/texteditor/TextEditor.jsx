import React from 'react';
import Box from '@mui/material/Box';
import "./textEditor.css"

const TextEditor = () => {
  return (
    <section className='texteditor___container'>
      <Box className="container" contentEditable></Box>
    </section>
  )
}

export default TextEditor