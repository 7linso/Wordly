import { useState } from "react"

export default function SetupForm({ wordLength, setWordLength, numOfTries, setNumOfTries }) {
    const [tempWordLength, setTempWordLength] = useState(wordLength);
    const [tempNumOfTries, setTempNumOfTries] = useState(numOfTries);

    const handleSetGame = (e) => {
        e.preventDefault();
        setWordLength(tempWordLength);
        setNumOfTries(tempNumOfTries);
    };

    return (
        <form onSubmit={handleSetGame} className="input-form">
            <div className="">
                <label htmlFor="numOfLetters" className="input-label">Set Max Length:</label>
                <input type="text" id="numOfLetters" className="input set" placeholder="5"
                    value={tempWordLength} onChange={(e) => setTempWordLength(Number(e.target.value))}
                />
                <label htmlFor="numOfTries" className="input-label">Set Tries Limit:</label>
                <input type="text" id="numOfTries" className="input set" placeholder="5"
                    value={tempNumOfTries} onChange={(e) => setTempNumOfTries(Number(e.target.value))}
                />
            </div>

            <button className="input-btn" type="submit">Reset</button>
        </form>
    );
}
