import React from "react";
import {Link, useLocation} from "react-router-dom";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {getNavigationInfo} from "@/utils/navigationOrder";

interface PageInfo {
    title: string;
    href: string;
}

interface PaginationNavigationProps {
    // Optional props for manual override
    previousPage?: PageInfo;
    nextPage?: PageInfo;
    className?: string;
}

const PaginationNavigation: React.FC<PaginationNavigationProps> = ({
                                                                       previousPage: manualPreviousPage,
                                                                       nextPage: manualNextPage,
                                                                       className = ""
                                                                   }) => {
    const location = useLocation();

    // Get automatic navigation info based on the current location
    const {previousPage: autoPreviousPage, nextPage: autoNextPage} = getNavigationInfo(location.pathname);

    // Use manual props if provided, otherwise use automatic detection
    const previousPage = manualPreviousPage || autoPreviousPage;
    const nextPage = manualNextPage || autoNextPage;
    return (
        <div
            className={`flex flex-col cursor-pointer sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800 ${className}`}
        >
            {/* Previous Page */}
            <div>
                {previousPage && (
                    <Link to={previousPage.href}>
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-start px-4 py-3"
                        >
                            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
                            <div className="text-left min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                                <div className="text-sm font-medium truncate">{previousPage.title}</div>
                            </div>
                        </Button>
                    </Link>
                )}
            </div>

            {/* Next Page */}
            <div>
                {nextPage && (
                    <Link to={nextPage.href}>
                        <Button
                            variant="ghost"
                            className="w-full cursor-pointer sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
                        >
                            <div className="text-right min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                                <div className="text-sm font-medium truncate">{nextPage.title}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 flex-shrink-0"/>
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PaginationNavigation;