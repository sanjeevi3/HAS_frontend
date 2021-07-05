import { useRef } from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import action from "../../store/actions"
const NavigationItem=props=>{
    const history=useHistory()
    const linkClickHandler=()=>{
        props.removeSideDrawer();
        if(props.navigationItem.name==="log out"){
            props.removeUser()
            history.push("/login")
        }
    }
    const linkRef=useRef(null)
    return(
        <li onClick={()=>{linkRef.current.click()}} key={props.navigationItem.path}>
        <NavLink ref={linkRef} onClick={linkClickHandler}  to={props.navigationItem.path} >{props.navigationItem.name}</NavLink>
      </li>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return({
        removeUser:()=>dispatch(action.user.removeUser())
    })
}
export default connect(null,mapDispatchToProps)(NavigationItem);