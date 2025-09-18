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

import ErrorBoundary, {RouterErrorBoundary} from "@/components/ErrorBoundary.tsx";

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
            errorElement: <RouterErrorBoundary/>,
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
                {path: "payout/momo/get-network", element: <Home/>},
                {path: "payout/momo/get-payout-network", element: <Home/>},
                {path: "payout/momo/validate-msisdn", element: <Home/>},
                {path: "payout/momo/transfer", element: <Home/>},
                {path: "payout/bank", element: <PayoutBank/>},
                {path: "payout/bank/local", element: <PayoutBankLocal/>},
                {path: "payout/bank/local/get-banks", element: <Home/>},
                {path: "payout/bank/local/account-enquiry", element: <Home/>},
                {path: "payout/bank/local/account-transfer-ngn", element: <Home/>},
                {path: "payout/bank/local/passpoint-enquiry", element: <Home/>},
                {path: "payout/bank/local/passpoint-wallet-transfer", element: <Home/>},
                {path: "payout/bank/foreign", element: <PayoutBankForeign/>},
                {path: "payout/bank/foreign/get-available-countries", element: <Home/>},
                {path: "payout/bank/foreign/get-payment-methods", element: <Home/>},
                {path: "payout/bank/foreign/ach-usd", element: <Home/>},
                {path: "payout/bank/foreign/wire-usd", element: <Home/>},
                {path: "payout/bank/foreign/rtp-usd", element: <Home/>},
                {path: "payout/bank/foreign/fednow-usd", element: <Home/>},
                {path: "payout/bank/foreign/account-deposit-usd", element: <Home/>},
                {path: "payout/bank/foreign/account-deposit-gbp", element: <Home/>},
                {path: "payout/bank/foreign/account-deposit-eur", element: <Home/>},
                {path: "payout/bank/foreign/account-deposit-cny", element: <Home/>},
                {path: "payout/bank/foreign/momo-deposit-cny", element: <Home/>},
                {path: "payout/bank/foreign/b2b-transfer-cny", element: <Home/>},
                {path: "payout/bank/foreign/b2c-transfer-cny", element: <Home/>},
                {path: "payout/bank/foreign/b2b-transfer-usd", element: <Home/>},
                {path: "payout/rate", element: <Home/>},
                {path: "payout/report", element: <Home/>},
                {path: "payout/convert-funds", element: <PayoutConvertFunds/>},

                // Collection Routes
                {path: "collection", element: <Collection/>},
                {path: "collection/momo/get-currency", element: <Home/>},
                {path: "collection/momo/get-network", element: <Home/>},
                {path: "collection/momo/request-to-pay", element: <Home/>},
                {path: "collection/bank", element: <CollectionBank/>},
                {path: "collection/bank/open-banking", element: <CollectionBankOpenBanking/>},
                {path: "collection/bank/open-banking/get-banks", element: <Home/>},
                {path: "collection/bank/open-banking/request-payment-foreign", element: <Home/>},
                {path: "collection/bank/open-banking/request-payment-foreign-tokenization", element: <Home/>},
                {path: "collection/bank/open-banking/request-payment-foreign-tokenization-new-payer", element: <Home/>},
                {path: "collection/bank/get-collection-currency", element: <Home/>},
                {path: "collection/bank/generate-ngn-static-virtual-account", element: <Home/>},
                {path: "collection/bank/generate-usd-virtual-account-individual", element: <Home/>},
                {path: "collection/bank/generate-usd-virtual-account-business", element: <Home/>},
                {path: "collection/bank/list-virtual-accounts-ngn-paginated", element: <Home/>},
                {path: "collection/bank/get-virtual-account", element: <Home/>},
                {path: "collection/report", element: <Home/>},
                {path: "collection/wallet-credit-callback-sample", element: <Home/>},
                {path: "collection/list-countries", element: <Home/>},
                {path: "collection/transfer-status", element: <Home/>},
                {path: "collection/payment-status-report", element: <Home/>},
                {path: "collection/resend-single-webhook", element: <Home/>},
                {path: "collection/resend-bulk-webhook", element: <Home/>},
                {path: "collection/confirm-momo-payment", element: <Home/>},

                // Legacy routes for backward compatibility
                {path: "transfer/payout", element: <Payout/>},
                {path: "transfer/collection", element: <Collection/>},

                {path: "global-callback-setup", element: <GlobalCallbackSetup/>},
                {path: "virtual-card-v2", element: <Home/>}, // Placeholder for Virtual Card v2 page
                {path: "card-acquiring", element: <Home/>}, // Placeholder for Card Acquiring page
                {path: "user-roles", element: <UserRoles/>},
                {path: "status-responses", element: <StatusResponses/>},
                // Catch-all route for 404 errors
                {path: "*", element: <RouterErrorBoundary/>}
            ]
        }
    ]);
};

export default Routes;