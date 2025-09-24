import React from "react";
import { useLocation } from "react-router-dom";
import LikeFeature from "./LikeFeature.tsx";
import PaginationNavigation from "./PaginationNavigation.tsx";
import Footer from "./Footer.tsx";

interface PageWrapperProps {
    children: React.ReactNode;
    // Optional overrides
    showLikeFeature?: boolean;
    showPaginationNavigation?: boolean;
    showFooter?: boolean;
    pageId?: string;
    className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
    children,
    showLikeFeature = true,
    showPaginationNavigation = true,
    showFooter = true,
    pageId,
    className = ""
}) => {
    const location = useLocation();

    // Generate pageId from pathname if not provided
    const generatePageId = () => {
        if (pageId) return pageId;

        // Convert pathname to pageId (remove leading slash, replace slashes with dashes)
        return location.pathname.replace(/^\//, '').replace(/\//g, '-') || 'home';
    };

    const finalPageId = generatePageId();

    return (
        <div className={`min-h-screen bg-white dark:bg-gray-950 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Main content */}
                {children}

                {/* Global components */}
                <div className="mt-8 space-y-6">
                    {/* Like Feature */}
                    {showLikeFeature && (
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <LikeFeature pageId={finalPageId} />
                        </div>
                    )}

                    {/* Pagination Navigation */}
                    {showPaginationNavigation && (
                        <PaginationNavigation />
                    )}

                    {/* Footer */}
                    {showFooter && (
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                            <Footer />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageWrapper;