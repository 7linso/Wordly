import { useState } from 'react'
import '../css/OverlayCard.css'

export default function OverlayCard() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="overlay">
            <div className="overlay-content">
                <button className="close-btn" onClick={() => setIsVisible(false)}>
                    &times;
                </button>
                <h1>Welcome to Wordle!</h1>
                <hr/>
                <h1>How To Play</h1>
                <h2>Set your preferences</h2>
                <ul>
                    <li>The length of the word (e.g. 4, 5, 6 letters, etc.)</li>
                    <li>The number of attempts you get to guess it</li>
                </ul>
                <h2>Input Rules</h2>
                <ul>
                    <li>Only English letters (A–Z) are allowed</li>
                    <li>No numbers, symbols, or empty guesses</li>
                </ul>
                <h2> Feedback System</h2>
                <ul>
                    <li>🟩Green — Correct letter in the correct position</li>
                    <li>🟨Yellow — Correct letter in the wrong position</li>
                    <li>🟥Red — Letter is not in the word at all</li>
                </ul>
            </div>
        </div>
    )
}
