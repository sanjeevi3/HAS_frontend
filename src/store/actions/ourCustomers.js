import actions from '.'
import ourCustomer from '../../api/ourCustomer'


 export default  {
     get:(id)=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(() => {
                ourCustomer.get(dispatch,id)
            }, 2000);
        }
     },
     getAll:()=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(() => {
                ourCustomer.getAll(dispatch)
            }, 2000);
        }
     },
     delete:(id)=>{
        return (dispatch)=>{
            dispatch(actions.ui.startAPI())
            setTimeout(() => {
                ourCustomer.delete(dispatch,id)
            }, 2000);
        }
     }
 }