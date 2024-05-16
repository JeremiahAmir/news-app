import { useEffect } from "react";
import { NEWS_API_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopHeadlines } from "../store/newsSlice";

const useTopHeadlines = () => {
    const dispatch = useDispatch();
    const baseUrl = NEWS_API_BASE_URL;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const getTopHeadlines = async () => {
        try {
            const data = await fetch(
                `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`
            );
            const json = await data.json();
            const filteredResults = json?.articles.filter(
                (article) => article.title !== "[Removed]"
            );
            dispatch(addTopHeadlines(filteredResults));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTopHeadlines();
    }, []);
};

export default useTopHeadlines;
