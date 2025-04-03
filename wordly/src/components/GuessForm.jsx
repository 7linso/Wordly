import '../css/Form.css'
import Grid from './Grid'

import { useState } from 'react'

export default function GuessForm({ wordToGuess }) {
    const wordLength = 5
    const numOfTries = 5

    const [typedWord, setTypedWord] = useState('')
    const [tries, setTries] = useState(0)

    const [arrayOfTries, setArrayOfTries] = useState(Array(numOfTries).fill({ word: "_____", letterStatus: Array(wordLength).fill('default') }))

    const checkLettersStatus = () => {
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
        if (typedWord === wordToGuess) {
            console.log('congrats')
            setTries(0)
        } else {
            setTries(prevTries => prevTries + 1)
        }

        const newArrayOfTries = [...arrayOfTries]; 

        newArrayOfTries[tries] = {
            word: typedWord,
            letterStatus: checkLettersStatus()
        };
        setArrayOfTries(newArrayOfTries);
        console.log(newArrayOfTries)

        setArrayOfTries(newArrayOfTries)
        setTypedWord('')
    }
    
    return <>
        <form action="" onSubmit = { handleGuess } className="input-form">
            <input type="text" className="input" placeholder='min 5'
                value={typedWord} onChange={(e) => setTypedWord(e.target.value)} />

            <button type='submit' className="input-btn" disabled={typedWord.length !== wordLength}>Try</button>
        </form>

        <Grid arrayOfTries={arrayOfTries} />
    </>
}