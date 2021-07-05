import { Fragment } from "react";
import MyServiceTable from "../Components/myService/MyServiceTable";
import CardHeader from  "../Components/UI/CardHeader";
import Coloumn from "../Components/UI/Coloumn";
import Row from "../Components/UI/Row";
import Table from "../Components/UI/Table";

const MyService=props=>{
   
    return(
        <Fragment>
            <CardHeader>My Service</CardHeader>
            <div className="body">
              <MyServiceTable  />
            </div>
        </Fragment>
    )
}

export default MyService;