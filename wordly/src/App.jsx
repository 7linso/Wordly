
import GuessForm from './components/GuessForm'
import SetupForm from './components/SetupForm'
import './css/App.css'

import { useState, useEffect } from "react"

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const wordToGuess = 'react'

  const [wordLength, setWordLength] = useState(5)
  const [numOfTries, setNumOfTries] = useState(5)

  // const [arrayOfTries, setArrayOfTries] = useState(Array(numOfTries).fill({ word: "_____", letterStatus: Array(wordLength).fill('default') }))

  const [arrayOfTries, setArrayOfTries] = useState([]);

  useEffect(() => {
    const emptyTries = Array(numOfTries).fill({ word: '_'.repeat(wordLength), letterStatus: [] });
    setArrayOfTries(emptyTries);
  }, [wordLength, numOfTries]); 

  return (
    <>
      <SetupForm wordLength={wordLength} setWordLength={setWordLength}
        numOfTries={numOfTries} setNumOfTries={setNumOfTries}
        setIsGameStarted={setIsGameStarted}/>
      <hr />
      <GuessForm wordToGuess={wordToGuess} wordLength={wordLength} 
        arrayOfTries={arrayOfTries} setArrayOfTries={setArrayOfTries}/>
        
    </>
    
  )
}

export default App
