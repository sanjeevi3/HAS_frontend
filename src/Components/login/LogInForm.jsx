import { Fragment, useState, useEffect } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import actions from "../../store/actions"
import { useForm } from 'react-hook-form'
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// This component return login form and handling 
/* 
    props
    login - its do api configuration for login
*/

const LogInForm = (props) => {
    console.log("LogInForm")
    const { register, handleSubmit, errors, setError } = useForm()
    const history = useHistory()
    const currentPath = history.location.pathname
    useEffect(() => {
        //if server error is found then set error 
        if (props.error) {
            for (const key in props.error) {
                setError(key, {
                    type: "server",
                    message: props.error[key]
                })

            }

        }

        return () => {
            
        }
    }, [props])




    const inputs = [
        {
            elementType: "input",
            elementConfig: {
                type: "text",
                name: "user_name",
                placeholder: "User Name,Email Id"
            },
            label: "User Name",
            validation: {
                required: "The User Name Field is Required"
            },

        },
        {
            elementType: "input",
            elementConfig: {
                type: "password",
                name: "password",
                placeholder: "Password"
            },
            label: "Password",
            validation: {
                required: "The Password Field is Required"
            },

        }
    ]

    const logInHandler = (data) => {
        
        const formdata = JSON.stringify(data)

        props.login(formdata, history)



    }
    return (
        <form onSubmit={handleSubmit(logInHandler)}>
            {
                inputs.map(input => {
                    return (
                        <Fragment key={input.elementConfig.name}>
                            <Input
                                refrence={register(input.validation)}
                                elementType={input.elementType}
                                elementConfig={input.elementConfig}
                                label={input.label}
                                required={input.validation.required}
                                error={errors[input.elementConfig.name]}
                            />
                        </Fragment>

                    )
                })
            }
            <div className="row  justify-content-center">
                <div className="py-2"><Button buttonType="success">Log In</Button></div>
            </div>
            <div className="mt-3 text-center">
                <p className="text-white">If you don't have account please <Link to="/register">click here</Link> ?</p>
                <p className="text-white">Forget password <Link to="/contact-verification">click here</Link> ?</p>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        login: state.login.success,
        error: state.login.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data, history) => dispatch(actions.user.login(data, history))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);