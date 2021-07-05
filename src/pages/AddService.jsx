const { Fragment } = require("react")
const { useForm } = require("react-hook-form")
const { default: AddServiceForm } = require("../Components/addService/AddServiceForm")
const { default: CardHeader } = require("../Components/UI/CardHeader")

const AddService=props=>{
    

    return(
       <Fragment>
            <CardHeader>Add Service</CardHeader>
            <div className="body">
                <AddServiceForm  />
            </div>
       </Fragment>
    )
}

export default AddService;