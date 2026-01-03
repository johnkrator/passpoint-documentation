import Routes from "@/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ChatProvider } from "@/contexts/ChatContext";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="passpoint-ui-theme">
            <ChatProvider>
                <RouterProvider router={Routes()} />
            </ChatProvider>
        </ThemeProvider>
    );
};

export default App;
