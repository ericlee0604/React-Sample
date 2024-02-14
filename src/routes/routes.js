import { useRoutes } from "react-router-dom";
import SignIn from "../sign/signin";
import React from "react";


export default function Router(){
    const routes = useRoutes([
        {
            path:"/",
            element: React.lazy(() => import("../landing/Landing"))
        },
        {
            path:"/login",
            element: React.lazy(() => import("../sign/signin"))
        },
        {
            path:"/signup",
            element: React.lazy(()=> import("../sign/signup"))
        }
    ])
    
    return routes;
}