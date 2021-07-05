import Button from "../UI/Button";
import Input from "../UI/Input";
import actions from "../../store/actions"
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router";
import { connect } from "react-redux";
import ResetPassword from "../../pages/ResetPassword";

import Modal from "../UI/Modal";
import actionTypes from "../../store/actions/actionTypes";

const ResetPasswordForm= props=>{
    
    const {register,handleSubmit,watch,errors} = useForm()
    const password=watch("password")
    const registerAsWorker=watch("worker")
    let inputs=[
        {
            elementType:"input",
            elementConfig:{
                type:"password",
                name:"password",
                placeholder:"Password"
            },
            label:"Password",
            validation:{
                required:"The Password Field is Required",
                pattern:{
                    value:"",
                    message:"Enter Correct Email Format"
                }
            },
           
        },
        {
            elementType:"input",
            elementConfig:{
                type:"password",
                name:"confirm_password",
                placeholder:"Confirm Password"
            },
            label:"Confirm Password",
            validation:{
                required:"Confirm Password Field is Required",
                validate:value=>value===password || "Password and Confirm Password Doesn't Match"
            },
           
        }
    ]
    const resetPasswordHandler=data=>{
        
    }
    return(
        <form onSubmit={handleSubmit(resetPasswordHandler)}>
           
            <div className="row">
            {
            inputs.map(input=>{
                return(
                    <div className="col-md-12" key={input.elementConfig.name}>
                        <Input 
                            refrence={register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            required={input.validation.required}
                            error={errors[input.elementConfig.name]}
                            values={input.values}
                            options={input.options}
                            inputs={input.inputs}
                        />
                    </div>
                                    
                    )
                })
            }
                </div>
                <div className="row  justify-content-center">
                    <div className="py-2"><Button buttonType="success">Reset Password</Button></div>
                </div>
                
        </form>
    )
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setContactVerification:(data)=>dispatch({
            type:actionTypes.SET_CONTACT_VERIFICATION
        })
    }
}
export default connect(null,mapDispatchToProps)(ResetPasswordForm);