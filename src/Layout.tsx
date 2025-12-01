import { Outlet } from "react-router-dom";
import DocumentationLayout from "@/components/DocumentationLayout";
import ChatBotWidget from "@/components/ChatBotWidget.tsx";

const Layout = () => {
    return (
        <DocumentationLayout>
            <Outlet />
            <ChatBotWidget/>
        </DocumentationLayout>
    );
};

export default Layout;