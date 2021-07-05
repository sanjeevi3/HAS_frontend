import actions from '.'
import user from '../../api/user'
import actionTypes from './actionTypes'

 export default  {
     getProfile:()=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                user.get(dispatch)
            } ,2000)
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