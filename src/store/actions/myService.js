import actionTypes from './actionTypes'

 export default  {
     set:()=>{
         const data=[
            {
                worker:"kumar",
                work:"plumbering",
                time:"29/04/2021 16:20",
                status:"onprocess"
            }
        ]
         return{
            type:actionTypes.SUCCESS_SET_MY_SERVICE,
            data:data
         }
     }
 }