import actionTypes from '../actions/actionTypes'

const initialState={
   workRequest:{
       data:"your work in palayamkottai",
       id:"sgs"
   }
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SUCCESS_SET_MY_SERVICE:
            alert(action.type)
            return{
                data:action.data,
                error:null,
                loader:false
            }
      default:
          return state;
    }
}

export default reducer;