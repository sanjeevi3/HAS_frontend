import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import actions from "../store/actions";

const OurCustomer=props=>{
    const param=useParams()
    useEffect(()=>{
        props.getCustomer(param.id)
    },[])
    return(
        props.customer&&<Fragment>
            <CardHeader>Our Customer</CardHeader>
            <div className="body">
                <Fields fields={props.customer} />
            </div>
        </Fragment>
    )
}

const mapStateToProps=state=>{
    return{
        customer:state.ourCustomers.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getCustomer:(id)=>dispatch(actions.ourCustomers.get(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurCustomer);