import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import avatar from "../../Services/avatar.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
    return (
        <Navbar key="false" bg="light" expand="false" className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-false"
                    aria-labelledby="offcanvasNavbarLabel-expand-false"
                    placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                            Меню
                        </Offcanvas.Title>
                    </Offcanvas.Header><Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">
                                Список постов
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                Обо мне
                            </Nav.Link>
                            <Navbar.Text>Имя:</Navbar.Text>
                            <Navbar.Text>
                                <a href="aromawriter@mail.ru">aromawriter@mail.ru</a>
                            </Navbar.Text>
                            <Image roundedCircle="true" src={avatar} />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}