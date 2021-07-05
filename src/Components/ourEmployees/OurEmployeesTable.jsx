import { useHistory } from "react-router";
import Button from "../UI/Button";
import Coloumn from "../UI/Coloumn";
import Row from "../UI/Row";
import Table from "../UI/Table";
import actions from "../../store/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
const OurEmployeesTable=props=>{
    useEffect(()=>{
        props.setOurEmployees();
    },[])
    const history=useHistory()
    return(
        props.ourEmployees&&<Table>
                    <thead>
                        <Row>
                            <th>name</th>
                            <th>type</th>
                            
                            <th>state</th>
                            <th>district</th>
                            <th>credits</th>
                            <th></th>
                        </Row>
                    </thead>
                    {props.ourEmployees?
                    <tbody>
                        {props.ourEmployees.map((ourEmployee,index)=>{
                            return(<Row key={index} click={()=>history.push("our-employees/"+index)}>
                                <Coloumn>{ourEmployee.name}</Coloumn>
                                <Coloumn>{ourEmployee.worker_type}</Coloumn>
                                
                                <Coloumn>{ourEmployee.state}</Coloumn>
                                <Coloumn>{ourEmployee.district}</Coloumn>
                                <Coloumn>{ourEmployee.credits}</Coloumn>
                                <Coloumn><Button buttonType="danger" >delete</Button></Coloumn>
                                    </Row>)
                        })}
                    </tbody>:
                    <tfoot>
                    <Row>
                        <td className="text-danger text-center" colSpan="4">Data is Not Found</td>
                    </Row>
                </tfoot>}
                </Table>
    )
}

const mapStateToProps=state=>{
    return{
        ourEmployees:state.ourWorkers.totalData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setOurEmployees:()=>dispatch(actions.ourEmployees.getAll())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurEmployeesTable);