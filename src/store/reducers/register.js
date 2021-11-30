import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   error:null,
   success:null,
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SUCCESS_REGISTER:
            return {
                ...state,
                error:null,
                data:null,
            }
        case actionTypes.FAILURE_REGISTER:
            return {
                ...state,
                error:action.error,
                data:action.data
            }
        case actionTypes.SET_REGISTER_DATA:
            return {
                ...state,
                data:action.data
            }
           
      default:
          return state;
    }
}

export default reducer;