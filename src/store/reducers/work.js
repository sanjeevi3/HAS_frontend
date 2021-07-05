import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   totalData:null,
   error:null,
   success:null,
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_WORKS:
            return{
                ...state,
                totalData:action.data
            }
        case actionTypes.SET_WORK:
            return{
                ...state,
                data:action.data
            }
        case actionTypes.UPDATE_WORK_STATUS:
            return{
                ...state,
                data:{
                    ...state.data,
                    ...action.data
                }
            }
        case actionTypes.SUCCESS_UPDATE_WORK_REPORT:
            return{
                ...state,
                data:{
                    ...state.data,
                    ...action.data
                },
                error:false
            }
      default:
          return state;
    }
}

export default reducer;