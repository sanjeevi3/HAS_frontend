
        import actions from '.'
        import ourEmployee from '../../api/ourEmployee'
        
        
         export default  {
             get:(id)=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourEmployee.get(dispatch,id)
                    }, 2000);
                }
             },
             getAll:()=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourEmployee.getAll(dispatch)
                    }, 2000);
                }
             },
             delete:(id)=>{
                return (dispatch)=>{
                    dispatch(actions.ui.startAPI())
                    setTimeout(() => {
                        ourEmployee.delete(dispatch,id)
                    }, 2000);
                }
             }
         }
       
     