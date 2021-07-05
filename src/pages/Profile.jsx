import { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import ProfileField from "../Components/UI/Field"
import Button from "../Components/UI/Button";
import CardHeader from "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
import { connect } from "react-redux";
import actions from "../store/actions";
import profile from "../store/actions/profile";
const Profile=props=>{
    const history=useHistory()
     useEffect(() => {
         props.getProfile()
         return () => {
            
         }
     },[])
    return(
        
            <Fragment>
                <CardHeader>Profile</CardHeader>
                <div className="body col-12">
                    <div className="row col-12">
                   <Fields fields={props.profile} />
                    </div>
                </div>
                <div className="footer">
                    <div className="row justify-content-center">
                        <Button click={()=>history.push("/edit-profile")} buttonType="info">Edit Profile</Button>
                    </div>
                </div>
           
                </Fragment>
    )
}
const mapDispatchToprops=(dispatch)=>{
    return{
        getProfile:()=>dispatch(actions.profile.getProfile())

        
    }
}
const mapStateToProps=(state)=>{
    return{
        profile:state.profile.data
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Profile);