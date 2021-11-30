import actions from '.'
import fieldDataAPI from '../../api/fieldData'
import profileAPI from '../../api/profile'
import actionTypes from './actionTypes'

 export default  {
     getServiceTypes:(history,callBack)=>{
         return dispatch=>{
            fieldDataAPI.getServiceTypes().then(res=>{
                if(res.data.service_types)
                {
                    dispatch({
                        type:actionTypes.SET_SERVICE_TYPES,
                        data:res.data.service_types
                    })
                    callBack(true)
                }
                
                else{
                    dispatch(actions.ui.endAPI())
                   dispatch(actions.ui.messageModal({
                        body:"no service are available now. try after some time",
                        successClick:()=>{
                            dispatch(actions.ui.closeModal())
                            history.push("/dashboard")
                        }
                    }))
                    callBack(false)
                }
                
            }).catch(err=>{
                dispatch(actions.ui.endAPI())
                if(err.res){
                    dispatch(actions.ui.messageModal({
                        body:"server error",
                        successClick:()=>{
                            dispatch(actions.ui.closeModal())
                            history.push("/dashboard")
                        }
                    }))
                }
                else{
                    dispatch(actions.ui.errorModal(
                        {
                            failure:"Retry",
                            failureClick:()=>{
                                dispatch(actions.ui.closeModal())
                                dispatch(actions.fieldData.getServiceTypes(callBack))
                            }
                        }
                    ))
                }
                
                callBack(false)
            })
         }
        
     },
     getAddressList:(history,callBack)=>{
        return dispatch=>{
           profileAPI.getAddressList().then(res=>{
               if(res.data.address_list)
               {
                   dispatch({
                       type:actionTypes.SET_ADDRESS_LIST,
                       data:res.data.address_list
                   })
                   callBack(true)
               }
               
               else{
                  dispatch(actions.ui.messageModal({
                       body:"Please add your address now",
                       successClick:()=>{
                           dispatch(actions.ui.closeModal())
                           history.push("/dashboard")
                       }
                   }))
                   callBack(false)
               }
               
           }).catch(err=>{
               if(err.res){
                dispatch(actions.ui.messageModal({
                    body:"Server Error",
                    successClick:()=>{
                        dispatch(actions.ui.closeModal())
                        history.push("/dashboard")
                    }
                }))
               }
               else{
                   dispatch(actions.ui.errorModal(
                       {
                           failure:"Retry",
                           failureClick:()=>{
                               dispatch(actions.ui.closeModal())
                               dispatch(actions.fieldData.getServiceTypes(history,callBack))
                           }
                       }
                   ))
               }
               
               callBack(false)
           })
        }
       
    }
 }