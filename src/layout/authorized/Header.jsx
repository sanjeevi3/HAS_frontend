import DrawerToggle from "./DrawerToggle";
// header of the authorized layout
/* 
props
menuToggleClickHandler = open and close side nav bar
*/

const Header = (props) => {
    console.log("header")
    return (
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