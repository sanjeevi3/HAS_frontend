const { default: Button } = require("./Button")

const CardFooter=props=>{
    return(
        <div className="footer">
            <div className="row justify-content-center">
    <Button buttonType={`${props.button==="Cancel"?"danger":"success"}`} click={props.buttonClick}>{props.button}</Button>
            </div>
        </div>
    )
}

export default CardFooter;