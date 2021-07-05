import DrawerToggle from "./DrawerToggle";


const Header=(props)=>{
    return(
        <header  >
            <div className="row mx-0">
                <DrawerToggle click={props.menuToggleClickHandler} />
                <div className={`col-md-12 col-10`}>
          <h4 className="text-center text-bold  text-white">Home Appliances Services</h4>
        </div>
            </div>
           
        
        
      </header>
    )
}

export default Header;