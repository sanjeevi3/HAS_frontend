import { useHistory } from "react-router";
import Button from "../UI/Button";
import Coloumn from "../UI/Coloumn";
import Row from "../UI/Row";
import Table from "../UI/Table";
import actions from "../../store/actions";
import ourCustomers from "../../store/actions/ourCustomers";
import { connect } from "react-redux";
import { useEffect } from "react";
const OurCustomersTable=props=>{
    useEffect(()=>{
        props.setOurCustomers();
    },[])
    const history=useHistory()
    return(
        props.ourCustomers&&<Table>
                    <thead>
                        <Row>
                            <th>name</th>
                            <th>age</th>
                            <th>state</th>
                            <th>district</th>
                            <th>services</th>
                            <th></th>
                        </Row>
                    </thead>
                    {props.ourCustomers?<tbody>
                        {props.ourCustomers.map((ourCustomer,index)=>{
                            return(<Row key={index} click={()=>history.push("our-customers/"+index)}>
                                
                                <Coloumn>{ourCustomer.name}</Coloumn>
                                <Coloumn>{ourCustomer.age}</Coloumn>
                                <Coloumn>{ourCustomer.state}</Coloumn>
                                <Coloumn>{ourCustomer.district}</Coloumn>
                                <Coloumn>{ourCustomer.services}</Coloumn>
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
        ourCustomers:state.ourCustomers.totalData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setOurCustomers:()=>dispatch(actions.ourCustomers.getAll())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OurCustomersTable);