import actions from './index'
import user from '../../api/user'
import actionTypes from './actionTypes'

 export default  {
    login:(data ,history)=>{
        
        return (dispatch)=>{
            console.log("data",data)
            dispatch(actions.ui.startAPI())
                user.login(dispatch,data,history)
            
        }
    },
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