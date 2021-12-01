import {useState} from "react"
import BackDrop from "../../Components/UI/BackDrop";
import Loader from "../../Components/UI/Loader";
import MyModal from "../../Components/UI/MyModal";
import Header from "./Header";
import NavigationItems from "./NavigationItems";

// this is authorized layout for user

const Authorized=(props)=>{
  console.log("auth layout")
  const [state, setstate] = useState({sideDrawer:false,backDrop:false})
const menuToggleClickHandler=()=>{
  
if(state.sideDrawer){
  removeSideDrawer()
}else{
  setstate({sideDrawer:true,backDrop:true})
}
}
const removeSideDrawer=()=>{
  setstate({sideDrawer:false,backDrop:false})
}
    return(
        <>
      <Header menuToggleClickHandler={menuToggleClickHandler} />
      {
        state.backDrop &&<BackDrop click={removeSideDrawer}/>
      }
      <Loader />
      <MyModal/>
  
      <div className={`col-md-2 col-8 px-1 navigation-block ${state.sideDrawer?"opened":"closed"}`}>
       <nav><NavigationItems removeSideDrawer={removeSideDrawer}/></nav>
        </div>
      
          
          <div className="col-md-10 col-12 page-block">
          <div className="row justify-content-center py-3">
          <div className="col-11 p-3  my-card">
            {props.children}
            </div>
        </div>
      <div > </div>
      </div>
          
      </>
    )
}

export default Authorized;