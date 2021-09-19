import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Header from "./header"
import List from "./list"
import Head from "next/head"

export default function layout({ children }) {
    return (
        <div>
            <Head>
                <title>NextJS-notion</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Container fluid>
                <Row style={{ height: '10vh' }}>
                    <Header />
                </Row>
                <Row style={{ height: '90vh' }}>
                    <Col sm={2} style={{ height: '90vh', overflowY: 'auto' }}><List /></Col>
                    <Col sm={10} style={{ height: '90vh', overflowY: 'auto' }}>{children}</Col>
                </Row>
            </Container >
        </div>
    )
}
