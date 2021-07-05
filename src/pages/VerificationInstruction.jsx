import { connect } from "react-redux"
import { useHistory } from "react-router"
import LogInCard from "../Components/login/LogInCard"
import Button from "../Components/UI/Button"

const VerificationInstruction=(props)=>{
    const history = useHistory()
    return(
        <div className="row justify-content-center pt-5">
        <LogInCard tittle="CONTACT VERIFICATION">
            <p className="text-light">
                hello sanjeevi we are send the {props.contactVerificationData.url} URL to Your {props.contactVerificationData.sent}
                {props.contactVerificationData.sent==="phone"? "the phone number is "+ props.contactVerificationData.phone

               : "the email id is "+ props.contactVerificationData.email}
            </p>
            <div className="row justify-content-center pt-5">
                <Button buttonType="success" click={()=>{history.push("/login")}}>OK</Button>
            </div>
        </LogInCard>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        contactVerificationData:state.user.verification,
        
    }
}


export default connect(mapStateToProps)(VerificationInstruction)