export default function Row({ wordObj }) {
    return <>
        <div className="row">
            {wordObj.word.split('').map((l, index) => (
                <div key={index} className={`letter ${wordObj.letterStatus[index]}`}>
                    <p>{l}</p>
                </div>
            ))}
        </div>
    </>
}