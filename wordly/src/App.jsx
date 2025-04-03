
import Form from './components/Form'
import Grid from './components/Grid'
import './css/App.css'

import { useState } from 'react'

function App() {
  const [typedWord, setTypedWord] = useState('')

  return (
    <>
      <Form typedWord={typedWord} setTypedWord={setTypedWord}/>
      <Grid/>
    </>
  )
}

export default App
