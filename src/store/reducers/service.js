import actions from '../actions';
import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   totalData:null
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
       
        
        case actionTypes.SUCCESS_UPDATE_SERVICE_STATUS:
            return{
                ...state,
                data:{
                    ...state.data,
                    ...action.data
                }
                

            };
        case actionTypes.SUCCESS_GET_SERVICE:
            return{
                ...state,
                data:action.data,
              
            }
        case actionTypes.GET_SERVICES:
            return{
                ...state,
                totalData:action.data,
              
            }
            
      default:
          return state;
    }
}

export default reducer;