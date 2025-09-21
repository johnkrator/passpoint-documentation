import {Menu, Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/contexts/ThemeContext";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";
import Logo from "@/assets/passpoint-logo.webp";

interface HeaderProps {
    onMenuClick: () => void;
}

const Header = ({onMenuClick}: HeaderProps) => {
    const {theme, setTheme} = useTheme();

    return (
        <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
            <div className="flex items-center justify-between px-3 sm:px-4 py-3">
                {/* Left section - Logo and menu toggle */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-900 cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2 flex-shrink-0"
                        onClick={onMenuClick}
                    >
                        <Menu className="h-4 w-4 sm:h-5 sm:w-5"/>
                    </Button>
                    <Link to="/" className="flex items-center gap-2 min-w-0">
                        <img src={Logo} className="h-8 sm:h-10 w-auto object-contain" alt="Passpoint Logo"/>
                    </Link>
                </div>

                {/* Center section - Search (hidden on small tablets and below) */}
                <div className="hidden lg:flex flex-1 max-w-md mx-4 xl:mx-8">
                    <SearchInput/>
                </div>

                {/* Right section - Navigation */}
                <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <Link to="/"
                          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium hidden md:block"
                    >
                        Docs
                    </Link>
                    <a href="https://documenter.getpostman.com/view/606896/2sAXqy3evj#intro" target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium"
                    >
                        API
                    </a>
                    <a href="https://mypasspoint.com/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium hidden lg:block"
                    >
                        Website
                    </a>
                    <a href="https://go-dev.mypasspoint.com/dashboard" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium hidden xl:block"
                    >
                        Dashboard
                    </a>

                    {/* Theme toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="text-gray-700 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 flex-shrink-0"
                    >
                        {theme === "light" ? (
                            <Moon className="h-4 w-4"/>
                        ) : (
                            <Sun className="h-4 w-4"/>
                        )}
                    </Button>
                </nav>
            </div>

            {/* Search for tablet and mobile */}
            <div className="lg:hidden px-3 sm:px-4 pb-3">
                <SearchInput/>
            </div>
        </header>
    );
};

export default Header;