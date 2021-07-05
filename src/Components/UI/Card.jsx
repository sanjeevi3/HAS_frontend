import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

const Card =props=>{
    return(
        <>
            <CardHeader>{props.tittle}</CardHeader>
            <CardBody>
                {props.children}
            </CardBody>
           {props.button&& <CardFooter button={props.button} buttonClick={props.buttonClick}  />}
        </>
    )
}

export default Card;