
        import actions from '.'
        import ourService from '../../api/ourService'
        
        
         export default  {
             get:(id)=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourService.get(dispatch,id)
                    }, 2000);
                }
             },
             getAll:()=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourService.getAll(dispatch)
                    }, 2000);
                }
             },
             delete:(id)=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourService.delete(dispatch,id)
                    }, 2000);
                }
             }
         }
       
     