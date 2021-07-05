import { useHistory } from 'react-router'
import actionTypes from '../actions/actionTypes'


const initialState={
   loader:false,
   modal:null,
   error:null,
   success:true
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.START_API:
            return {
                modal:null,
                error:null,
                loader:true,
                success:null
            }
            case actionTypes.END_API:
      
            return {
                ...state,
               ...action.data,
                loader:false,
            }
            
            case actionTypes.UPDATE_MODAL:
                return{
                    ...state,
                    modal:action.modal
                }
        case actionTypes.CLOSE_MODAL:
                return{
                    ...state,
                    modal:null,
                    error:null,
                    success:null
                }
      default:
          return state;
    }
}

export default reducer;