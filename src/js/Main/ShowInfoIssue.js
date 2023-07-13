import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const ShowInfoIssue = ({onViewIssue}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const PriorityShow = (priority) => {
        if (priority === 1)
            return "Low"
        if (priority === 2)
            return "Medium"
        if (priority === 3)
            return "High"
    }

    const ConditionShow = (condition) => {
        if (condition === 1)
            return "To Do"
        if (condition === 2)
            return "In Progress"
        if (condition === 3)
            return "Done"
    }

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
                            <Form.Label className="mb-0">ID</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="number"
                                name="summary"
                                value={onViewIssue.id}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="summary">
                            <Form.Label className="mb-0">Summary</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="summary"
                                value={onViewIssue.summary}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="reporter">
                            <Form.Label className="mb-0">Reporter</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="reporter"
                                value={onViewIssue.reporter}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label className="mb-0">Description</Form.Label>
                            <Form.Control
                                className="mb-3"
                                as="textarea"
                                rows={3}
                                name="description"
                                value={onViewIssue.description}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label className="mb-0">Priority</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="priority"
                                value={PriorityShow(onViewIssue.priority)}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="condition">
                            <Form.Label className="mb-0">Condition</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="condition"
                                value={ConditionShow(onViewIssue.condition)}
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