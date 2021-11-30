
import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"
import  axiosInstance  from "./axiosInstance"
import {REQUEST_URL} from "./url"
import store from ".././store/"
export default {
addRequest:data=>axiosInstance().post(REQUEST_URL.ADD_REQUEST,JSON.stringify(data))
}