import {createBrowserRouter, ScrollRestoration} from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/getting-started/Home.tsx";
import ApiRateLimits from "@/pages/guides/ApiRateLimits.tsx";
import QuickGuides from "@/pages/guides/QuickGuides.tsx";
import Introduction from "@/pages/getting-started/Introduction.tsx";
import ApiIntegrations from "@/pages/getting-started/ApiIntegrations.tsx";
import UserRoles from "@/pages/learn-more/UserRoles.tsx";
import StatusResponses from "@/pages/learn-more/StatusResponses.tsx";
import Authentication from "@/pages/api-documentation/Authentication.tsx";
import Wallet from "@/pages/api-documentation/Wallet.tsx";
import Transfer from "@/pages/api-documentation/Transfer.tsx";
import Payout from "@/pages/api-documentation/Payout.tsx";
import Collection from "@/pages/api-documentation/Collection.tsx";
import GlobalCallbackSetup from "@/pages/api-documentation/GlobalCallbackSetup.tsx";
import SandboxPlayground from "@/pages/learn-more/SandboxPlayground.tsx";

// Payout Bank Pages
import PayoutBank from "@/pages/api-documentation/transfer/payout/PayoutBank.tsx";
import PayoutBankLocal from "@/pages/api-documentation/transfer/payout/PayoutBankLocal.tsx";
import PayoutBankForeign from "@/pages/api-documentation/transfer/payout/PayoutBankForeign.tsx";
import PayoutConvertFunds from "@/pages/api-documentation/transfer/payout/PayoutConvertFunds.tsx";

// Payout Momo Pages
import PayoutMomoGetNetwork from "@/pages/api-documentation/transfer/payout/momo/PayoutMomoGetNetwork.tsx";
import PayoutMomoGetCurrency from "@/pages/api-documentation/transfer/payout/momo/PayoutMomoGetCurrency.tsx";
import PayoutMomoValidateMsisdn from "@/pages/api-documentation/transfer/payout/momo/PayoutMomoValidateMsisdn.tsx";
import PayoutMomoTransfer from "@/pages/api-documentation/transfer/payout/momo/PayoutMomoTransfer.tsx";

// Payout Bank Local Pages
import PayoutBankLocalGetBanks from "@/pages/api-documentation/transfer/payout/bank/local/PayoutBankLocalGetBanks.tsx";
import PayoutBankLocalAccountEnquiry
    from "@/pages/api-documentation/transfer/payout/bank/local/PayoutBankLocalAccountEnquiry.tsx";
import PayoutBankLocalAccountTransferNgn
    from "@/pages/api-documentation/transfer/payout/bank/local/PayoutBankLocalAccountTransferNgn.tsx";
import PayoutBankLocalPasspointEnquiry
    from "@/pages/api-documentation/transfer/payout/bank/local/PayoutBankLocalPasspointEnquiry.tsx";
import PayoutBankLocalPasspointWalletTransfer
    from "@/pages/api-documentation/transfer/payout/bank/local/PayoutBankLocalPasspointWalletTransfer.tsx";

// Payout Bank Foreign Pages
import PayoutBankForeignSummary
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignSummary.tsx";
import PayoutBankForeignGetAvailableCountries
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignGetAvailableCountries.tsx";
import PayoutBankForeignGetPaymentMethods
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignGetPaymentMethods.tsx";
import PayoutBankForeignB2cTransferCny
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignB2cTransferCny.tsx";
import PayoutBankForeignB2bTransferUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignB2bTransferUsd.tsx";
import PayoutBankForeignB2bTransferCny
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignB2bTransferCny.tsx";
import PayoutBankForeignAchUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignAchUsd.tsx";
import PayoutBankForeignWireUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignWireUsd.tsx";
import PayoutBankForeignRtpUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignRtpUsd.tsx";
import PayoutBankForeignFednowUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignFednowUsd.tsx";
import PayoutBankForeignAccountDepositUsd
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignAccountDepositUsd.tsx";
import PayoutBankForeignAccountDepositGbp
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignAccountDepositGbp.tsx";
import PayoutBankForeignAccountDepositEur
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignAccountDepositEur.tsx";
import PayoutBankForeignAccountDepositCny
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignAccountDepositCny.tsx";
import PayoutBankForeignMomoDepositCny
    from "@/pages/api-documentation/transfer/payout/bank/foreign/PayoutBankForeignMomoDepositCny.tsx";

// Collection Bank Pages
import CollectionBank from "@/pages/api-documentation/transfer/collection/CollectionBank.tsx";
import CollectionBankOpenBanking from "@/pages/api-documentation/transfer/collection/CollectionBankOpenBanking.tsx";
import CollectionReport from "@/pages/api-documentation/transfer/collection/CollectionReport.tsx";
import CollectionWalletCreditCallbackSample
    from "@/pages/api-documentation/transfer/collection/CollectionWalletCreditCallbackSample.tsx";

// Collection Momo Pages
import GetMomoCollectionNetwork from "@/pages/api-documentation/transfer/collection/momo/GetMomoCollectionNetwork.tsx";
import GetMomoCollectionCurrency
    from "@/pages/api-documentation/transfer/collection/momo/GetMomoCollectionCurrency.tsx";
import CollectionMomoRequestToPay
    from "@/pages/api-documentation/transfer/collection/momo/CollectionMomoRequestToPay.tsx";

