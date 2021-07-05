
import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"


export default {
login:(dispatch,data)=>{
    try {
        dispatch({
            type:actionTypes.SUCCESS_LOGIN,
            userType:data.password,
            userId:1
        })
        dispatch(actions.ui.endAPI({
        }))
        
    } catch (error) {
        dispatch({
            type:actionTypes.FAILURE_LOGIN,
            error:{
                password:"your password was wrong",
            }
        })
        dispatch(actions.ui.endAPI({}))
    }
},
sentURL:(dispatch,data,url)=>{
    try {
        dispatch({
            type:actionTypes.SENT_URL,
           verification:{
                phone:data.phone,
                email:data.email,
                url:url
            }
        })
        dispatch(actions.ui.endAPI({
           // modal:"success",
            //success:"success fully login"
        }))
        
    } catch (error) {
        dispatch({
            type:actionTypes.FAILURE_REGISTER,
            error:{
                password:"your password was wrong",
            }
        })
        dispatch(actions.ui.endAPI({}))
    }
},
register:(dispatch,token)=>{
    try {
        dispatch({
            type:actionTypes.SUCCESS_REGISTER,
        })
        dispatch(actions.ui.endAPI({
           // modal:"success",
            //success:"success fully login"
        }))
        
    } catch (error) {
        dispatch({
            type:actionTypes.FAILURE_REGISTER,
            error:{
                password:"your password was wrong",
            }
        })
        dispatch(actions.ui.endAPI({}))
    }
},
get:(dispatch)=>{
    try {
        const data={ data:{
            first_name:"sanjeevi",
            last_name:"kumar",
            date_of_birth:"29/04/1999",
            email:"iveejnas45@gmail.com",
            phone:"9123510364",
            age:"21",
            gender:"male",
            address:"13b langargana street, palayamkottai",
            district:"tirunelveli",
            state:"tamilnadu",
            user_type:"customer",
            
        },
        work:{
            data:"you have work in langargana street, palayamkottai?",
            id:"fhgfhf"
        }}
        dispatch({
            type:actionTypes.SET_PROFILE,
            data:data
        })
        dispatch(actions.ui.endAPI({
            modal:data.work&&"work"
        }))
        
    } catch (error) {
        
        dispatch(actions.ui.endAPI({
            error:error
        }))
    }
},
update:(dispatch)=>{
    try {
        dispatch({
            type:actionTypes.SUCCESS_UPDATE_PROFILE,
            success:true
        })
        dispatch(actions.ui.endAPI({
            modal:"success",
            success:"success fully update your profile"
        }))
        
    } catch (error) {
        dispatch(actions.ui.endAPI({}))
    }
}
}