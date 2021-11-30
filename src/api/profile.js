
import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"
import  axiosInstance  from "./axiosInstance"
import {PROFILE, PROFILE_URL, USER_URL} from "./url"
import store from ".././store/"
export default {
getProfile:(dispatch)=>{
    try {
        axiosInstance().get(PROFILE_URL).then(res=>{
            dispatch({
                type:actionTypes.SET_PROFILE,
                data:res.data
            })
            dispatch(actions.ui.endAPI({}))
        }).catch(err=>{
            if(err.response){
                dispatch({
                    type:actionTypes.f,
                    error:err.response.data.error
                })
            }
            else{
                dispatch(actions.ui.errorModal(
                    {
                        failure:"Retry",
                        failureClick:()=>{
                            dispatch(actions.ui.closeModal())
                           // dispatch(actions.user.register(data,history))
                        }
                    }
                ))
            }
            dispatch(actions.ui.endAPI({}));
        })
       
        
    } catch (error) {
         
    }
},
getAddressList:()=>axiosInstance().get(PROFILE_URL.GET_ADDRESS_LIST)
}