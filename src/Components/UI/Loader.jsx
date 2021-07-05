import {memo} from 'react';
import { connect } from 'react-redux';
import BackDrop from './BackDrop';

const Loader = (props)=>{
    console.log('loder');
    return (
 props.loader&&<>
    <BackDrop />
    <div className="loader" >Loading...</div>
    </>
    );
}

const mapStateToProps=state=>{
    return{
        loader:state.ui.loader
    }
}
export default connect(mapStateToProps)(Loader);