import { connect } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../store/actions"
import Modal from "./Modal"

const { default: BackDrop } = require("./BackDrop")
const { default: Button } = require("./Button")
// custom modal for error and suceess messages
/* 
    props
    modal - it has modal configuration
*/

const MyModal = props => {
    console.log("MyModal")
    return (
        <Modal
            tittle={props.modal.tittle}
            open={props.modal.open}
            failure={props.modal.failure}
            failureClick={props.modal.failureClick}
            success={props.modal.success}
            successClick={props.modal.successClick}
        >
            {props.modal.body}
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    }
}


export default connect(mapStateToProps)(MyModal);