// This component is return for display page tittle

const CardHeader = props => {
    console.log("CardHeader")
    return (
        <div className="header">
            <h5 className="font-weight-bold">{props.children}</h5>
        </div>
    )
}

export default CardHeader;