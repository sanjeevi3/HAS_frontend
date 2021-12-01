import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

// custom card of my project
/* 
    props
    tittle - tittle of the card
    button - name of the button
    buttonClick - button onclick handler
*/
const Card = props => {
    console.log("Card")
    return (
        <>
            <CardHeader>{props.tittle}</CardHeader>
            <CardBody>
                {props.children}
            </CardBody>
            {props.button && <CardFooter button={props.button} buttonClick={props.buttonClick} />}
        </>
    )
}

export default Card;