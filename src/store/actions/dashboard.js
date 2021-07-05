import actions from '.'
import dashboard from '../../api/dashboard'
import actionTypes from './actionTypes'

 export default  {
     updateWorkRequest:(accept)=>{
         return(dispatch)=>{
             dispatch(actions.ui.startAPI())
             setTimeout(()=>dashboard.updateWorkRequest(dispatch,accept),2000)
         }
     }
 }