import { useHistory } from "react-router";
import Coloumn from "../UI/Coloumn";
import Row from "../UI/Row";
import Table from "../UI/Table";
import actions from "../../store/actions"
import { connect } from "react-redux";
import { useEffect } from "react";

const MyServiceTable=props=>{
    const history=useHistory()
    useEffect(()=>{
        props.setMyService();
    },[])
    console.log("my service",props.myServices)
    return(
        props.myServices&&<Table>
                    <thead>
                        <Row>
                            <th>worker</th>
                            
                            <th>work</th>
                            <th>cost</th>
                            <th>status</th>
                            <th></th>
                        </Row>
                    </thead>
                    {props.myServices.length?<tbody>
                        {props.myServices.map((myService,index)=>{
                            return(<Row click={()=>history.push("/my-service/"+index)} key={myService.worker}>
                                
                                <Coloumn>{myService.worker}</Coloumn>
                                <Coloumn>{myService.work}</Coloumn>
                                <Coloumn>{myService.time}</Coloumn>
                                <Coloumn>{myService.status}</Coloumn>
                                        
                                    </Row>)
                        })}
                    </tbody>
                   :<tfoot>
                        <Row>
                            <td className="text-danger text-center" colSpan="4">Data is Not Found</td>
                        </Row>
                    </tfoot>}
                </Table>
                
    )
}

const mapStateToProps=state=>{
    return{
        myServices:state.service.totalData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setMyService:()=>dispatch(actions.service.getServices())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyServiceTable);