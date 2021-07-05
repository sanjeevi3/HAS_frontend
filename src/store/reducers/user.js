import actionTypes from '../actions/actionTypes'

const initialState={
   authorized:false,
   userType:null,
   userId:null,
   login:null,
   register:null,
   error:null,
   sucsess:null,
   verification:{
       sent:"phone"
   }
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SUCCESS_LOGIN:
            return {
                ...state,
                authorized:true,
                userType:action.userType,
                userId:0
            }
        case actionTypes.FAILURE_LOGIN:
            return {
                ...state,
                error:action.error
            }
        case actionTypes.SENT_URL:
            return {
                ...state,
                verification:{
                    ...state.verification,
                    ...action.verification
                }
            }
            case actionTypes.REMOVED_USER:
               
            return {
                ...state,
                userType:null,
                authorized:false
            }
      default:
          return state;
    }
}

export default reducer;