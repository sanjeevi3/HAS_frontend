import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import actions from "../store/actions";

const OurEmployee=props=>{
    const param=useParams()
    useEffect(()=>{
        props.getEmployee(param.id)
    },[])
    return(
        props.employee&&<Fragment>
            <CardHeader>Our Employee</CardHeader>
            <div className="body">
                <Fields fields={props.employee} />
            </div>
        </Fragment>
    )
}

const mapStateToProps=state=>{
    return{
        employee:state.ourWorkers.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getEmployee:(id)=>dispatch(actions.ourEmployees.get(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurEmployee);