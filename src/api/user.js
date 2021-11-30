
import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"
import  axiosInstance  from "./axiosInstance"
import {PROFILE, PROFILE_URL, USER_URL} from "./url"
export default {
login:(dispatch,data,history)=>{
    try {
        axiosInstance().post(USER_URL.LOGIN,data).then((res)=>{
            console.log("res",res)
            
            dispatch({
                type:actionTypes.SET_USER,
                userType:res.data.user_type,
                userId:res.data.id,
                token:res.data.token
            })
            dispatch({
                type:actionTypes.SUCCESS_LOGIN
            });
            history.replace({pathname:"/add_service"})
            dispatch(actions.ui.endAPI({}));
            dispatch(actions.ui.successModal(res.data.message))
            setTimeout(()=>{
                dispatch(actions.ui.closeModal())
            },1000)
        }).catch((err)=>{
            console.log("err",err.Error)
            if(err.response){
                dispatch({
                    type:actionTypes.FAILURE_LOGIN,
                    error:err.response.data.error
                })
            }
            else{
                dispatch(actions.ui.errorModal(
                    {
                        failure:"Retry",
                        failureClick:()=>{
                            dispatch(actions.ui.closeModal())
                            dispatch(actions.user.login(data,history))
                        }
                    }
                ))
            }
            dispatch(actions.ui.endAPI({})); 
               
            })
            
       
        
    } catch (error) {
        console.log(error)
    }
},
sentURL:(dispatch,data,url)=>{
    try {
        
        dispatch({
            type:actionTypes.SENT_URL,
           verification:{
                phone:data.phone,
                email:data.email,
                url:url
            }
        })
        dispatch(actions.ui.endAPI({
           // modal:"success",
            //success:"success fully login"
        }))
        
    } catch (error) {
        dispatch({
            type:actionTypes.FAILURE_REGISTER,
            error:{
                password:"your password was wrong",
            }
        })
        dispatch(actions.ui.endAPI({}))
    }
},
register:(dispatch,data,history)=>{
    try {
        axiosInstance().post(USER_URL.REGISTER,JSON.stringify(data)).then((res)=>{
            console.log(res)
            dispatch(
                {
                    type:actionTypes.SUCCESS_REGISTER
                }
            )
            dispatch(actions.ui.endAPI({}));
            dispatch(actions.ui.messageModal(
                {
                    body:res.data.message,
                    successClick:()=>{
                        dispatch(actions.ui.closeModal())
                        history.replace({pathname:"/login"})
                    }
                }
            ))
        }).catch((err)=>{
            console.log(err.response);
            if(err.response){
                dispatch({
                    type:actionTypes.FAILURE_REGISTER,
                    error:err.response.data.error
                })
            }
            else{
                dispatch(actions.ui.errorModal(
                    {
                        failure:"Retry",
                        failureClick:()=>{
                            dispatch(actions.ui.closeModal())
                            dispatch(actions.user.register(data,history))
                        }
                    }
                ))
            }
            dispatch(actions.ui.endAPI({}))
        })
        
    } catch (error) {
        dispatch({
            type:actionTypes,
            message:"Something"
        })
        dispatch(actions.ui.endAPI({}))
    }
}
}