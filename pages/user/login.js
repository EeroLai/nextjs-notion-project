import Layout from "../components/layout"
import {
    Form,
    Button
} from "react-bootstrap";

export default function login() {

    return (
        <div style={{ marginTop: '5%' }}>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <Form style={{ margin: '0 auto', padding: '12px', width: '40%' }}>
                <Form.Group size="lg" controlId="email" style={{ margin: "1%" }}>
                    <Form.Label style={{ textAlign: 'left' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group size="lg" controlId="password" style={{ margin: "1%" }}>
                    <Form.Label style={{ textAlign: 'left' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ float: 'right', marginTop: '5%' }}>
                    Login
                </Button>
            </Form>
        </div>
    )
}