import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   success:null,
   error:null
   
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_PROFILE:
            return{
                ...state,
                ...action.data
            }
        case actionTypes.SUCCESS_UPDATE_PROFILE:
            return{
                ...state,
                data:action.data,
                success:action.success
            }
        case actionTypes.UPDATE_WORK_REQUEST:
            return{
                ...state,
               
                    work:null
               
            }
      default:
          return state;
    }
}

export default reducer;