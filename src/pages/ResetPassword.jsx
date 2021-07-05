import LogInCard from "../Components/login/LogInCard"
import ResetPasswordForm from '../Components/resetPassword/ResetPasswordForm'
import Modal from "../Components/UI/Modal";
const ResetPassword =props=>{
    
   
    
    return(
        <div className="row justify-content-center pt-5">
             <Modal
                tittle="sucess log in"
                successButtonClick={()=>alert("sucess")}
                failureButtonClick={()=>alert("failure")}
                successButton="success"
                failureButton="failure"
                isFailureButton={true}
            >
                <p>reset password</p>
            </Modal>
        <LogInCard tittle="RESET PASSWORD">
            <ResetPasswordForm/>
        </LogInCard>
        </div>
    )
}

export default ResetPassword;