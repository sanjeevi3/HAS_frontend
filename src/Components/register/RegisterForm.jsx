import { Fragment,useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import actions from "../../store/actions"
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router";
import { connect } from "react-redux";

const RegisterForm=(props)=>{
    const history=useHistory();
    const {register,handleSubmit,watch,errors} = useForm()
    const password=watch("password")
    const registerAsWorker=watch("worker")
    console.log(password)
    let inputs = [
            {
                elementType:"input",
                elementConfig:{
                    type:"text",
                    name:"first_name",
                    placeholder:"First Name"
                },
                label:"First Name",
                validation:{
                    required:"The First Name Field is Required",
                    minLength:{
                        value:3,
                        message:"Minimum Length is 3"
                    },
                    maxLength:{
                        value:30,
                        message:"Minimum Length is 30"
                    },
                    pattern:{
                        value:/[A-Za-z]/,
                        message:"First Name only in Alphabets"
                    }
                    


                },
                
            },
            {
                elementType:"input",
                elementConfig:{
                    type:"text",
                    name:"last_name",
                    placeholder:"Last Name"
                },
                label:"Last Name",
                validation:{
                    required:"The Last Name  is Required",
                    minLength:{
                        value:3,
                        message:"Minimum Length is 3"
                    },
                    maxLength:{
                        value:30,
                        message:"Minimum Length is 30"
                    },
                    pattern:{
                        value:/[A-Za-z]/,
                        message:"First Name only in Alphabets"
                    }

                },
                
            },
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
                
            },
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
                },
                
            },
            {
                elementType:"input",
                elementConfig:{
                    type:"date",
                    name:"date_of_birth",
                    placeholder:"User Name,Email Id"
                },
                label:"Date Of Birth",
                validation:{
                    required:"The Date of Birth Field is Required",
                    valueAsDate:true
                },
                
            },
            {
                elementType:"multi input",
                elementConfig:{
                    type:"radio",
                    name:"gender",
                    
                },
                inputs:[
                    {value:"male",label:"Male"},
                    {value:"female",label:"Female"},
                    {value:"others",label:"Others"}],
                label:"Gender",
                validation:{
                    required:"The Gender is Required"
                },
                
            },
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
               
            },
            {
                elementType:"select",
                elementConfig:{
                   
                    name:"state",
                    
                },
                label:"State",
                options:[
                    {value:"tamilnadu",label:"Tamilnadu"}
                ],
                validation:{
                    required:"Select Any One State",
    
                },
               
            },
            {
                elementType:"select",
                elementConfig:{
                   
                    name:"district",
                    
                },
                label:"District",
                options:[
                    {value:"tirunelveli",label:"Tirunelveli"}
                ],
                validation:{
                    required:"Select Any One District",
    
                },
               
            },
            {
                elementType:"select",
                elementConfig:{
                   
                    name:"place",
                    
                },
                label:"Place",
                options:[
                    {value:"palayamkottai",label:"Palayamkottai"}
                ],
                validation:{
                    required:"Select Any One place",
    
                },
               
            },
            {
                elementType:"text area",
                elementConfig:{
                    placeholder:"Address",
                    name:"address",
                    
                },
                label:"Address",
                
                validation:{
                    required:"Enter the Address",
    
                },
               
            },
            {
                elementType:"multi input",
                elementConfig:{
                   
                    name:"worker",
                    type:"checkbox"
                },
                label:"",
                inputs:[
                    {value:"yes",label:"Register As Worker"}
                ],
                validation:{
                    required:false
    
                },
               
            },

        ]
        if(registerAsWorker){
            inputs=[
                ...inputs,
                {
                    elementType:"multi input",
                    elementConfig:{
                        type:"checkbox",
                        name:"sevice",
                        
                    },
                    inputs:[
                        {value:"plumber",label:"Plumber"},
                        {value:"AC mechanic",label:"AC Mechanic"},
                        {value:"refregirator mechanic",label:"Refregirator Mechanic"}
                    ],
                    label:"Worker Type",
                    validation:{
                        required:"The Gender is Required"
                    },
                    
                }
            ]
        }
    
    const RegisterHandler=(data)=>{
        props.register(data)
       
    }
    return(
        <form onSubmit={handleSubmit(RegisterHandler)}>
            <div className="row">
            {
            inputs.map(input=>{
                return(
                    <div className="col-md-6" key={input.elementConfig.name}>
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
                    <div className="py-2"><Button buttonType="success">Log In</Button></div>
                </div>
                
        </form>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        register:(data)=>dispatch(actions.user.register(data))
    }
}
export default connect(null,mapDispatchToProps)(RegisterForm);