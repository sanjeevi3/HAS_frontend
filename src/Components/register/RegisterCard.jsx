import { Link } from "react-router-dom";


const RegisterCard=(props)=>{
    return(
        <div className="col-md-8 col-11 card login-card">
                    <div className=" col-12 py-5 px-3">
                        <div>
                            <h3 className="title mb-3">Register</h3>
                            {props.children}
                            <div className="mt-3 text-center">
                                <p className="text-white">If you already have account please <Link to="/login">click here</Link> ?</p>
                            </div>
                        </div>
                    </div>
                
            </div>
    )
}

export default RegisterCard;