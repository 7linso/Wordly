import '../css/Grid.css'
import Row from './Row'

export default function Grid({ arrayOfTries }){
    
    return <>
        {arrayOfTries.map((wordObj, id) => <Row wordObj={wordObj} key={id}/>)}
    </>
}