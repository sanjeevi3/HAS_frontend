import { Fragment } from "react";
import OurServicesTable from "../Components/ourServices/OurServicesTable";
import CardHeader from  "../Components/UI/CardHeader";
import Coloumn from "../Components/UI/Coloumn";
import Row from "../Components/UI/Row";
import Table from "../Components/UI/Table";
const OurServices=props=>{
    
    return(
        <Fragment>
            <CardHeader>Our Services</CardHeader>
            <div className="body">
                <OurServicesTable  />
            </div>
        </Fragment>
    )
}

export default OurServices;