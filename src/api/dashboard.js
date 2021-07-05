import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"

export default {
    updateWorkRequest:(dispatch,status)=>{
        try {
            dispatch({
                type:actionTypes.UPDATE_WORK_REQUEST,
             })
             dispatch(actions.ui.endAPI({
                 modal:"success",
                 success:status?"work accepted successfully":"work rejected successfully"
             }))
        } catch (error) {
            
        }
    }
}