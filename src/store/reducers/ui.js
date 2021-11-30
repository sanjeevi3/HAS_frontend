import { useHistory } from 'react-router'
import actionTypes from '../actions/actionTypes'


const initialState={
   loader:false,
   modal:{
       tittle:null,
       body:null,
       success:null,
       failure:null,
       successClick:null,
       failureClick:null,
       open:false
   }
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.START_API:
            return {
                ...state,
                loader:true
            }
            case actionTypes.END_API:
      
            return {
                ...state,
                loader:false,
               ...action.data
                
            }
            
            case actionTypes.OPEN_MODAL:
                return{
                    ...state,
                    modal:{
                        ...state.modal,
                        ...action.modal
                    }
                }
        case actionTypes.CLOSE_MODAL:
                return{
                    ...state,
                    modal:{
                        tittle:null,
                        body:null,
                        success:null,
                        failure:null,
                        successClick:null,
                        failureClick:null,
                        open:false
                    }
                }
      default:
          return state;
    }
}

export default reducer;