import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Header from "./components/header"
import List from "./components/list"
import Content from "./components/content"

export default function Home() {
  return (
    <Container fluid className="overflow-hidden">
      <Row style={{ height: '8vh' }}>
        <Header />
      </Row>
      <Row style={{ height: '92vh' }}>
        <Col sm={2}  style={{ height: '100%', overflow:'auto' }}><List /></Col>
        <Col sm={10} style={{ height: '100%', overflow:'auto' }}><Content /></Col>
      </Row>
    </Container >
  )
}
