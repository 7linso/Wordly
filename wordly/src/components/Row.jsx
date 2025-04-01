export default function Row({word}) {
    return <>
        <div className="row">
            {word.split('').map((l, index) => (
                <div key={index} className="letter">
                    <p>{l}</p>
                </div>
            ))}
        </div>
    </>
}