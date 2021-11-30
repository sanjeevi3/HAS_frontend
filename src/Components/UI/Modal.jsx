import { connect } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../store/actions"

const { default: BackDrop } = require("./BackDrop")
const { default: Button } = require("./Button")

const Modal=props=>{
   
    return(
       <>
           {props.open&&<BackDrop />}
           <div className={`my-modal ${props.open?"modal-show":"modal-hide"}`}>
            <div className="header">
                <h3>{props.tittle}</h3>
            </div>
            <div className="body">
                {props.body}
            </div>
            <div className="footer row justify-content-center">
               
               {props.success&& <div className=" mr-2">
                <Button buttonType="success" click={props.successClick}>{props.success}</Button>
                </div>}
                {props.failure&&<div className="">
                <Button buttonType="danger" click={props.failureClick}>{props.failure}</Button>
                </div>}
               
               
            </div>
        </div>
       </>
    )
}


export default Modal;