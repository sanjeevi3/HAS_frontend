import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import WorkButton from '../Components/work/WorkButton'
import actions from "../store/actions";

const Work=props=>{
    const params=useParams()
   useEffect(() => {
       props.getWork(params.id)
       return () => {
         
       }
   }, [])
    return(
        <Fragment>
            <CardHeader>My Service</CardHeader>
            {props.work&&<div className="body">
                <Fields fields={props.work} />
               <WorkButton />
            </div>}
        </Fragment>
    )
}
const mapStateToProps=state=>{
    return{
        work:state.work.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getWork:(id)=>dispatch(actions.work.get(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Work);