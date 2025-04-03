
import GuessForm from './components/GuessForm'
import './css/App.css'


function App() {
  const wordToGuess = 'react'

  return (
    <>
      <GuessForm wordToGuess={wordToGuess}/>

    </>
  )
}

export default App
