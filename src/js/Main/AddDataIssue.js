import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
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
        <>
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
                        <Form.Label className="mb-0">Summary</Form.Label>
                        <Form.Control
                            className="mb-3"
                            type="text"
                            name="summary"
                            value={formIssueData.summary}
                            onChange={handleChangeData}
                        />
                    </Form.Group>
                    <Form.Group controlId="reporter">
                        <Form.Label className="mb-0">Reporter</Form.Label>
                        <Form.Control
                            className="mb-3"
                            type="text"
                            name="reporter"
                            value={formIssueData.reporter}
                            onChange={handleChangeData}
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
                            value={formIssueData.description}
                            onChange={handleChangeData}
                        />
                    </Form.Group>
                    <Form.Group controlId="priority">
                        <Form.Label className="mb-0">Priority</Form.Label>
                        <Form.Control
                            className="mb-3"
                            as="select"
                            name="priority"
                            value={formIssueData.priority}
                            onChange={handleChangeData}
                        >
                            <option value={""}>Select</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="my-2" onClick={reloadPage}
                            disabled={formIssueData.summary === "" || formIssueData.description === "" || formIssueData.priority === ""}>
                        Add
                    </Button>
                    <div id="info-message" className="" style={{width: '100%', fontSize: '16px'}}></div> {}
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
};

export default AddDataIssue;