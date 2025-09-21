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

// Payout Momo Pages
import PayoutMomoGetNetwork from "@/pages/payout/momo/PayoutMomoGetNetwork.tsx";
import PayoutMomoGetCurrency from "@/pages/payout/momo/PayoutMomoGetCurrency.tsx";
import PayoutMomoValidateMsisdn from "@/pages/payout/momo/PayoutMomoValidateMsisdn.tsx";
import PayoutMomoTransfer from "@/pages/payout/momo/PayoutMomoTransfer.tsx";

// Payout Bank Local Pages
import PayoutBankLocalGetBanks from "@/pages/payout/bank/local/PayoutBankLocalGetBanks.tsx";
import PayoutBankLocalAccountEnquiry from "@/pages/payout/bank/local/PayoutBankLocalAccountEnquiry.tsx";
import PayoutBankLocalAccountTransferNgn from "@/pages/payout/bank/local/PayoutBankLocalAccountTransferNgn.tsx";
import PayoutBankLocalPasspointEnquiry from "@/pages/payout/bank/local/PayoutBankLocalPasspointEnquiry.tsx";
import PayoutBankLocalPasspointWalletTransfer
    from "@/pages/payout/bank/local/PayoutBankLocalPasspointWalletTransfer.tsx";

// Payout Bank Foreign Pages
import PayoutBankForeignSummary from "@/pages/payout/bank/foreign/PayoutBankForeignSummary.tsx";
import PayoutBankForeignGetAvailableCountries
    from "@/pages/payout/bank/foreign/PayoutBankForeignGetAvailableCountries.tsx";
import PayoutBankForeignGetPaymentMethods from "@/pages/payout/bank/foreign/PayoutBankForeignGetPaymentMethods.tsx";
import PayoutBankForeignB2cTransferCny from "@/pages/payout/bank/foreign/PayoutBankForeignB2cTransferCny.tsx";
import PayoutBankForeignB2bTransferUsd from "@/pages/payout/bank/foreign/PayoutBankForeignB2bTransferUsd.tsx";
import PayoutBankForeignB2bTransferCny from "@/pages/payout/bank/foreign/PayoutBankForeignB2bTransferCny.tsx";
import PayoutBankForeignAchUsd from "@/pages/payout/bank/foreign/PayoutBankForeignAchUsd.tsx";
import PayoutBankForeignWireUsd from "@/pages/payout/bank/foreign/PayoutBankForeignWireUsd.tsx";
import PayoutBankForeignRtpUsd from "@/pages/payout/bank/foreign/PayoutBankForeignRtpUsd.tsx";
import PayoutBankForeignFednowUsd from "@/pages/payout/bank/foreign/PayoutBankForeignFednowUsd.tsx";
import PayoutBankForeignAccountDepositUsd from "@/pages/payout/bank/foreign/PayoutBankForeignAccountDepositUsd.tsx";
import PayoutBankForeignAccountDepositGbp from "@/pages/payout/bank/foreign/PayoutBankForeignAccountDepositGbp.tsx";
import PayoutBankForeignAccountDepositEur from "@/pages/payout/bank/foreign/PayoutBankForeignAccountDepositEur.tsx";
import PayoutBankForeignAccountDepositCny from "@/pages/payout/bank/foreign/PayoutBankForeignAccountDepositCny.tsx";
import PayoutBankForeignMomoDepositCny from "@/pages/payout/bank/foreign/PayoutBankForeignMomoDepositCny.tsx";

