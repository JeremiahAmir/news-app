import { Container } from "react-bootstrap";

const Banner = () => {
    const style = {
        // backgroundImage: "url(https://picsum.photos/1600/400)",
        background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://picsum.photos/1600/400)",
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover",
        padding: "200px 0",
    };
    return (
        <>
            <div className="banner" style={style}>
                <Container>
                    <h1 className="text-white text-center">
                        Your Digital News Paper
                    </h1>
                </Container>
            </div>
        </>
    );
};

export default Banner;
