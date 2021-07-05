import {useState,useCallback,Fragment} from 'react';
import {Link} from 'react-router-dom'
import LogInCard from '../Components/login/LogInCard';
import LogInForm from '../Components/login/LogInForm';

const LogIn=(props)=>{
    
    
    return(
        <div className="row justify-content-center pt-5">
            <LogInCard tittle="LOG IN" >
                <LogInForm />
            </LogInCard>
        </div>
    )

}

export default LogIn;