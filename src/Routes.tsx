import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx";
import ApiRateLimits from "@/pages/ApiRateLimits.tsx";
import QuickGuides from "@/pages/QuickGuides.tsx";
import Introduction from "@/pages/Introduction.tsx";
import ApiIntegrations from "@/pages/ApiIntegrations.tsx";
import UserRoles from "@/pages/UserRoles.tsx";
import StatusResponses from "@/pages/StatusResponses.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <ScrollRestoration />
                    <Layout />
                </>
            ),
            children: [
                { path: "", element: <Home /> },
                { path: "api-rate-limits", element: <ApiRateLimits /> },
                { path: "quick-guides", element: <QuickGuides /> },
                { path: "transaction-dynamics", element: <Home /> }, // Uses existing DocumentationContent
                { path: "introduction", element: <Introduction /> },
                { path: "api-integrations", element: <ApiIntegrations /> },
                { path: "user-roles", element: <UserRoles /> },
                { path: "status-responses", element: <StatusResponses /> },
            ]
        }
    ]);
};

export default Routes;