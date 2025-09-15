import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface DocumentationLayoutProps {
    children: React.ReactNode;
}

const DocumentationLayout = ({children}: DocumentationLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Header */}
            <Header onMenuClick={handleMenuClick}/>

            {/* Main layout */}
            <div className="flex">
                {/* Sidebar - static on desktop, overlay on mobile */}
                <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose}/>

                {/* Main content area */}
                <main className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-gray-950 min-h-screen">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DocumentationLayout;