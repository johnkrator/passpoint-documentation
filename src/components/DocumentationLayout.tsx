import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

const DocumentationLayout = ({ children }: DocumentationLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <Header onMenuClick={handleMenuClick} />

      {/* Main layout */}
      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>

        {/* Mobile sidebar */}
        <div className="lg:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        </div>

        {/* Main content area */}
        <main className="flex-1 min-w-0">
          <div className="bg-gray-950 min-h-screen">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentationLayout;