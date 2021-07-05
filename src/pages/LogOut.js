const LogOut=(props)=>{
    
    return null
}
const mapDispatchToProps=(dispatch)=>{
    return({
        removeUser:()=>dispatch(action.user.removeUser())
    })
}
export default connect(null,mapDispatchToProps)(NavigationItem);