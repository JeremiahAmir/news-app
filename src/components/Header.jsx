import { NavbarBrand, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <Link className="navbar-brand" to={"/"}>
            News App
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/search-news"}>
                Search News
              </Link>
              {/* <Link className="nav-link" to={"/contact"}>
                                Contact
                            </Link>
                            <NavDropdown title="en" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#anchor">
                                    Action
                                </NavDropdown.Item>
                            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
