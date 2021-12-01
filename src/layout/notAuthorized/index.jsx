import {useState} from "react"
import { connect } from "react-redux";
import BackDrop from "../../Components/UI/BackDrop";
import Loader from "../../Components/UI/Loader";
import Modal from "../../Components/UI/Modal";
import MyModal from "../../Components/UI/MyModal";
import Header from "./Header";
import NavigationItems from "../authorized/NavigationItems";


const NotAuthorized=(props)=>{
  console.log("layout")
    return(
        <>
      <Header/>
      <Loader />
      <MyModal/>
      <div className="login-page">
      {props.children}
      </div>
          
          
      </>
    )
}
const mapStateToProps=state=>{
  return{
    authorized:state.user.authorized
  }
}
export default connect(mapStateToProps)(NotAuthorized);