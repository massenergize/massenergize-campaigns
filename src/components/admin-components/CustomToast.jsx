import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function CustomToast({body, show, setShow}) {
    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/010/366/202/original/bell-icon-transparent-notification-free-png.png"
                            className="rounded me-2"
                            alt=""
                            height={30}
                            width={30}
                        />
                        <strong className="me-auto">Notification </strong>
                    </Toast.Header>
                    <Toast.Body>{body}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}

export default CustomToast;