import Layout from "../components/layout";
import { useState, useEffect } from "react";
import firebase from '../../firebase/initFirebase'
import {
    Form,
    Button
} from "react-bootstrap";

firebase();
export default function register() {
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [checkPassword , setCheckPassword ] = useState('');

    function registBtn(){
        if(password == checkPassword){
            
        }else{
            alert('密碼不一致');
            return false;
        }
    }
    
    return (
        <Layout>
            <div style={{ marginTop: '5%' }}>
                <h1 style={{ textAlign: 'center' }}>Register</h1>
                <Form style={{ margin: '0 auto', padding: '12px', width: '40%' }}>
                    <Form.Group size="lg" controlId="email" style={{ margin: "1%" }}>
                        <Form.Label style={{ textAlign: 'left' }}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password" style={{ margin: "1%" }}>
                        <Form.Label style={{ textAlign: 'left' }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete="off" onChange={e=> setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group size="lg" controlId="checkPassword" style={{ margin: "1%" }}>
                        <Form.Label style={{ textAlign: 'left' }}>Check Password</Form.Label>
                        <Form.Control type="password" placeholder="Check Password" autoComplete="off" />
                    </Form.Group>
                    <Button style={{ float: 'right', marginTop: '5%' }} onClick={registBtn}>
                        Register
                    </Button>
                </Form>
            </div>
        </Layout>
    )
}