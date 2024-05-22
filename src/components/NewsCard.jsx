import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const NewsCard = ({ data }) => {
    const { title, url, urlToImage, description, author, sources } = data;
    return (
        <>
            <Col md={4} className="mb-3">
                <Card>
                    <Card.Img
                        variant="top"
                        src={urlToImage}
                        className="w-100 h-100 card-img"
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {/* Posted by: {author ? author : "Anonymous"} */}
                        </Card.Text>
                        <Card.Text>{description}</Card.Text>
                        <Link
                            className="btn btn-primary"
                            to={url}
                            target="_blank"
                        >
                            Read More
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default NewsCard;
