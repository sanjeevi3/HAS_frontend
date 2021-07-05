import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useParams } from "react-router";
import actions from "../../store/actions";
import Button from "../UI/Button";
import Input from "../UI/Input";

const { default: work } = require("../../api/work");

const WorkButton=(props)=>{
    const param=useParams()
    const {register,handleSubmit,watch,errors} = useForm()
    let inputs=[
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"cost",
                placeholder:"Cost"
            },
            label:"cost",
            validation:{
                required:"The Password Field is Required",
                pattern:{
                    value:/^[0-9]{3,}$/,
                    message:"only in numbers"
                },
                minLength:{
                    value:3,
                    message:"Minimum cost is 100"
                },
            },
           
        },
        {
            elementType:"text area",
            elementConfig:{
                placeholder:"Description",
                name:"description",
                
            },
            label:"Description",
            
            validation:{
                required:false,

            },
           
        },
    ]
    const resetPasswordHandler=data=>{
        props.updateWorkStatus(param.id,"WFC")
    }
    
    let button=null
    switch(props.status)
    {
        case "NS":
            button=<Button buttonType="success" click={()=>props.updateWorkStatus(param.id,"WS")}>Start Work</Button>;
            break;
        case "WS":
            button=<form onSubmit={handleSubmit(resetPasswordHandler)}>
           
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
                            
                        />
                    </div>
                                    
                    )
                })
            }
                </div>
                <div className="row  justify-content-center">
                    <div className="py-2"><Button buttonType="success">send report</Button></div>
                </div>
                
        </form>
            
            break;
        case "OP":
            button=<Button buttonType="success" click={()=>props.updateWorkStatus(param.id,"WFP")}>Finish Work</Button>;
            break;
        default:
            button=null;
            break;
    }
    return (
       button
    )
}
const mapStateToProps=state=>{
    return{
        status:state.work.data.status_code
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        updateWorkStatus:(id,status)=>dispatch(actions.work.updateStatus(id,status))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WorkButton)