import LogInCard from '../Components/login/LogInCard';

import ContactForm from '../Components/contactVerification/contactForm';
import { useState } from 'react';
const ContactVerification=(props)=>{
   const [state,setState] = useState({
       status:"before"
   },[]) 
    
    return(
        <div className="row justify-content-center pt-5">
            <LogInCard tittle="CONTACT VERIFICATION" >
               <ContactForm /> 
            </LogInCard>
        </div>
    )

}
export default ContactVerification;