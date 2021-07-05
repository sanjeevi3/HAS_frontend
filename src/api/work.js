import actionTypes from "../store/actions/actionTypes"
import store from '../store';
import actions from "../store/actions";
store.getState()

export default {
    get:(dispatch,id)=>{
        try {
            const data = {
                customer:"sanjai",
                cost:null,
                phone:"9123510364",
                address:"13b langargana street, palayamkottai",
                district:"tirunelveli",
                time:"",
                credits:"5",
                status_code:"WS"
            }
            if(data){
             
                dispatch({
                    type:actionTypes.SET_WORK,
                    data:data
                })
                dispatch(actions.ui.endAPI({
                    modal:data.status_code==="CL"?"work cancel":data.status_code==="CD"?"work finished":null
                }))
            }
        } catch (error) {
            alert("error")
            dispatch(actions.ui.endAPI({error:"error"}))
        }
    },
    updateStatus:(dispatch,serviceId,statusCode)=>{
        try {
        
          dispatch({
              type:actionTypes.UPDATE_WORK_STATUS,
              data:{
                  status_code:statusCode
              }
          })
          dispatch(actions.ui.endAPI({
            modal:"success",
            success:statusCode=="WS"?"analyse issue and send report":statusCode=="WFC"?"waiting for confirmation":statusCode=="WFP"?"wait for payment":null
        }))
        } catch (error) {
            dispatch(actions.ui.endAPI({error:"error"}))
        }
    },
    updateWorkReport:(dispatch,serviceId)=>{
        try {
        
          dispatch({
              type:actionTypes.SUCCESS_UPDATE_SERVICE_STATUS,
              data:{
                  status_code:"OP",
                  cost:200
              }
          })
          dispatch(actions.ui.endAPI())
        } catch (error) {
            dispatch(actions.ui.endAPI({error:"error"}))
        }
    },
    getAll:(dispatch)=>{
        try {
            const data=[
                {
                    customer:"kumar",
                    address:"13b langargana street",
                    time:"29/04/2021 16:20",
                    status:"onprocess"
                },
                {
                    customer:"aumar",
                    address:"13b langargana street",
                    time:"29/04/2021 16:20",
                    status:"onprocess"
                }
            ] 
            dispatch({
                type:actionTypes.SET_WORKS,
                data:data
            })
            dispatch(actions.ui.endAPI({}))
          } catch (error) {
            dispatch(actions.ui.endAPI({error:"error"}))
          }
      }
    
}