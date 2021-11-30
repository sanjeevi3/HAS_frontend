import actionTypes from './actionTypes'
import actions from './index'
 export default  {
    startAPI:(userType)=>{
        
        return {
            type:actionTypes.START_API,
        }
    },
 endAPI:(data)=>{
        
        
            return {
                type:actionTypes.END_API,
                data:data,
            }
      
       
    },
    
openModal:(modal)=>{
    return{
        type:actionTypes.OPEN_MODAL,
        modal:modal
    }
},
closeModal:()=>{
    return{
        type:actionTypes.CLOSE_MODAL,
        
    }
},
errorModal:(modal)=>{
  return {
        type:actionTypes.OPEN_MODAL,
        modal:{
            tittle:"Error",
            body:"Network Error",
            open:true,
            ...modal
            }
        }
    },
successModal:(message)=>{
    return{
        type:actionTypes.OPEN_MODAL,
        modal:{
            tittle:"Success",
            body:message,
            open:true
        }
    }
},
messageModal:(modal)=>{
    return dispatch => dispatch({
        type:actionTypes.OPEN_MODAL,
        modal:{
            tittle:"Message",
            open:true,
            success:"ok",
            ...modal
        }
    })
}
}
