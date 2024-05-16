import { Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import useTopHeadlines from "../hooks/useTopHeadlines";
import { useSelector } from "react-redux";
const News = () => {
    const getHeadlines = useSelector((store) => store.news.topHeadlines);
    // console.log(getHeadlines);
    useTopHeadlines();
    return (
        <>
            <div className="news-section py-5">
                <Container>
                    <h2 className="mb-4">Popular News</h2>
                    <Row>
                        {getHeadlines.map((headline, index) => (
                            <NewsCard key={index} data={headline} />
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default News;
