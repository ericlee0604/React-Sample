import { useRoutes } from "react-router-dom";
import SignIn from "../sign/signin";
import React from "react";

const routes = useRoutes([
    {
        path:"/",
        Component: React.lazy(() => import("../landing/Landing"))
    },
    {
        path:"/login",
        Component: React.lazy(() => import("../sign/signin"))
    },
    {
        path:"/signup",
        Component: React.lazy(()=> import("../sign/signup"))
    }
])

export default routes;