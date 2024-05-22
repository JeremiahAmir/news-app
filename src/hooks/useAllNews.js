import { useEffect } from "react";
import { NEWS_API_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllNews } from "../store/newsSlice";

const useAllNews = (query) => {
    const dispatch = useDispatch();
    const baseUrl = NEWS_API_BASE_URL;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const getAllNews = async () => {
        try {
            const data = await fetch(
                `${baseUrl}everything?q=*&apiKey=${apiKey}`
            );
            const json = await data.json();
            const filteredNewns = json?.articles.filter(
                (news) => news.title !== "[Removed]"
            );
            dispatch(addAllNews(filteredNewns));
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAllNews();
    }, []);
    return;
};

export default useAllNews;
