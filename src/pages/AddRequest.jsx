const { Fragment } = require("react")
const { useForm } = require("react-hook-form")
const { default: AddServiceForm } = require("../Components/addRequest/AddRequestForm")
const { default: CardHeader } = require("../Components/UI/CardHeader")

const AddRequest=props=>{
    

    return(
       <Fragment>
            <CardHeader>Add Service</CardHeader>
            <div className="body">
                <AddServiceForm  />
            </div>
       </Fragment>
    )
}

export default AddRequest;