import actions from '.'
import user from '../../api/user'
import actionTypes from './actionTypes'

 export default  {
     getProfile:()=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
                user.getProfile(dispatch)
            
            
        }
     },
     updateProfile:(data)=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                user.update(dispatch,data)
            } ,2000)
        }
     }
 }