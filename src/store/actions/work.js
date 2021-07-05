import actions from '../actions'
import work from '../../api/work'
import actionTypes from './actionTypes'

 export default  {
     getAll:()=>{
        
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                work.getAll(dispatch)
            },2000)
        }
     },
     get:(id)=>{
        
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                work.get(dispatch,id)
            },2000)
        }
     },
     updateStatus:(id,status)=>{
        
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                work.updateStatus(dispatch,id,status)
            },2000)
        }
     },
     updateReport:(dispatch,id,data)=>{
        
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(()=>{
                work.updateWorkReport(dispatch,id,data)
            },2000)
        }
     }
 }