import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { SearchProvider } from "@/contexts/SearchContext";

interface DocumentationLayoutProps {
    children: React.ReactNode;
}

const DocumentationLayout = ({children}: DocumentationLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen); // Toggle instead of just opening
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <SearchProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950">
                {/* Header */}
                <Header onMenuClick={handleMenuClick}/>

                {/* Main layout */}
                <div className="flex">
                    {/* Sidebar - fixed position, toggleable on all screen sizes */}
                    <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose}/>

                    {/* Main content area - adjusts based on sidebar state */}
                    <main
                        className={`flex-1 min-w-0 transition-all duration-200 ease-in-out ${
                            sidebarOpen ? 'lg:ml-72 ml-0' : 'ml-0'
                        }`}
                    >
                        <div className="bg-white dark:bg-gray-950 min-h-screen">
                            <div className="max-w-4xl mx-auto">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </SearchProvider>
    );
};

export default DocumentationLayout;