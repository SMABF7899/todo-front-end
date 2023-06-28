import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTaskModal = ({ onAddTask }) => {
    const [show, setShow] = useState(false);
    const [taskData, setTaskData] = useState({
        summary: '',
        description: '',
        priority: '',
        condition: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(taskData);
        setTaskData({
            summary: '',
            description: '',
            priority: '',
            condition: '',
        });
        handleClose();
    };

    return (
        <body className="dark-mode">
            <Button variant="outline-success" onClick={handleShow}>
                Add Issue
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                type="text"
                                name="summary"
                                value={taskData.summary}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={taskData.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                type="text"
                                name="priority"
                                value={taskData.priority}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="condition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control
                                type="text"
                                name="condition"
                                value={taskData.condition}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </body>
    );
};

export default AddTaskModal;