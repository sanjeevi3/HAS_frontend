import actions from './index'
import user from '../../api/user'
import actionTypes from './actionTypes'

 export default  {

    /* 
        its call login api
        param1- login form data
        param2 - useHistory
    */

    login:(data ,history)=>{
        
        return (dispatch)=>{
            console.log("data",data)
            dispatch(actions.ui.startAPI())
                user.login(dispatch,data,history)
            
        }
    },
    /* 
        its call register api
        param1- register form data
        param2 - useHistory
    */
    register:(data ,history)=>{
        
        return (dispatch)=>{
            console.log("data",data)
            dispatch(actions.ui.startAPI())
                user.register(dispatch,data,history)
            
        }
    },
    sentURL:(data,url)=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                user.sentURL(dispatch,data,url)
            },2000)
        }
    },
    removeUser:()=>{
        
        return {
            type:actionTypes.REMOVED_USER
        }
    }
}