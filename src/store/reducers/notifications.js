import actionTypes from '../actions/actionTypes'

const initialState={
   data:null,
   error:null,
   loader:false
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
       
      default:
          return state;
    }
}

export default reducer;