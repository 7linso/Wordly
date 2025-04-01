import '../css/Grid.css'
import Row from './Row'

export default function Grid(){
    const arrayOfTries= Array(5).fill("_____")

    return <>
        {arrayOfTries.map(word => <Row word={word}/>)}
    </>
}