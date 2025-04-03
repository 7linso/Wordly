import '../css/Form.css'
import Grid from './Grid'

import { useState } from 'react'

export default function GuessForm({ wordToGuess }) {
    const [typedWord, setTypedWord] = useState('')
    const [tries, setTries] = useState(0)

    const [arrayOfTries, setArrayOfTries] = useState(Array(5).fill("_____"))


    const handleGuess = (e) => {
        e.preventDefault()
        if (typedWord === wordToGuess) {
            console.log('congrats')
            setTries(0)
        } else {
            setTries(prevTries => prevTries + 1)
        }
        const newArrayOfTries = [...arrayOfTries]
        newArrayOfTries[tries] = typedWord

        setArrayOfTries(newArrayOfTries)
        setTypedWord('')
    }

    return <>
        <form action="" onSubmit={handleGuess} className="input-form">
            <input type="text" className="input" placeholder='min 5'
                value={typedWord} onChange={(e) => setTypedWord(e.target.value)} />

            <button type='submit' className="input-btn" disabled={typedWord.length !== 5}>Try</button>
        </form>

        <Grid arrayOfTries={arrayOfTries} wordToGuess={wordToGuess} typedWord={typedWord}/>
    </>
}