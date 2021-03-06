import actionTypes from '../actions/actionTypes'

const initialState={
   
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_PROFILE:
            return{
                ...state,
                ...action.data
            }
        case actionTypes.SET_ADDRESS_LIST:
            console.log(action.data)
            return{
                   address_list:action.data
            }
      default:
          return state;
    }
}

export default reducer;