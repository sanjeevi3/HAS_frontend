import { Redirect, Route, Switch } from 'react-router'
import LogIn from '../pages/LogIn';
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile"
import MyService from "../pages/MyService"
import MyWork from "../pages/MyWork"
import Notification from "../pages/Notification"
import OurCustomers from "../pages/OurCustomers"
import OurServices from "../pages/OurServices"
import OurEmployees from "../pages/OurEmployees"
import Service from "../pages/Service"
import Work from "../pages/Work"
import work from "../pages/Work";
import OurCustomer from "../pages/OurCustomer";
import OurEmployee from "../pages/OurEmployee";
import OurService from "../pages/OurService";
import Register from '../pages/Register';
import AddRequest from '../pages/AddRequest';
import { connect } from 'react-redux';
import ContactVerification from '../pages/ContactVerification';
import VerificationInstruction from '../pages/VerificationInstruction';
import ResetPassword from '../pages/ResetPassword';
import Authorized from '../layout/authorized';
import NotAuthorized from '../layout/notAuthorized'


// This component return routes based on authorized and user type.
const Routes = props => {
    //this array have authorized url and its access user.
    const routes = [

        {
            name: "profile",
            path: "/profile",
            visible: ["customer", "admin", "worker"],
            component: <Profile />
        },
        {
            name: "edit-profile",
            path: "/profile/edit",
            visible: ["customer", "admin", "worker"],
            component: <EditProfile />
        },
        {
            name: "my-service",
            path: "/my-service",
            visible: ["customer"],
            component: <MyService />
        },
        {
            name: "my-work",
            path: "/my-work",
            visible: ["worker"],
            component: <MyWork />
        },
        {
            name: "work",
            path: "/my-work/:id",
            visible: ["worker"],
            component: <Work />
        },
        {
            name: "service",
            path: "/my-service/:id",
            visible: ["customer"],
            component: <Service />
        },
        {
            name: "add service",
            path: "/add-service",
            visible: ["customer"],
            component: <AddRequest />
        },
        {
            name: "our-services",
            path: "/our-services",
            visible: ["admin"],
            component: <OurServices />
        },
        {
            name: "our-employees",
            path: "/our-employees",
            visible: ["admin"],
            component: <OurEmployees />
        },
        {
            name: "our-customers",
            path: "/our-customers",
            visible: ["admin"],
            component: <OurCustomers />
        },
        {
            name: "our-customer",
            path: "/our-customers/:id",
            visible: ["admin"],
            component: <OurCustomer />
        },
        {
            name: "our-employee",
            path: "/our-employees/:id",
            visible: ["admin"],
            component: <OurEmployee />
        },
        {
            name: "our-services",
            path: "/our-services/:id",
            visible: ["admin"],
            component: <OurService />
        }


    ].filter(navigationItem => navigationItem.visible.includes(props.userType) || !props.userType)
    console.log("user ", props.userType)

    return (
        <>
            {
                // if user is authorized use Authorized component otherwise use non authorized component.
                !props.authorized ? <NotAuthorized>
                    <Switch>
                        <Route path="/" exact><Redirect to="/login" /></Route>
                        <Route path="/login"><LogIn /></Route>
                        <Route path="/register"><Register /></Route>
                        <Route path="/contact-verification"><ContactVerification /></Route>
                        <Route path="/reset-password/:token"><ResetPassword /></Route>

                        <Route path="/verification-instruction" ><VerificationInstruction /></Route>
                        {
                            routes.map(route => {
                                return (
                                    <Route exact key={route.name} path={route.path} ><Redirect to="/login" /></Route>
                                )
                            })
                        }

                    </Switch>
                </NotAuthorized> :
                    <Authorized>
                        <Switch>

                            


                            {
                                routes.map(route => {
                                    return (
                                        <Route exact key={route.name} path={route.path} >{route.component}</Route>
                                    )
                                })
                            }
                            <Route path="/login"><Redirect to="/profile" /></Route>
                            <Route path="/register"><Redirect to="/profile" /></Route>
                            <Route path="/contact-verification"><Redirect to="/profile" /></Route>
                            <Route path="/reset-password/:token"><Redirect to="/profile" /></Route>

                            <Route path="/verification-instruction" ><Redirect to="/profile" /></Route>
                            <Route path="*">not found</Route>
                        </Switch>
                    </Authorized>
            }


        </>
    )
}
const mapStateToProps = state => {
    return {
        userType: state.user.userType,
        authorized: state.user.authorized
    }
}

export default connect(mapStateToProps)(Routes);