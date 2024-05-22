import { useEffect } from "react";
import { NEWS_API_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSources, getNewsBySource } from "../store/newsSlice";

export const useSources = () => {
  const dispatch = useDispatch();
  const baseUrl = NEWS_API_BASE_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const getSources = async () => {
    try {
      const data = await fetch(
        `${baseUrl}top-headlines/sources?apiKey=${apiKey}`
      );
      const json = await data.json();
      dispatch(addSources(json?.sources));
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getSources();
  }, []);
  return;
};

export const useFilterSources = (category) => {
  const dispatch = useDispatch();

  const baseUrl = NEWS_API_BASE_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const getCategories = async () => {
    try {
      const data = await fetch(
        `${baseUrl}top-headlines?sources=${category}&apiKey=${apiKey}`
      );
      const json = await data.json();
    //   console.log(json?.articles);
      dispatch(getNewsBySource(json?.articles));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return;
};
