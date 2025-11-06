import Routes from "@/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="passpoint-ui-theme">
            <RouterProvider router={Routes()} />
        </ThemeProvider>
    );
};

export default App;
