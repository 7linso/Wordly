
import GuessForm from './components/GuessForm'
import SetupForm from './components/SetupForm'
import Grid from './components/Grid'
import OverlayCard from './components/OverlayCard'
import Navbar from './components/Navbar'


import './css/App.css'

import { useState, useEffect } from "react"

function App() {
  const [wordToGuess, setWordToGuess] = useState('react')

  const [isCorrect, setIsCorrect] = useState(false)
  const [wordLength, setWordLength] = useState(5)
  const [numOfTries, setNumOfTries] = useState(5)
  const [arrayOfTries, setArrayOfTries] = useState([])
  const [tries, setTries] = useState(0)

  async function fetchWord(wordLength) {
    try {
      const res = await fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
      const data = await res.json();
      const word = data[0] || 'react';
      setWordToGuess(word.toLowerCase());
      console.log(word)
    } catch (error) {
      console.error("Failed to fetch word:", error);
      setWordToGuess('react');
    }
  }

  useEffect(() => {
    fetchWord(wordLength);

    const emptyTries = Array.from({ length: numOfTries }, () => ({
      word: '_'.repeat(wordLength),
      letterStatus: []
    }));
    setArrayOfTries(emptyTries)
  }, []);

  return (
    <>
      <Navbar/>
      <OverlayCard />
      <h1 className='logo'>Wordle</h1>
      <SetupForm wordLength={wordLength} setWordLength={setWordLength}
        numOfTries={numOfTries} setNumOfTries={setNumOfTries}
        setIsCorrect={setIsCorrect} setArrayOfTries={setArrayOfTries}
        fetchWord={fetchWord} setTries={setTries} />
      <hr />
      <GuessForm wordToGuess={wordToGuess} wordLength={wordLength}
        arrayOfTries={arrayOfTries} setArrayOfTries={setArrayOfTries}
        isCorrect={isCorrect} setIsCorrect={setIsCorrect}
        tries={tries} setTries={setTries} />
      <Grid arrayOfTries={arrayOfTries} />
    </>

  )
}

export default App
