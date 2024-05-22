import Banner from "../components/Banner";
import Header from "../components/Header";
import AllNews from "../components/AllNews";

const SearchNews = () => {
    return (
        <>
            <Header />
            <Banner title={"Search News"} />
            <AllNews />
        </>
    );
};

export default SearchNews;
