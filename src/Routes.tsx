import {createBrowserRouter, ScrollRestoration} from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx";
import ApiRateLimits from "@/pages/ApiRateLimits.tsx";
import QuickGuides from "@/pages/QuickGuides.tsx";
import Introduction from "@/pages/Introduction.tsx";
import ApiIntegrations from "@/pages/ApiIntegrations.tsx";
import UserRoles from "@/pages/UserRoles.tsx";
import StatusResponses from "@/pages/StatusResponses.tsx";
import Authentication from "@/pages/Authentication.tsx";
import Wallet from "@/pages/Wallet.tsx";
import Transfer from "@/pages/Transfer.tsx";
import Payout from "@/pages/Payout.tsx";
import Collection from "@/pages/Collection.tsx";
import GlobalCallbackSetup from "@/pages/GlobalCallbackSetup.tsx";

// Payout Bank Pages
import PayoutBank from "@/pages/payout/PayoutBank.tsx";
import PayoutBankLocal from "@/pages/payout/PayoutBankLocal.tsx";
import PayoutBankForeign from "@/pages/payout/PayoutBankForeign.tsx";
import PayoutConvertFunds from "@/pages/payout/PayoutConvertFunds.tsx";

// Collection Bank Pages
import CollectionBank from "@/pages/collection/CollectionBank.tsx";
import CollectionBankOpenBanking from "@/pages/collection/CollectionBankOpenBanking.tsx";
import CollectionBankDirect from "@/pages/collection/CollectionBankDirect.tsx";

import ErrorBoundary, { RouterErrorBoundary } from "@/components/ErrorBoundary.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <ScrollRestoration/>
                    <ErrorBoundary>
                        <Layout/>
                    </ErrorBoundary>
                </>
            ),
            errorElement: <RouterErrorBoundary />,
            children: [
                {path: "", element: <Home/>},
                {path: "api-rate-limits", element: <ApiRateLimits/>},
                {path: "quick-guides", element: <QuickGuides/>},
                {path: "transaction-dynamics", element: <Home/>}, // Uses existing DocumentationContent
                {path: "introduction", element: <Introduction/>},
                {path: "api-integrations", element: <ApiIntegrations/>},
                {path: "authentication", element: <Authentication/>},
                {path: "wallet", element: <Wallet/>},
                {path: "transfer", element: <Transfer/>},

                // Payout Routes
                {path: "payout", element: <Payout/>},
                {path: "payout/bank", element: <PayoutBank/>},
                {path: "payout/bank/local", element: <PayoutBankLocal/>},
                {path: "payout/bank/foreign", element: <PayoutBankForeign/>},
                {path: "payout/convert-funds", element: <PayoutConvertFunds/>},

                // Collection Routes
                {path: "collection", element: <Collection/>},
                {path: "collection/bank", element: <CollectionBank/>},
                {path: "collection/bank/open-banking", element: <CollectionBankOpenBanking/>},
                {path: "collection/bank/direct", element: <CollectionBankDirect/>},

                // Legacy routes for backward compatibility
                {path: "transfer/payout", element: <Payout/>},
                {path: "transfer/collection", element: <Collection/>},

                {path: "global-callback-setup", element: <GlobalCallbackSetup/>},
                {path: "virtual-card-v2", element: <Home/>}, // Placeholder for Virtual Card v2 page
                {path: "card-acquiring", element: <Home/>}, // Placeholder for Card Acquiring page
                {path: "user-roles", element: <UserRoles/>},
                {path: "status-responses", element: <StatusResponses/>},
                // Catch-all route for 404 errors
                {path: "*", element: <RouterErrorBoundary />}
            ]
        }
    ]);
};

export default Routes;