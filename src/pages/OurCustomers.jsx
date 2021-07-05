import { Fragment } from "react";
import OurCustomersTable from "../Components/ourCustomers/OurCustomersTable";
import Button from "../Components/UI/Button";
import CardHeader from  "../Components/UI/CardHeader";
import Coloumn from "../Components/UI/Coloumn";
import Row from "../Components/UI/Row";
import Table from "../Components/UI/Table";
const OurCustomers=props=>{
    
    return(
        <Fragment>
            <CardHeader>Our Customers</CardHeader>
            <div className="body">
                <OurCustomersTable  />
                            </div>
        </Fragment>
    )
}

export default OurCustomers;