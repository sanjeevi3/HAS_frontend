import { useHistory } from "react-router";
import Coloumn from "../UI/Coloumn";
import Row from "../UI/Row";
import Table from "../UI/Table";
import actions from "../../store/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
const OurServicesTable=props=>{
    useEffect(()=>{
        props.setOurServices();
    },[])
    console.log("our services",props.ourServices)
    const history=useHistory()
    return(
        <Table>
                    <thead>
                        <Row>
                            <th>customer</th>
                            <th>worker</th>
                           
                            <th>work</th>
                            <th>address</th>
                            <th>time</th>
                            <th>status</th>
                            
                        </Row>
                    </thead>
                    {props.ourServices?
                    <tbody>
                        {props.ourServices.map((ourService,index)=>{
                            return(<Row key={index} click={()=>history.push("our-services/"+index)}>
                                <Coloumn>{ourService.customer}</Coloumn>
                                <Coloumn>{ourService.worker}</Coloumn>
                                <Coloumn>{ourService.work}</Coloumn>
                                <Coloumn>{ourService.address}</Coloumn>
                                <Coloumn>{ourService.time}</Coloumn>
                                <Coloumn>{ourService.status}</Coloumn>
                                        
                                    </Row>)
                        })}
                    </tbody>:
                    <tfoot>
                    <Row>
                        <td className="text-danger text-center" colSpan="6">Data is Not Found</td>
                    </Row>
                </tfoot>}
                </Table>
    )
}

const mapStateToProps=state=>{
    return{
        ourServices:state.ourServices.totalData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setOurServices:()=>dispatch(actions.ourServices.getAll())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurServicesTable);