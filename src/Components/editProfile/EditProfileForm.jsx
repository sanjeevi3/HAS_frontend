import Button from "../UI/Button";
import Input from "../UI/Input";

const EditProfileForm=props=>{
    return(
        <form onSubmit={props.handleSubmit(props.editProfileHandler)}>
            <div className="row">
            {
            props.inputs.map(input=>{
                return(
                    <div className="col-md-6" key={input.elementConfig.name}>
                        <Input
                            refrence={props.register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            required={input.validation.required}
                            error={props.errors[input.elementConfig.name]}
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

export default EditProfileForm;