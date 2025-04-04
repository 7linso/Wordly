
import GuessForm from './components/GuessForm'
import SetupForm from './components/SetupForm'
import Grid from './components/Grid'

import './css/App.css'

import { useState, useEffect } from "react"

function App() {

  const wordToGuess = 'react'

  const [wordLength, setWordLength] = useState(5)
  const [numOfTries, setNumOfTries] = useState(5)
  const [arrayOfTries, setArrayOfTries] = useState([]);

  useEffect(() => {
    const emptyTries = Array(numOfTries).fill({ word: '_'.repeat(wordLength), letterStatus: [] });
    setArrayOfTries(emptyTries);
  }, [wordLength, numOfTries]); 

  return (
    <>
      <SetupForm wordLength={wordLength} setWordLength={setWordLength}
        numOfTries={numOfTries} setNumOfTries={setNumOfTries}/>
      <hr />
      <GuessForm wordToGuess={wordToGuess} wordLength={wordLength} 
        arrayOfTries={arrayOfTries} setArrayOfTries={setArrayOfTries}/>
      <Grid arrayOfTries={arrayOfTries} />
    </>
    
  )
}

export default App
