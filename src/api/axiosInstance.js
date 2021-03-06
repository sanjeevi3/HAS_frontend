import axios from "axios"
import store from ".././store/"
const axiosInstance = ()=>{
    const state=store.getState()
    console.log("state",state)
    return axios.create({
        headers:{
            "Content-Type": "application/json",
             "Authorization":state.user.token?`Bearer ${state.user.token}`:""
        },
       
        baseURL:"http://localhost:3030/api/"
    })
}
export default axiosInstance;
