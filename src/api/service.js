import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"
import service from "../store/actions/service"
let data ={
    worker:"sanjai",
    work:"plumbering",
    gender:"male",
    age:"21",
    phone:"9123510364",
    time:"29/04/99",
    status:"waiting for confirmation",
    status_code:"WFC",
    credits:"5",
    
}
export default {
get:(dispatch,serviceId)=>{
    try {
        
        if(data){
         
            dispatch({
                type:actionTypes.SUCCESS_GET_SERVICE,
                data:data
            })
            dispatch(actions.ui.endAPI({
                modal:data.status_code==="WFC"?"confirm service":data.status_code==="WFP"?"pay service":null
            }))
        }
    } catch (error) {
        alert("error")
        dispatch(actions.ui.endAPI({error:"error"}))
    }
},
add:(dispatch,userId,data)=>{
    try {
        dispatch(actions.ui.endAPI({
            modal:"success",
            success:"your service was added. please wait for service man detail"
        }))
    } catch (error) {
        dispatch(actions.ui.endAPI({error:"error"}))
    }
},
updateStatus:(dispatch,serviceId,statusCode)=>{
    try {
    
      dispatch({
          type:actionTypes.SUCCESS_UPDATE_SERVICE_STATUS,
          data:{
              status_code:statusCode
          }
      })
      dispatch(actions.ui.endAPI({
        modal:"success",
        success:statusCode=="OP"?"success confirm service":statusCode=="CL"?"success cancel service":statusCode=="CD"?"success pay service":null
    }))
    } catch (error) {
        dispatch(actions.ui.endAPI({error:"error"}))
    }
},
getAll:(dispatch)=>{
    try {
        const data=[
            {
                worker:"kumar",
                work:"plumbering",
                time:"29/04/2021 16:20",
                status:"onprocess"
            }
        ]
        dispatch({
            type:actionTypes.GET_SERVICES,
            data:data
        })
        dispatch(actions.ui.endAPI({}))
      } catch (error) {
        dispatch(actions.ui.endAPI({error:"error"}))
      }
  }


}