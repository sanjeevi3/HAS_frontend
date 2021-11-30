import actionTypes from '../actions/actionTypes'

const initialState={
   service_types:null
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_SERVICE_TYPES:
            
            return {
                ...state,
                service_types : action.data
            }
      default:
          return state;
    }
}

export default reducer;