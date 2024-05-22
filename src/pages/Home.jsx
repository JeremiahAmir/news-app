import Banner from "../components/Banner";
import Header from "../components/Header";
import News from "../components/News";

const Home = () => {
    return (
        <>
            <Header />
            <Banner title={"Your Digital News Paper"} />
            <News />
        </>
    );
};

export default Home;
