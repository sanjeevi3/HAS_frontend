import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   totalData:null,
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_OUR_WORKER:
            return{
                ...state,
                data:action.data,
                
            }
        case actionTypes.SET_OUR_WORKERS:
            return{
                ...state,
                totalData:action.data,
                
            }
      default:
          return state;
    }
}

export default reducer;