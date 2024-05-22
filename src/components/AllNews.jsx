import React, { useState } from "react";
import useAllNews from "../hooks/useAllNews";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";

const AllNews = () => {
  const [search, setSearch] = useState("");
  const [filterNews, setFilterNews] = useState([]);
  const getAllNews = useSelector((store) => store.news.allNews);
  useAllNews();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchBtn = () => {
    const filteredNews = getAllNews.filter((news) =>
      news.title.includes(search)
    );
    setFilterNews(filteredNews);
  };
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col md={6} className="mx-auto mb-4">
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="search"
                placeholder="Type a keyword to search"
                className="form-control me-2"
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSearchBtn}
              >
                Search
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {filterNews && filterNews.length > 0
            ? filterNews.map((news, i) => <NewsCard key={i} data={news} />)
            : getAllNews.map((news, i) => <NewsCard key={i} data={news} />)}
        </Row>
      </Container>
    </>
  );
};

export default AllNews;
