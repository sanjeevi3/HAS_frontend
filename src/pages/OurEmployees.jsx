import { Fragment } from "react";
import OurEmployeesTable from "../Components/ourEmployees/OurEmployeesTable";
import CardHeader from  "../Components/UI/CardHeader";
import Coloumn from "../Components/UI/Coloumn";
import Row from "../Components/UI/Row";
import Table from "../Components/UI/Table";
const OurEmployees=props=>{
    
    return(
        
        <Fragment>
            <CardHeader>Our Employees</CardHeader>
            <div className="body">
                <OurEmployeesTable  />
            </div>
        </Fragment>
    )
}

export default OurEmployees;