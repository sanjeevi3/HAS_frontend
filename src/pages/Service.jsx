import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import ServiceModal from "../Components/service/ServiceModal";
import Card from "../Components/UI/Card";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import Modal from "../Components/UI/Modal";
import actions from '../store/actions'
const Service=props=>{
    const param=useParams()
    useEffect(()=>{
        
        console.log("service")
       },[props])
    
    
    useEffect(()=>{
        alert("service")
            props.getService(param.id)
     
        
    },[])
      
   console.log("service",props)
    
    
   
    return(
        <>
        
       {props.service?<>

      
      <Card tittle="My Service" button={props.service.status_code==="NS"?"Cancel":null} buttonClick={()=>{props.updateServiceStatus(param.id,"AP")}}>
     <Fields fields={props.service} />
       </Card></>:null}
    </>
           
      
    )
}

const mapStateToProps=state=>{
    return{
        service:state.service.data,
        loader:state.service.loader,
       
    }
} 
const mapDispatchToProps=dispatch=>{
    return{
       getService:(serviceId)=>{dispatch(actions.service.getService(serviceId))},
       updateServiceStatus:(serviceId,status)=>dispatch(actions.service.updateServiceStatus(serviceId,status))
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Service);