import '../css/Form.css'

import { useState } from 'react'

export default function GuessForm({ wordToGuess, wordLength, arrayOfTries, setArrayOfTries, isCorrect, setIsCorrect, tries, setTries }) {

    const [typedWord, setTypedWord] = useState('')

    const updateLetterStatus = () => {
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
            letterStatus: updateLetterStatus()
        };
        setArrayOfTries(newArrayOfTries);
        console.log(newArrayOfTries)
        console.log(tries)

        setArrayOfTries(newArrayOfTries)
        setTypedWord('')

        if (typedWord === wordToGuess) {
            setIsCorrect(true)
        }
    }

    return <>
        {isCorrect && (<><h1>You Won!</h1><hr /></>)}
        {arrayOfTries.length > 0 && arrayOfTries[arrayOfTries.length - 1].word !== wordToGuess && arrayOfTries[arrayOfTries.length - 1].word !== '_'.repeat(wordLength) && (
            <><h1>You Lost!</h1><hr /></>
        )}

        <form action="" onSubmit={handleGuess} className="input-form">
            <input type="text" className="input" placeholder={`${wordLength} letters....`}
                value={typedWord} onChange={(e) => setTypedWord(e.target.value)}
                disabled={isCorrect || arrayOfTries.length > 0 && arrayOfTries[arrayOfTries.length - 1].word !== '_'.repeat(wordLength)}
            />

            <button
                type='submit' className="input-btn"
                disabled={typedWord.length !== wordLength || isCorrect || arrayOfTries.length > 0 && arrayOfTries[arrayOfTries.length - 1].word !== '_'.repeat(wordLength)}
            > Try
            </button>
        </form>
    </>
}