// Collection Bank Pages
import GetCollectionCurrency from "@/pages/api-documentation/transfer/collection/bank/GetCollectionCurrency.tsx";
import CollectionGenerateNGNStaticVirtualAccount
    from "@/pages/api-documentation/transfer/collection/bank/CollectionGenerateNGNStaticVirtualAccount.tsx";
import CollectionGenerateNGNDynamicVirtualAccount
    from "@/pages/api-documentation/transfer/collection/bank/CollectionGenerateNGNDynamicVirtualAccount.tsx";
import CollectionGenerateUSDVirtualAccountIndividual
    from "@/pages/api-documentation/transfer/collection/bank/CollectionGenerateUSDVirtualAccountIndividual.tsx";
import CollectionGenerateUSDVirtualAccountBusiness
    from "@/pages/api-documentation/transfer/collection/bank/CollectionGenerateUSDVirtualAccountBusiness.tsx";
import CollectionListVirtualAccountsNgnPaginated
    from "@/pages/api-documentation/transfer/collection/bank/CollectionListVirtualAccountsNgnPaginated.tsx";
import CollectionGetVirtualAccount
    from "@/pages/api-documentation/transfer/collection/bank/CollectionGetVirtualAccount.tsx";

// Collection Bank Open Banking Pages
import CollectionRequestPaymentForeign
    from "@/pages/api-documentation/transfer/collection/bank/open-banking/CollectionRequestPaymentForeign.tsx";
import CollectionBankOpenBankingPreselect from "@/pages/api-documentation/transfer/collection/bank/open-banking/CollectionBankOpenBankingPreselect.tsx";
import CollectionGetBanks
    from "@/pages/api-documentation/transfer/collection/bank/open-banking/preselect/CollectionGetBanks.tsx";
import CollectionGetCountries
    from "@/pages/api-documentation/transfer/collection/bank/open-banking/preselect/CollectionGetCountries.tsx";
import CollectionRequestPaymentForeignWithBankPreselect
    from "@/pages/api-documentation/transfer/collection/bank/open-banking/preselect/CollectionRequestPaymentForeignWithBankPreselect.tsx";

import ErrorBoundary, {RouterErrorBoundary} from "@/components/ErrorBoundary.tsx";
import Rate from "@/pages/api-documentation/transfer/payout/Rate.tsx";
import Report from "@/pages/api-documentation/transfer/payout/Report.tsx";
import PayoutFundTransferCallbackSample
    from "@/pages/api-documentation/transfer/payout/PayoutFundTransferCallbackSample.tsx";

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
                {path: "payout/rate", element: <Rate/>},
                {path: "payout/report", element: <Report/>},
                {path: "payout/convert-funds", element: <PayoutConvertFunds/>},
                {path: "payout/funds-transfer-callback-sample", element: <PayoutFundTransferCallbackSample/>},

                // Collection Routes
                {path: "collection", element: <Collection/>},

                // Collection Momo Routes
                {path: "collection/momo/get-currency", element: <GetMomoCollectionCurrency/>},
                {path: "collection/momo/get-network", element: <GetMomoCollectionNetwork/>},
                {path: "collection/momo/request-to-pay", element: <CollectionMomoRequestToPay/>},

                // Collection Bank Routes
                {path: "collection/bank", element: <CollectionBank/>},
                {path: "collection/bank/get-collection-currency", element: <GetCollectionCurrency/>},
                {
                    path: "collection/bank/generate-ngn-static-virtual-account",
                    element: <CollectionGenerateNGNStaticVirtualAccount/>
                },
                {
                    path: "collection/bank/generate-ngn-dynamic-virtual-account",
                    element: <CollectionGenerateNGNDynamicVirtualAccount/>
                },
                {
                    path: "collection/bank/generate-usd-virtual-account-individual",
                    element: <CollectionGenerateUSDVirtualAccountIndividual/>
                },
                {
                    path: "collection/bank/generate-usd-virtual-account-business",
                    element: <CollectionGenerateUSDVirtualAccountBusiness/>
                },
                {
                    path: "collection/bank/list-virtual-accounts-ngn-paginated",
                    element: <CollectionListVirtualAccountsNgnPaginated/>
                },
                {path: "collection/bank/get-virtual-account", element: <CollectionGetVirtualAccount/>},

                // Collection Bank Open Banking Routes
                {path: "collection/bank/open-banking", element: <CollectionBankOpenBanking/>},
                {
                    path: "collection/bank/open-banking/request-payment-foreign",
                    element: <CollectionRequestPaymentForeign/>
                },

                // Collection Bank Open Banking Preselect Routes
                {path: "collection/bank/open-banking/preselect", element: <CollectionBankOpenBankingPreselect/>},
                {path: "collection/bank/open-banking/preselect/get-banks", element: <CollectionGetBanks/>},
                {path: "collection/bank/open-banking/preselect/get-countries", element: <CollectionGetCountries/>},
                {
                    path: "collection/bank/open-banking/preselect/request-payment-foreign-with-bank-preselect",
                    element: <CollectionRequestPaymentForeignWithBankPreselect/>
                },

                // Collection General Routes
                {path: "collection/report", element: <CollectionReport/>},
                {path: "collection/wallet-credit-callback-sample", element: <CollectionWalletCreditCallbackSample/>},

                // Legacy routes for backward compatibility (Payout only)
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
                {path: "sandbox-playground", element: <SandboxPlayground/>},
                // Catch-all route for 404 errors
                {path: "*", element: <RouterErrorBoundary/>}
            ]
        }
    ]);
};

export default Routes;
