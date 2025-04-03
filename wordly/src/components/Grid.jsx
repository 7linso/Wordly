import '../css/Grid.css'
import Row from './Row'

export default function Grid({ arrayOfTries }){
    
    return <>
        {arrayOfTries.map((word, id) => <Row word={word} key={id}/>)}
    </>
}