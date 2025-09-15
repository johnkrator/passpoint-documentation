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
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Left section - Logo and menu toggle */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2"
                        onClick={onMenuClick}
                    >
                        <Menu className="h-5 w-5"/>
                    </Button>
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} className="w-full h-10 object-cover" alt=""/>
                    </Link>
                </div>

                {/* Center section - Search */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <SearchInput/>
                </div>

                {/* Right section - Navigation */}
                <nav className="flex items-center gap-4">
                    <Link to="/"
                          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                        Docs
                    </Link>
                    <a href="https://documenter.getpostman.com/view/606896/2sAXqy3evj#intro" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                        API
                    </a>
                    <a href="https://mypasspoint.com/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium hidden sm:block"
                    >
                        Go to Passpoint Website
                    </a>
                    <a href="https://go-dev.mypasspoint.com/dashboard" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium hidden sm:block"
                    >
                        Go to Passpoint Dashboard
                    </a>

                    {/* Theme toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {theme === "light" ? (
                            <Moon className="h-4 w-4"/>
                        ) : (
                            <Sun className="h-4 w-4"/>
                        )}
                    </Button>
                </nav>
            </div>

            {/* Mobile search */}
            <div className="md:hidden px-4 pb-3">
                <SearchInput/>
            </div>
        </header>
    );
};

export default Header;