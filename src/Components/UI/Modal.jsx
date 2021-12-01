import { connect } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../store/actions"

const { default: BackDrop } = require("./BackDrop")
const { default: Button } = require("./Button")

// modal of my project
/* 
    props
    open - status of modal is open or close
    tittle - tittle of modal
    success - success button name
    successClick - success button onclick function
    failure - failure button name
    failureClick - failure button onclick function
*/

const Modal = props => {
    console.log("modal")
    return (
        <>
            {props.open && <BackDrop />}
            <div className={`my-modal ${props.open ? "modal-show" : "modal-hide"}`}>
                <div className="header">
                    <h3>{props.tittle}</h3>
                </div>
                <div className="body">
                    {props.children}
                </div>
                <div className="footer row justify-content-center">

                    {props.success && <div className=" mr-2">
                        <Button buttonType="success" click={props.successClick}>{props.success}</Button>
                    </div>}
                    {props.failure && <div className="">
                        <Button buttonType="danger" click={props.failureClick}>{props.failure}</Button>
                    </div>}


                </div>
            </div>
        </>
    )
}


export default Modal;