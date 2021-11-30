import { useState } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import requestApi from "../../api/request"
import actions from "../../store/actions"

const { default: Button } = require("../UI/Button")
const { default: Input } = require("../UI/Input")

const AddRequestForm=props=>{
    const [state,setState] = useState({})
    const {register,handleSubmit,watch,errors,setError} =useForm()
    useEffect(()=>{
        if(props.error){
            for (const key in props.error) {
                setError(key,{
                    type:"server",
                    message:props.error[key]
                })    
                
            }
            
        }
        },[state])
    const history = useHistory();
   
    const changeAddress=watch("change_address")
    let inputs =[];
        if(!(props.address_list&&props.service_types))
        props.addRequestFieldData(history)
        else{
            inputs=[
                {
                    elementType:"select",
                    elementConfig:{
                       
                        name:"service_type",
                        
                    },
                    options:props.service_types.map(serviceTypeOption=>{
                        return{
                            value:serviceTypeOption.id,
                            label:serviceTypeOption.value
                        }
                    }),
                    label:"Worker Type",
                    validation:{
                        required:"The Gender is Required"
                    },
                    
                },
                {
                    elementType:"multi input",
                    elementConfig:{
                        type:"radio",
                        name:"address",
                        
                    },
                    inputs:props.address_list.map(address=>{
                       return { value:address.id,
                        label:address.address+","+address.district+"."
                       }
                    }),
                    label:"Address",
                    validation:{
                        required:"The Gender is Required"
                    },
                    
                },
            ]
        }
    
    console.log(inputs)
   const addRequestFormHandler=data=>{

  props.addRequest(data,history,setState);

  
}
    return(
        <>
        {props.address_list&&props.service_types?<form onSubmit={handleSubmit(addRequestFormHandler)}>
            <div className="row">
                {inputs.map(input=>{
                    return(
                        <div key={input.elementConfig.name} className="col-md-6">
                            <Input refrence={register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            options={input.options}
                            required={input.validation.required}
                            error={errors[input.elementConfig.name]}
                            inputs={input.inputs}
                             />
                            
                            </div>
                    )
                })}
                
            </div>
            <div className="row justify-content-center">
                <Button buttonType="success">Add Service</Button>
            </div>
        </form>:null
        }
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        address_list:state.profile.address_list,
        service_types:state.fieldData.service_types
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addRequest:(data,history,setState)=>dispatch(actions.request.addRequest(data,history,setState)),
        addRequestFieldData:(history)=>dispatch(actions.request.addRequestFieldData(history))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddRequestForm);