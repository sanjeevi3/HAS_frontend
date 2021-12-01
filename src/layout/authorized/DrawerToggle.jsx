// props.click - onclick for drawer toggle

const DrawerToggle=(props)=>{
    console.log("DrawerToggle")
    return(
        <div onClick={props.click} className="drawer-toggle px-2 d-block d-md-none">
            <div></div>
            <div className="my-2"></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle;