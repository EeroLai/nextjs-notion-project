import Layout from "../components/layout";
import {
    Form,
    Button
} from "react-bootstrap";

export default function register() {
    return (
        <Layout>
            <div style={{marginTop:'5%'}}>
                <h1 style={{textAlign:'center'}}>Register</h1>
                <Form style={{margin:'0 auto',padding:'12px',width:'40%'}}>
                    <Form.Group size="lg" controlId="email" style={{ margin: "1%" }}>
                        <Form.Label style={{textAlign:'left'}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password" style={{ margin: "1%" }}>
                        <Form.Label style={{textAlign:'left'}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group size="lg" controlId="checkPassword" style={{ margin: "1%" }}>
                        <Form.Label style={{textAlign:'left'}}>Check Password</Form.Label>
                        <Form.Control type="password" placeholder="Check Password" />
                    </Form.Group>
                    <Button style={{float:'right', marginTop:'5%'}}>
                        Register
                    </Button>
                </Form>
            </div>
        </Layout>
    )
}