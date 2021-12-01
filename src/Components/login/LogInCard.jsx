// this component for card as login
/* 
    props
    tittle - page name
*/
const LogInCard=(props)=>{
    console.log("login card")
    return(
        <div className="col-md-8 col-11 card login-card">
                <div className="row ">
                    <div className="d-none d-md-block col-md-6"></div>
                    <div className="col-md-6 col-12 py-5 px-3">
                        <div>
                           <h3 className="title mb-3">{props.tittle}</h3>
                            {props.children}
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LogInCard;