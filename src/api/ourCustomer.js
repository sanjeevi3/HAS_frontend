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
                type:actionTypes.SET_OUR_CUSTOMER,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:error
            }))
        }
    },
    getAll:(dispatch,id)=>{
        try {
            const data=[
                {
                    name:"kumar",
                    age:"21",
                    state:"tamilnadu",
                    district:"tirunelveli",
                    services:"4"
                },
                {
                    name:"kumar",
                    age:"21",
                    state:"tamilnadu",
                    district:"tirunelveli",
                    services:"4"
                },
            ]
            dispatch({
                type:actionTypes.SET_OUR_CUSTOMERS,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:"error"
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