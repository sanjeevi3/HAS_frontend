import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import actions from "../../store/actions"

const { default: Button } = require("../UI/Button")
const { default: Input } = require("../UI/Input")

const AddServiceForm=props=>{
    const {register,handleSubmit,watch,errors} =useForm()
    const changeAddress=watch("change_address")
    
   let inputs=[
    {
        elementType:"select",
        elementConfig:{
           
            name:"service_type",
            
        },
        options:[
            {value:"plumber",label:"Plumbering"},
            {value:"AC mechanic",label:"AC Repairing"},
            {value:"refregirator mechanic",label:"Refregirator Repairing"}
        ],
        label:"Worker Type",
        validation:{
            required:"The Gender is Required"
        },
        
    },
    {
        elementType:"switch",
        elementConfig:{
           
            name:"change_address",
            type:"checkbox",
            value:true
        },
        label:"Change Address",
        validation:{
            required:false

        },
       
    },
    
    
    
   ]
   
 
   if(changeAddress){
       
        
    inputs=[
        {
            elementType:"select",
            elementConfig:{
               
                name:"service_type",
                
            },
            options:[
                {value:"plumber",label:"Plumbering"},
                {value:"AC mechanic",label:"AC Repairing"},
                {value:"refregirator mechanic",label:"Refregirator Repairing"}
            ],
            label:"Worker Type",
            validation:{
                required:"The Gender is Required"
            },
            
        },
        {
            elementType:"select",
            elementConfig:{
               
                name:"state",
                
            },
            options:[
                {value:"tamilnadu",label:"Tamilnadu"},
                  ],
            label:"State",
            validation:{
                required:"Select the State"
            },
            
        },
        {
            elementType:"select",
            elementConfig:{
               
                name:"district",
                
            },
            options:[
                {value:"tirunelveli",label:"Tirunelveli"},
               
            ],
            label:"District",
            validation:{
                required:"Select the District"
            },
        },
        {
            elementType:"select",
            elementConfig:{
               
                name:"place",
                
            },
            options:[
                {value:"palayamkottai",label:"Palayamkottai"},
                
            ],
            label:"Place",
            validation:{
                required:"Select the Place"
            },
            
        },
        {
            elementType:"text area",
            elementConfig:{
               
                name:"address",
                placeholder:"Address"
                
            },
            
            label:"Place",
            validation:{
                required:"Enter the Address"
            },
            
        },
        {
            elementType:"switch",
            elementConfig:{
               
                name:"change_address",
                type:"checkbox",
                value:true
            },
            label:"Change Address",
            validation:{
                required:false
    
            },
           
        },
       ]
       console.log(inputs)
   }
   const addServiceFormHandler=data=>{
   props.addService(1,data);
}
    return(
        <form onSubmit={handleSubmit(addServiceFormHandler)}>
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
        </form>
    )
}
const mapStateToProps=(state)=>{
    return{
        userId:state.user.Id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addService:(userId,data)=>dispatch(actions.service.addService(userId,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddServiceForm);