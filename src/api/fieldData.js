import actions from "../store/actions"
import actionTypes from "../store/actions/actionTypes"
import axiosInstance from "./axiosInstance"
import { FIELD_DATA_URL } from "./url"

export default {
    getServiceTypes:()=>axiosInstance().get(FIELD_DATA_URL.GET_WORKER_TYPES),
}