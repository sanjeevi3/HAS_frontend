import { Fragment, useState } from "react";
import MyWorkTable from "../Components/myWork/MyWorkTable";
import CardHeader from  "../Components/UI/CardHeader";


const MyWork=props=>{
    
    
    return(
        <Fragment>
            <CardHeader>My Work</CardHeader>
            <div className="body">
                <MyWorkTable  />
            </div>
        </Fragment>
    )
}

export default MyWork;