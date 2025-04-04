import '../css/Form.css'
import Grid from './Grid'

import { useState } from 'react'

export default function GuessForm({ wordToGuess, wordLength, arrayOfTries, setArrayOfTries }) {

    const [typedWord, setTypedWord] = useState('')
    const [tries, setTries] = useState(0)


    const checkLetterStatus = () => {
        let checkWord = wordToGuess.split('')
        let letterStatus = []

        typedWord.split('').forEach((letter, index) => {
            if (checkWord[index] === letter) {
                letterStatus[index] = 'correct'
                checkWord[index] = '.'
            } else if (checkWord.includes(letter)) {
                letterStatus[index] = 'present'
                checkWord[index] = '.'
            } else {
                letterStatus[index] = 'incorrect'
            }
        })
        return letterStatus
    }

    const handleGuess = (e) => {
        e.preventDefault()
        setTries(prevTries => prevTries + 1)

        const newArrayOfTries = [...arrayOfTries];

        newArrayOfTries[tries] = {
            word: typedWord,
            letterStatus: checkLetterStatus()
        };
        setArrayOfTries(newArrayOfTries);
        console.log(newArrayOfTries)

        setArrayOfTries(newArrayOfTries)
        setTypedWord('')
    }

    return <>
        <form action="" onSubmit={handleGuess} className="input-form">
            <input type="text" className="input" placeholder={`${wordLength} letters....`}
                value={typedWord} onChange={(e) => setTypedWord(e.target.value)} />

            <button type='submit' className="input-btn" disabled={typedWord.length !== wordLength}>Try</button>
        </form>

        <Grid arrayOfTries={arrayOfTries} />
    </>
}