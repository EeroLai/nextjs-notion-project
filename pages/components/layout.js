import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Header from "./header"
import List from "./list"

export default function layout({children}) {
    return (
        <Container fluid className="overflow-hidden">
            <Row>
                <Header />
            </Row>
            <Row>
                <Col sm={2} ><List /></Col>
                <Col sm={10}>{children}</Col>
            </Row>
        </Container >
    )
}
