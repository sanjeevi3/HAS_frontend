const { default: Button } = require("./Button")
// footer component for card
/* 
    props
    button - name of the button
    buttonClick - button onclick handler
*/

const CardFooter = props => {
    console.log("CardFooter")
    return (
        <div className="footer">
            <div className="row justify-content-center">
                <Button buttonType={`${props.button === "Cancel" ? "danger" : "success"}`} click={props.buttonClick}>{props.button}</Button>
            </div>
        </div>
    )
}

export default CardFooter;