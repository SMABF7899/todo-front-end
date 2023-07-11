import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const ShowInfoIssue = ({onViewIssue}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Show Info
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="number"
                                name="summary"
                                value={onViewIssue.id}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                type="text"
                                name="summary"
                                value={onViewIssue.summary}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="reporter">
                            <Form.Label>Reporter</Form.Label>
                            <Form.Control
                                type="text"
                                name="reporter"
                                value={onViewIssue.reporter}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={onViewIssue.description}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                type="number"
                                name="priority"
                                value={onViewIssue.priority}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="condition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control
                                type="number"
                                name="condition"
                                value={onViewIssue.condition}
                                disabled
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ShowInfoIssue;