const Row=props=>{
    return(
    <tr onClick={props.click}>{props.children}</tr>
    )
    }
    
    export default Row;