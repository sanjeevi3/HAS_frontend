import actionTypes from '../actions/actionTypes'

const initialState={
   authorized:false,
   userType:null,
   userId:null,
   token:null,
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                authorized:true,
                userType:action.userType,
                userId:action.userId,
                token:action.token,
            }
        case actionTypes.REMOVED_USER:
            return {
                ...state,
                authorized:false,
                userType:null,
                userId:null,
                token:null,
            }
      default:
          return state;
    }
}

export default reducer;