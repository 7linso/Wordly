
import GuessForm from './components/GuessForm'
import SetupForm from './components/SetupForm'
import Grid from './components/Grid'

import './css/App.css'

import { useState, useEffect } from "react"

function App() {

  const wordToGuess = 'react'

  const [isCorrect, setIsCorrect] = useState(false)
  const [wordLength, setWordLength] = useState(5)
  const [numOfTries, setNumOfTries] = useState(5)
  const [arrayOfTries, setArrayOfTries] = useState([])

  useEffect(() => {
    const emptyTries = Array.from({ length: numOfTries }, () => ({
      word: '_'.repeat(wordLength),
      letterStatus: []
    }));
    setArrayOfTries(emptyTries)
  }, []);

  return (
    <>
      <SetupForm wordLength={wordLength} setWordLength={setWordLength}
        numOfTries={numOfTries} setNumOfTries={setNumOfTries}
        setIsCorrect={setIsCorrect} setArrayOfTries={setArrayOfTries}/>
      <hr />
      <GuessForm wordToGuess={wordToGuess} wordLength={wordLength} 
        arrayOfTries={arrayOfTries} setArrayOfTries={setArrayOfTries}
        isCorrect={isCorrect} setIsCorrect={setIsCorrect}/>
      <Grid arrayOfTries={arrayOfTries} />
    </>
    
  )
}

export default App
