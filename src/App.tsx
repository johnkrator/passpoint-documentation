import {Button} from "@/components/ui/button.tsx";

const App = () => {
    return (
        <div>
            <h1 className="flex items-center gap-1 justify-center text-3xl font-bold text-center underline">
                Hello world!
                <Button className="cursor-pointer" variant="destructive">Click me</Button>
            </h1>
        </div>
    );
};

export default App;
