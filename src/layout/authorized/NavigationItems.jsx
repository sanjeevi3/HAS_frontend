import { Fragment } from "react"
import { connect } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import NavigationItem from "./NavigationItem"
import actions from './../../store/actions'

const Navigation=(props)=>{
    console.log("Navigation")
    const navigationItems=[
        {
        name:"profile",
        path:"/profile",
        visible:["customer","admin","worker"]
    },
    {
        name:"add service",
        path:"/add-service",
        visible:["customer"]
    },
    {
        name:"my service",
        path:"/my-service",
        visible:["customer"]
    },
    
    {
        name:"my work",
        path:"/my-work",
        visible:["worker"]
    },
    {
        name:"our employees",
        path:"/our-employees",
        visible:["admin"]
    },
    {
        name:"our services",
        path:"/our-services",
        visible:["admin"]
    },
    {
        name:"our customers",
        path:"/our-customers",
        visible:["admin"]
    },
    
].filter(navigationItem=>navigationItem.visible.includes(props.userType))
const history=useHistory()
const logOut=()=>{
 props.removeUser();
 history.push("login")

}
    return(
        <>
          <ul className="navigation">
              {
                  navigationItems.map(navigationItem=>{
                    return(
                        <Fragment key={navigationItem.path}>
                      <NavigationItem removeSideDrawer={props.removeSideDrawer} navigationItem={navigationItem} />
                      
                      </Fragment>
                    )
                  })
              }
            
            <li onClick={logOut} className="text-capitalize text-white">log out</li> 
          </ul>
          
       </>
    )
}

const mapStateToProps=state=>{
    return(
        {
            userType:state.user.userType
        }
    )
}

const mapDispatchToProps=dispatch=>{
    return(
        {
            removeUser:()=>dispatch(actions.user.removeUser())
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);