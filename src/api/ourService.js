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
                type:actionTypes.SET_OUR_SERVICE,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
            
        } catch (error) {
            
            dispatch(actions.ui.endAPI({
                error:"error"
            }))
        }
    },
    getAll:(dispatch)=>{
        try {
            const data=[
                {
                    customer:"kumar",
                    worker:"vignesh",
                    work:"plumbering",
                    time:"29/04/2021 16:20",
                    status:"onprocess",
                    address:"13b langargana street",
                    place:"palayamkottai",
                    district:"tirunelveli"
                },
                {
                    customer:"kumar",
                    worker:"vignesh",
                    work:"plumbering",
                    time:"29/04/2021 16:20",
                    status:"onprocess",
                    address:"13b langargana street",
                    place:"palayamkottai",
                    district:"tirunelveli"
                }
            ];
            dispatch({
                type:actionTypes.SET_OUR_SERVICES,
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