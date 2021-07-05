import actionTypes from './actionTypes'
import actions from "./index"
import serviceApi from "../../api/service"
import service from '../../api/service'

 export default  {
     
     updateServiceStatus:(serviceId,status)=>{
         return dispatch=>{
             dispatch(actions.ui.startAPI())
            setTimeout(() => {
                serviceApi.updateStatus(dispatch,serviceId,status)
            }, 2000);
         }
     },
      getService: (serviceId)=>{
        return dispatch=>{
            dispatch(actions.ui.startAPI())
            setTimeout(() => {
                serviceApi.get(dispatch,serviceId)
            }, 2000);
        }
        
     },
     getServices:()=>{
         return(dispatch)=>{
             dispatch(actions.ui.startAPI());
             setTimeout(() => {
                serviceApi.getAll(dispatch)
            }, 2000);
         }
     },
     addService:(userId,data)=>{
         return dispatch=>{
            dispatch(actions.ui.startAPI())
            setTimeout(() => {
                serviceApi.add(dispatch,userId,data)
            }, 2000);
         }
     }
 }