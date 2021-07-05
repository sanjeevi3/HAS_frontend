import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import actions from "../store/actions";

const OurService=props=>{
    const param=useParams()
    useEffect(()=>{
        props.getService(param.id)
    },[])
    return(
        props.service&&<Fragment>
            <CardHeader>Our Service</CardHeader>
            <div className="body">
                <Fields fields={props.service} />
            </div>
        </Fragment>
    )
}

const mapStateToProps=state=>{
    return{
        service:state.ourServices.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getService:(id)=>dispatch(actions.ourServices.get(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurService);