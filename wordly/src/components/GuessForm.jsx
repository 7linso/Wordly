import '../css/Form.css'

import { useState } from 'react'

export default function GuessForm({ wordToGuess, wordLength, arrayOfTries, setArrayOfTries }) {

    const [typedWord, setTypedWord] = useState('')
    const [tries, setTries] = useState(0)


    const checkLetterStatus = () => {
        const checkWord = wordToGuess.split('')
        const letterStatus = Array(wordToGuess.length).fill('incorrect')
        const usedIndexes = new Set()

        typedWord.split('').forEach((letter, index) => {
            if (checkWord[index] === letter) {
                letterStatus[index] = 'correct'
                checkWord[index] = null
                usedIndexes.add(index)
            }
        });

        typedWord.split('').forEach((letter, index) => {
            if (letterStatus[index] === 'correct') return;

            const foundIndex = checkWord.findIndex((l, i) => l === letter && !usedIndexes.has(i))
            if (foundIndex !== -1) {
                letterStatus[index] = 'present'
                checkWord[foundIndex] = null
                usedIndexes.add(foundIndex)
            }
        });

        return letterStatus
    };


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
    </>
}