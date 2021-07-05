const Field=props=>{
    return(<div className="row col-12 mb-2">
    <div className="col-md-5 col-7 px-0 font-weight-bold text-capitalize">{props.field.key}:</div>
<div className="col-md-7 col-5 px-0 text-capitalize">{props.field.value}</div>
</div>)
}

export default Field;