import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   error:null
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SUCCESS_LOGIN:
            return {
                ...state,
                error:null,
                data:null,
            }
        case actionTypes.FAILURE_LOGIN:
            return {
                ...state,
                error:action.error,
                data:action.data
            }
        case actionTypes.SET_LOGIN_DATA:
            return {
                ...state,
                data:action.data
            }
           
      default:
          return state;
    }
}

export default reducer;