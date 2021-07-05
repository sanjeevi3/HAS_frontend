import actions from "../store/actions";
import actionTypes from "../store/actions/actionTypes";

export default {
    get:(dispatch,id)=>{
        try {
            const data={
                customer:"sanjai",
                cost:null,
                phone:"9123510364",
                address:"13b langargana street, palayamkottai",
                district:"tirunelveli",
                time:"",
                credits:"5"
            };
            dispatch({
                type:actionTypes.SET_OUR_WORKER,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:error
            }))
        }
    },
    getAll:(dispatch)=>{
        try {
            const data=[
                {
                    name:"kumar",
                    worker_type:"plumber",
                    credits:"4.5",
                    state:"tamilnadu",
                    district:"tirunelveli",
                    place:"palayamkottai"
                },
                {
                    name:"kumar",
                    worker_type:"plumber",
                    credits:"4.5",
                    state:"tamilnadu",
                    district:"tirunelveli",
                    place:"palayamkottai"
                },
            ];
            dispatch({
                type:actionTypes.SET_OUR_WORKERS,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:error
            }))
        }
    },
    delete:(dispatch,id)=>{
        try {
            const data=null;
            dispatch({
                type:actionTypes.SET_PROFILE
            })
            dispatch(actions.ui.endAPI({
                modal:"success",
                success:"successfully deleted."
            }))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:error
            }))
        }
    }
}