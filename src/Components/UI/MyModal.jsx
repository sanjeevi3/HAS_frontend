import { connect } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../store/actions"
import Modal from "./Modal"

const { default: BackDrop } = require("./BackDrop")
const { default: Button } = require("./Button")

const MyModal=props=>{
    const history=useHistory()
    let modal 
    const modalClose=()=>{
        props.closeModal()
        history.push("/profile")
    }
    
    switch (props.modal) {
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
        case "pay sevice":
            modal={
                tittle:"Pay Service",
                body: "Your service was finished now you pay 200 rupee",
                successButton:"Pay",
                successButtonClick:()=>props.updateServiceStatus(props.serviceId,"CD")
            }
            break;
        case "work":
            modal={
                tittle:"Work",
                body: props.work.data,
                successButton:"Accept",
                failureButton:"Reject",
                successButtonClick:()=>props.updateModal("accept work"),
                failureButtonClick:()=>props.updateModal("reject work")
            }
            break;
        case "accept work":
            modal={
                tittle:"Accept Work",
                body: "please confirm the work acceptation. "+props.work.data,
                successButton:"Yes",
                failureButton:"No",
                successButtonClick:()=>props.updateWorkRequest(true),
                failureButtonClick:()=>props.updateModal("reject work")
            }
            break;
        case "reject work":
            modal={
                tittle:"Accept Work",
                body: "please confirm the work acceptation. "+props.work.data,
                successButton:"No",
                failureButton:"Yes",
                successButtonClick:()=>props.updateModal("accept work"),
                failureButtonClick:()=>props.updateWorkRequest(false)
            }
            break;
        case "success":
            modal={
                successButtonClick:modalClose
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
       <Modal
       tittle={modal.tittle?modal.tittle:props.success?"Success":"Error"}
       body={modal.body?modal.body:props.success?props.success:props.error}
       successButton={modal.successButton?modal.successButton:props.success?"Ok":null}
       failureButton={modal.failureButton?modal.failureButton:props.error?"Error":null}
       successButtonClick={modal.successButtonClick}
       failureButtonClick={modal.failureButtonClick}
       isModal={props.modal||props.success||props.success}
       >

       </Modal>
    )
}
const mapStateToProps=(state)=>{
    return{
        modal:state.ui.modal,
        success:state.ui.success,
        error:state.ui.error,
        work:state.profile.work
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateModal:(modal)=>dispatch(actions.ui.updateModal(modal)),
        closeModal:()=>dispatch(actions.ui.closeModal()),
        updateServiceStatus:(serviceId,status)=>dispatch(actions.service.updateServiceStatus(serviceId,status)),
        updateWorkRequest:(accept)=>dispatch(actions.dashboard.updateWorkRequest(accept))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyModal);