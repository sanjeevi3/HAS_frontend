// body of the card

const CardBody = props => {
    console.log("CardBody")
    return (
        <div className="body">
            {props.children}
        </div>
    )
}

export default CardBody;