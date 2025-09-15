import Container from "@/components/Container.tsx";
import HomeComponent from "@/components/HomeComponent.tsx";

const Home = () => {
    return (
        <div className="py-8 bg-gray-900 text-white">
            <Container>
                <HomeComponent/>
            </Container>
        </div>
    );
};

export default Home;