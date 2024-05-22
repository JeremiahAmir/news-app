import { Col, Container, Form, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import useTopHeadlines from "../hooks/useTopHeadlines";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSources, useFilterSources } from "../hooks/useSources";
import { useEffect, useState } from "react";
import { setCategory } from "../store/newsSlice";
const News = () => {
  const getHeadlines = useSelector((store) => store.news.topHeadlines);
  const getSources = useSelector((store) => store.news.sources);
  const getNewsBySource = useSelector((store) => store.news.newsBySource);
  const [currentCategory] = useState(localStorage.getItem("category"));

  const dispatch = useDispatch();
  useTopHeadlines();
  useSources();
  useFilterSources(currentCategory);
  const handleSelect = (e) => {
    dispatch(setCategory(e.target.value));
    localStorage.setItem("category", e.target.value);
  };

  return (
    <>
      <div className="news-section py-5">
        <Container>
          <h2 className="mb-4">Popular News</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <select
                  className="form-select me-3"
                  name=""
                  id=""
                  value={currentCategory ? currentCategory : ""}
                  onChange={handleSelect}
                >
                  <option value="">Please Select</option>
                  {getSources.map((source) => (
                    <option key={source.id} value={source.id}>
                      {source.name}
                    </option>
                  ))}
                </select>
                <button className="btn btn-primary">Search</button>
              </Form>
            </Col>
          </Row>
          <Row>
            {getNewsBySource && getNewsBySource.length
              ? getNewsBySource.map((headline, index) => (
                  <NewsCard key={index} data={headline} />
                ))
              : getHeadlines.map((headline, index) => (
                  <NewsCard key={index} data={headline} />
                ))}
          </Row>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Link className="btn btn-primary" to={"/search-news"}>
                  View More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default News;
