import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useFormIssue} from "../API/formHooks";

const AddDataIssue = () => {
    const {formIssueData, handleChangeData, handleSubmitData} = useFormIssue();
    formIssueData.reporter = localStorage.getItem('Username');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reloadPage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <body className="dark-mode">
            <Button variant="success" onClick={handleShow}>
                Add Issue
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitData}>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                type="text"
                                name="summary"
                                value={formIssueData.summary}
                                onChange={handleChangeData}
                            />
                        </Form.Group>
                        <Form.Group controlId="reporter">
                            <Form.Label>Reporter</Form.Label>
                            <Form.Control
                                type="text"
                                name="reporter"
                                value={formIssueData.reporter}
                                onChange={handleChangeData}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formIssueData.description}
                                onChange={handleChangeData}
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                type="number"
                                name="priority"
                                value={formIssueData.priority}
                                onChange={handleChangeData}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3" onClick={reloadPage}>
                            Add
                        </Button>
                        <p id="info-message" className="info"></p> {}
                    </Form>
                </Modal.Body>
            </Modal>
        </body>
    );
};

export default AddDataIssue;