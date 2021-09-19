import {
    ListGroup
} from "react-bootstrap";

export default function List() {
    return (
        <div style={{margin:'2%'}}>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" disabled>
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action>
                    This one is a button
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}