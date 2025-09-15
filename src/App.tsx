import Routes from "@/Routes.tsx";
import {RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <RouterProvider router={Routes()}/>
    );
};

export default App;
