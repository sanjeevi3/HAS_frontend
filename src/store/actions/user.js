import actions from './index'
import user from '../../api/user'
import actionTypes from './actionTypes'

 export default  {
    login:(data)=>{
        
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                user.login(dispatch,data)
            },2000)
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