import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import LoginComp from "../components/LoginComp";
import Signup from "../components/Signup";
import ForgotPassComp from "../components/ForgotPassComp";




const router =createBrowserRouter([
        {path:"",element:<Dashboard/>
           
        },
        {path:"dashboard",element:<Dashboard/>},
        {path:"login",element:<LoginComp/>},
        {path:"signup",element:<Signup/>},
        {path:"forgot",element:<ForgotPassComp/> }
    
        

])

export default router;