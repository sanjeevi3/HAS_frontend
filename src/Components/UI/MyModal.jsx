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
    
    
               
                
              
      
   
    return(
       <Modal
       tittle={props.modal.tittle}
       body={props.modal.body}
       open={props.modal.open}
       failure={props.modal.failure}
       failureClick={props.modal.failureClick}
       success={props.modal.success}
       successClick={props.modal.successClick}
       >

       </Modal>
    )
}
const mapStateToProps=(state)=>{
    return{
        modal:state.ui.modal
    }
}


export default connect(mapStateToProps)(MyModal);