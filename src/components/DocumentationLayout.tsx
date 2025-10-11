import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollProgress from "./ScrollProgress";
import LikeFeature from "./LikeFeature.tsx";
import PaginationNavigation from "./PaginationNavigation.tsx";
import {SearchProvider} from "@/contexts/SearchContext";

interface DocumentationLayoutProps {
    children: React.ReactNode;
}

const DocumentationLayout = ({children}: DocumentationLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open
    const location = useLocation();

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen); // Toggle instead of just opening
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    // Generate pageId from pathname for LikeFeature
    const generatePageId = () => {
        return location.pathname.replace(/^\//, "").replace(/\//g, "-") || "home";
    };

    // Check if the current page should show global components
    // Exclude home page since DocumentationContent has its own footer and pagination
    const shouldShowGlobalComponents = location.pathname !== "/" && location.pathname !== "/transaction-dynamics";

    const pageId = generatePageId();

    return (
        <SearchProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950">
                {/* Scroll Progress Bar */}
                <ScrollProgress/>

                {/* Header */}
                <Header onMenuClick={handleMenuClick}/>

                {/* Main layout */}
                <div className="flex">
                    {/* Sidebar - fixed position, toggleable on all screen sizes */}
                    <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose}/>

                    {/* Main content area - adjusts based on sidebar state */}
                    <main
                        className={`flex-1 min-w-0 transition-all duration-200 ease-in-out ${
                            sidebarOpen ? "lg:ml-0 ml-0" : "lg:ml-0 ml-0"
                        }`}
                    >
                        <div className="bg-white dark:bg-gray-950 min-h-screen w-full overflow-x-hidden">
                            <div className="max-w-5xl mx-auto w-full">
                                {children}

                                {/* Global components - automatically added to all pages except home */}
                                {shouldShowGlobalComponents && (
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        {/* Like Feature */}
                                        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                                            <LikeFeature pageId={pageId}/>
                                        </div>

                                        {/* Pagination Navigation */}
                                        <div className="mt-6">
                                            <PaginationNavigation/>
                                        </div>

                                        {/* Footer */}
                                        <footer
                                            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                                            <p className="text-gray-500 dark:text-gray-400 text-sm pb-10">
                                                © {new Date().getFullYear()} Passpoint Payment Service. All rights
                                                reserved.
                                            </p>
                                        </footer>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </SearchProvider>
    );
};

export default DocumentationLayout;