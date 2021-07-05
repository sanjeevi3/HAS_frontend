import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import actions from '../../store/actions';
import Modal from '../UI/Modal'

const ServiceModal=props=>{
    const serviceId=useParams().id
    useEffect(()=>{
        console.log("service modal")
        
       },[props])
       alert("modal")
    var  tittle,successButton,failureButton,successButtonClick,failureButtonClick,text="if you cancell the service will you pay 50 rupeee ?"
    useEffect(() => {
            
        
        
    }, [])
    console.log(props)
    const confirmationModalConfirm=()=>{
        props.updateServiceStatus(serviceId,"OP")

           
        
    }
    const confirmationModalCancel=()=>{
        props.updateModal("cancel")
    }
    const cancelationtionModalBack=()=>{
        props.updateModal("confirm")
    }
    const cancelationModalPay=()=>{
        props.updateServiceStatus(serviceId,"CL")
    }
    const finishModalPay=()=>{
       
        props.updateServiceStatus(serviceId,"CD")


    }

    const modalClose=()=>{
        props.updateModal(null)
    }
        switch(props.modal){
            case "confirm":
            
                tittle="Confirmation";
                successButton="Confirm";
                failureButton="Cancel";
                successButtonClick=confirmationModalConfirm;
                failureButtonClick=confirmationModalCancel;
                text="Your service cost is 200 rupee. this is ok for you ?"
                break;
            case "cancel":
                tittle="Cancelation";
                successButton="Back";
                failureButton="Pay";
                successButtonClick=cancelationtionModalBack;
                failureButtonClick=cancelationModalPay;
                text="if you cancell the service will you pay 50 rupeee ?"
                break;
            case "finish":
                tittle="Finished";
                successButton="Pay";
                successButtonClick=finishModalPay;
                text="Your service was finished now you pay 200 rupee"
                break;
            case "confirm2":
                tittle="Confirmation"
                successButton="OK";          
                successButtonClick=modalClose;
                text="your Service was confirmed successfully.your service process is start now. thank you!"
                   
                break;
                
                case "cancel2":
                    tittle="Cancellation";
                    successButton="OK";          
                    successButtonClick=modalClose;
                    text="your cancellation pay was sucessfully transaction and Service was cancelled successfully.thank you!"
                    break;
            default:
                tittle="Finished";
                successButton="OK";
                successButtonClick=modalClose;
               
                text="your Service pay was transaction successfully. thank you calling HAS";
                break;
        }
      
   
    const modals=<Modal
    tittle={tittle}
    successButtonClick={successButtonClick}
    failureButtonClick={failureButtonClick}
    successButton={successButton}
    failureButton={failureButton}
    isOpen={props.modal}
    hideFailureButton={props.modal==="finish"||props.modal==="finish2"||props.model==="cancel2"||props.modal==="confirm2"}
 >
    <p>{text}</p>
 </Modal>
    return(
        modals
    )
}


const mapStateToProps=state=>{
    return{
        modal:state.ui.modal
        
    }
} 

const mapDispatchToProps=dispatch=>{
    return{
      
       updateServiceStatus:(serviceId,status)=>dispatch(actions.service.updateServiceStatus(serviceId,status)),
       updateModal:modal=>dispatch(actions.ui.updateModal(modal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceModal)
