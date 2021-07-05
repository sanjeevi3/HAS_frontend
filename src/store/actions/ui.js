import actionTypes from './actionTypes'

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
    
updateModal:(modal)=>{
    return{
        type:actionTypes.UPDATE_MODAL,
        modal:modal
    }
},
closeModal:()=>{
    return{
        type:actionTypes.CLOSE_MODAL,
        
    }
}
}