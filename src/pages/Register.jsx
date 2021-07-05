import RegisterCard from "../Components/register/RegisterCard";
import RegisterForm from "../Components/register/RegisterForm";


const Register=(props)=>{
    return(
        <div className="row justify-content-center pt-5">
           <RegisterCard>
                <RegisterForm />
           </RegisterCard>
        </div>
    )
}

export default Register;