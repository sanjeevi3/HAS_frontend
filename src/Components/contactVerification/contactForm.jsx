import { Fragment,useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import actions from "../../store/actions"
import {useForm} from 'react-hook-form'
import { connect } from "react-redux";
import { useHistory } from "react-router";

const ContactForm=(props)=>{
   
    const history=useHistory()
    const {register,handleSubmit,watch,errors} = useForm(
        {defaultValues:{
            url_sent_to:props.sent
        }}
    )
    
    const otpSendBy=watch("url_sent_to")
    console.log("props",otpSendBy)
    const inputs = [{
        elementType:"multi input",
        elementConfig:{
            type:"radio",
            name:"url_sent_to",
            
        },
        inputs:[
            {value:"email",label:"Email"},
            {value:"phone",label:"Phone"},
        ],  
        label:"OTP Sent To",
        validation:{
            required:"The Gender is Required"
        },
        
    }
        
    ];
    if(otpSendBy==='phone'){
      inputs.push(
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"phone",
                placeholder:"Phone"
            },
            label:"Phone",
            validation:{
                required:"The Phone  is Required",
                minLength:{
                    value:10,
                    message:"Minimum Length is 10"
                },
                maxLength:{
                    value:10,
                    message:"Maximum Length is 10"
                },
                pattern:{
                    value:/^[0-9]{10,10}$/,
                    message:"only in numbers"
                }
                
            },
            
        }
        
      )  
    }
    else{
        inputs.push(
            {
                elementType:"input",
                elementConfig:{
                    type:"email",
                    name:"email",
                    placeholder:"Email"
                },
                label:"Email",
                validation:{
                    required:"Email is Required",
                    minLength:{
                        value:3,
                        message:"Minimum Length is 3"
                    },
                    maxLength:{
                        value:30,
                        message:"Minimum Length is 30"
                    },
                    pattern:{
                        value:/^[a-z][a-z0-9]{3,}@[a-z]{5,}\.[a-z]{2,}$/,
                        message:"Enter Correct Email Format"
                    }
                }
            }
        )
    }
    
    const logInHandler=(data)=>{
       
       
      props.sentURL(data, "reset password")
       history.push("/verification-instruction")
    }
    return(
       
        <form onSubmit={handleSubmit(logInHandler)}>
            {
            inputs.map(input=>{
                return(
                    <Fragment key={input.elementConfig.name}>
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
                    </Fragment>
                                    
                    )
                })
            }
                <div className="row  justify-content-center">
                    <div className="py-2"><Button buttonType="success">Next</Button></div>
                </div>
        </form>
    )
}
const mapStateToProps=(state)=>{
    return{
        sent:state.user.verification.sent
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sentURL:(data,url)=>dispatch(actions.user.sentURL(data,url))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);