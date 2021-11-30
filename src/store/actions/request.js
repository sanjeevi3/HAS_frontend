import actionTypes from './actionTypes'
import actions from '.'
import requestAPI from '../../api/request'
 export default  {
     addRequestFieldData:(history)=>{
        return dispatch =>{
            dispatch(actions.ui.startAPI());
            dispatch(actions.fieldData.getServiceTypes(history,getServiceTypesSuccess=>{
                if(getServiceTypesSuccess){
                    dispatch(actions.fieldData.getAddressList(history,getAddressListSuccess=>{
                        if(getAddressListSuccess)
                            dispatch(actions.ui.endAPI())
                    }))
                }
            }))
        }
     },
     addRequest:(data,history,setState)=>{
         return dispatch=>{
             dispatch(actions.ui.startAPI());
             requestAPI.addRequest(data).then(res=>{
                dispatch(actions.ui.endAPI())
                 dispatch(actions.ui.messageModal({
                    body:res.data.message,
                    successClick:()=>{
                     dispatch(actions.ui.closeModal())
                     history.push({pathname:"/dashboard"})
                    }
                }))
             }).catch(err=>{
                dispatch(actions.ui.endAPI())
                if(err.response){
                 setState({
                     errors:err.response.data.error
                 })
                }
                else{
                    dispatch(actions.ui.errorModal({
                        failure:"Retry",
                        failureClick:()=>{
                            dispatch(actions.ui.closeModal())
                            dispatch(actions.request.addRequest(data,history,setState))
                        }
                    }))
                }
             });
         }
        }
         
 }