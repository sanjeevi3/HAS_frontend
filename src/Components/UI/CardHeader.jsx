const CardHeader=props=>{
    return(
        <div className="header">
                    <h5 className="font-weight-bold">{props.children}</h5>
                </div>
    )
}

export default CardHeader;