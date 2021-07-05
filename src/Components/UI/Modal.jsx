import { connect } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../store/actions"

const { default: BackDrop } = require("./BackDrop")
const { default: Button } = require("./Button")

const Modal=props=>{
    const history=useHistory()
    let modal 
    const modalClose=()=>{
        alert()
        props.updateModal(null)
    }
    switch (props.modal) {
        case "success add service":
            modal= {
                tittle:"Success",
                body:"your service was added successfully. please wait for service man confirmation",
                successButton:"OK",
                successButtonClick:modalClose,
            }
            break;
        case "confirm service":
            modal={
                tittle:"Service Confirmation",
                body:"Your service cost is 200 rupee. this is ok for you ?",
                successButton:"Confirm",
                failureButton:"Cancel",
                successButtonClick:()=>props.updateServiceStatus(props.serviceId,"OP"),
                failureButtonClick:()=>props.updateModal("cancel service")
            }
            break;
        case "success confirm service":
            alert()
            modal={
                tittle:"Success",
                body: "your Service was confirmed successfully.your service process is start now. thank you!",
                successButton:"OK",
                successButtonClick:modalClose
            }
            break;
        case "cancel service":
            modal={
                tittle:"Service Cancellation",
                body:"if you cancel the service will you pay 50 rupeee ?",
                successButton:"Back",
                failureButton:"Pay",
                successButtonClick:()=>props.updateModal("confirm service"),
                failureButtonClick:()=>props.updateServiceStatus(props.serviceId,"CL")
            }
            break
        case "success cancel service":
            modal={
                tittle:"Success",
                body: "your Service was successfully canceled !",
                successButton:"OK",
                successButtonClick:modalClose
            }
            break;
        case "pay sevice":
            modal={
                tittle:"Pay Service",
                body: "Your service was finished now you pay 200 rupee",
                successButton:"Pay",
                successButtonClick:()=>props.updateServiceStatus(props.serviceId,"CD")
            }
            break;
        case "success pay service":
            modal={
                tittle:"Success",
                body: "your Service pay was transaction successfully. thank you calling HAS",
                successButton:"OK",
                successButtonClick:modalClose
            }
            break;
        case "success login":
            modal={
                tittle:"Success",
                body: "your account was login successfully",
                successButton:"OK",
                successButtonClick:()=>{
                    modalClose()
                   // history.replace("profile")
                }
            }
            break;
        default:
            modal={
                tittle:null,
                body:null,
            }
            break;
    }
   
    return(
       <>
           {props.modal&&<BackDrop />}
           <div className={`my-modal ${props.modal?"modal-show":"modal-hide"}`}>
            <div className="header">
                <h3>{props.tittle}</h3>
            </div>
            <div className="body">
                {props.body}
            </div>
            <div className="footer row justify-content-center">
               
               {props.successButton&& <div className=" mr-2">
                <Button buttonType="success" click={props.successButtonClick}>{props.successButton}</Button>
                </div>}
                {props.failureButton&&<div className="">
                <Button buttonType="danger" click={props.failureButtonClick}>{props.failureButton}</Button>
                </div>}
               
               
            </div>
        </div>
       </>
    )
}
const mapStateToProps=(state)=>{
    return{
        modal:state.ui.modal,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateModal:(modal)=>dispatch(actions.ui.updateModal(modal)),
        updateServiceStatus:(serviceId,status)=>dispatch(actions.service.updateServiceStatus(serviceId,status))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);