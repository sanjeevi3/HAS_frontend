import { Fragment } from "react";

const Input=(props)=>{
    let inputElement=null;
    switch(props.elementType){
        case ('input'):
            inputElement=<input ref={props.refrence}  className={`form-control ${props.error&&"bg-danger text-white"}`} {...props.elementConfig} />
            break
        case ('text area'):
            inputElement=<textarea ref={props.refrence} rows="2"  className="form-control" {...props.elementConfig} />
            break
        
        case ('select'):
            inputElement=<select ref={props.refrence} {...props.elementConfig}  className={`form-control ${props.error&&"bg-danger text-white"}`} >
                <option key="tittle" value="">---{props.label}----</option>
                {props.options.map((option)=>{
                    return(<option key={option.value} value={option.value} className="text-capitalize text-center">{option.label}</option>)
                })}
            </select>
            break
        case ('multi input'):
            inputElement=<div>{
                            props.inputs.map((input,index)=>{
                                return(
                                <Fragment key={input.value} >
                                <label className="mr-2 text-capitalize text-white"><input ref={props.refrence}   value={input.value} className={`ml-0 mr-1 position-static form-check-input `} {...props.elementConfig} />{input.label}</label>
                                </Fragment>)
                            })}<br></br>
                          </div>
                            break;
        case "switch":
            inputElement=<div>
                <input ref={props.refrence} className={`ml-0 mr-1 position-static form-check-input `} {...props.elementConfig} />
            </div>
    
        
    }
    return(
        <div className="row mb-2 col-12 px-0 mx-0 ">
            <label className={`${props.elementType==="switch"?"col-mb-6":""} col-md-5 col-12 text-white`}>
                {props.label}{props.required&&<span className="text-danger text-bold">*</span>}
            </label>
            <div className={`${props.elementType==="switch"?"col-mb-6":""} col-md-7 col-12 `}>
                {inputElement}
                {props.error&&
    <p className="text-bold text-danger">{props.error.message}</p>}
            </div>
        </div>
    )
}

export default Input;