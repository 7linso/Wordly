import '../css/Form.css'

export default function Form({ typedWord, setTypedWord }) {

    return <>
        <form action="" className="input-form">
            <input  type="text" className="input" placeholder='min 5' 
                    value={typedWord} onChange={(e) => setTypedWord(e.target.value)}/>

            <button type='submit' className="input-btn" disabled={typedWord.length !== 5}>Try</button>
        </form>
        <p>{typedWord}</p>
    </>
}