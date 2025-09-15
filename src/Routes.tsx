import {createBrowserRouter, ScrollRestoration} from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <ScrollRestoration/>
                    <Layout/>
                </>
            ),
            children: [
                {path: "", element: <Home/>},
            ]
        }
    ]);
};

export default Routes;