// Collection Bank Pages
import CollectionBank from "@/pages/collection/CollectionBank.tsx";
import CollectionBankDirect from "@/pages/collection/CollectionBankDirect.tsx";
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
                {path: "payout/momo/get-network", element: <PayoutMomoGetNetwork/>},
                {path: "payout/momo/get-payout-network", element: <PayoutMomoGetCurrency/>},
                {path: "payout/momo/validate-msisdn", element: <PayoutMomoValidateMsisdn/>},
                {path: "payout/momo/transfer", element: <PayoutMomoTransfer/>},
                {path: "payout/bank", element: <PayoutBank/>},
                {path: "payout/bank/local", element: <PayoutBankLocal/>},
                {path: "payout/bank/local/get-banks", element: <PayoutBankLocalGetBanks/>},
                {path: "payout/bank/local/account-enquiry", element: <PayoutBankLocalAccountEnquiry/>},
                {path: "payout/bank/local/account-transfer-ngn", element: <PayoutBankLocalAccountTransferNgn/>},
                {path: "payout/bank/local/passpoint-enquiry", element: <PayoutBankLocalPasspointEnquiry/>},
                {
                    path: "payout/bank/local/passpoint-wallet-transfer",
                    element: <PayoutBankLocalPasspointWalletTransfer/>
                },
                {path: "payout/bank/foreign", element: <PayoutBankForeign/>},
                {path: "payout/bank/foreign/summary", element: <PayoutBankForeignSummary/>},
                {
                    path: "payout/bank/foreign/get-available-countries",
                    element: <PayoutBankForeignGetAvailableCountries/>
                },
                {path: "payout/bank/foreign/get-payment-methods", element: <PayoutBankForeignGetPaymentMethods/>},
                {path: "payout/bank/foreign/ach-usd", element: <PayoutBankForeignAchUsd/>},
                {path: "payout/bank/foreign/wire-usd", element: <PayoutBankForeignWireUsd/>},
                {path: "payout/bank/foreign/rtp-usd", element: <PayoutBankForeignRtpUsd/>},
                {path: "payout/bank/foreign/fednow-usd", element: <PayoutBankForeignFednowUsd/>},
                {path: "payout/bank/foreign/account-deposit-usd", element: <PayoutBankForeignAccountDepositUsd/>},
                {path: "payout/bank/foreign/account-deposit-gbp", element: <PayoutBankForeignAccountDepositGbp/>},
                {path: "payout/bank/foreign/account-deposit-eur", element: <PayoutBankForeignAccountDepositEur/>},
                {path: "payout/bank/foreign/account-deposit-cny", element: <PayoutBankForeignAccountDepositCny/>},
                {path: "payout/bank/foreign/momo-deposit-cny", element: <PayoutBankForeignMomoDepositCny/>},
                {path: "payout/bank/foreign/b2b-transfer-cny", element: <PayoutBankForeignB2bTransferCny/>},
                {path: "payout/bank/foreign/b2c-transfer-cny", element: <PayoutBankForeignB2cTransferCny/>},
                {path: "payout/bank/foreign/b2b-transfer-usd", element: <PayoutBankForeignB2bTransferUsd/>},
                {path: "payout/rate", element: <Home/>},
                {path: "payout/report", element: <Home/>},
                {path: "payout/convert-funds", element: <PayoutConvertFunds/>},

                // Collection Routes
                {path: "collection", element: <Collection/>},
                {path: "collection/momo/get-currency", element: <Home/>},
                {path: "collection/momo/get-network", element: <Home/>},
                {path: "collection/momo/request-to-pay", element: <Home/>},
                {path: "collection/bank", element: <CollectionBank/>},
                {path: "collection/bank/direct", element: <CollectionBankDirect/>},
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

                // Global Callback Setup Routes
                {path: "global-callback-setup", element: <GlobalCallbackSetup/>},
                {path: "global-callback-setup/update-merchant-callback-url", element: <Home/>},

                // Virtual Card v2 Routes
                {path: "virtual-card-v2", element: <Home/>}, // Main Virtual Card v2 page
                {path: "virtual-card-v2/issue-card-default-billing", element: <Home/>},
                {path: "virtual-card-v2/issue-card-client-billing", element: <Home/>},
                {path: "virtual-card-v2/issue-and-fund-card-client-billing", element: <Home/>},
                {path: "virtual-card-v2/card-details", element: <Home/>},
                {path: "virtual-card-v2/card-full-pan", element: <Home/>},
                {path: "virtual-card-v2/card-balance", element: <Home/>},
                {path: "virtual-card-v2/card-profile-status", element: <Home/>},
                {path: "virtual-card-v2/freeze-card", element: <Home/>},
                {path: "virtual-card-v2/unfreeze-card", element: <Home/>},
                {path: "virtual-card-v2/fund-card", element: <Home/>},
                {path: "virtual-card-v2/withdraw-from-card", element: <Home/>},
                {path: "virtual-card-v2/card-transaction", element: <Home/>},
                {path: "virtual-card-v2/card-transactions-list", element: <Home/>},
                {path: "virtual-card-v2/terminate-card", element: <Home/>},
                {path: "virtual-card-v2/update-card-callback-details", element: <Home/>},
                {path: "virtual-card-v2/card-statement", element: <Home/>},
                {path: "virtual-card-v2/card-statement-by-transaction-id", element: <Home/>},
                {path: "virtual-card-v2/realtime-authorization-decision-maker", element: <Home/>},

                // Card Acquiring Routes
                {path: "card-acquiring", element: <Home/>}, // Main Card Acquiring page
                {path: "card-acquiring/initiate-payment-new-customer", element: <Home/>},
                {path: "card-acquiring/initiate-payment-existing-customer", element: <Home/>},
                {path: "user-roles", element: <UserRoles/>},
                {path: "status-responses", element: <StatusResponses/>},
                // Catch-all route for 404 errors
                {path: "*", element: <RouterErrorBoundary/>}
            ]
        }
    ]);
};

export default Routes;