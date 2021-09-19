import {
    Navbar,
    Nav,
    Button,
    Container,
} from "react-bootstrap";
import Link from 'next/link';
export default function header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">NextJS-Notion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href='/user/login'><Button>Sign in</Button></Nav.Link>
                    <Nav.Link href='/user/register'>Register</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}