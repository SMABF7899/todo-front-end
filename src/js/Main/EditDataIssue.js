import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {useFormIssueEdit} from "../API/formHooks";

const EditDataIssue = ({onEditIssue}) => {
    const {formIssueData, handleChangeData, handleSubmitData} = useFormIssueEdit();
    formIssueData.id = onEditIssue.id;
    const [summary, setSummary] = useState(onEditIssue.summary);
    formIssueData.reporter = onEditIssue.reporter;
    const [description, setDescription] = useState(onEditIssue.description);
    const [priority, setPriority] = useState(onEditIssue.priority);
    const [condition, setCondition] = useState(onEditIssue.condition);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reloadPage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    formIssueData.summary = summary;
    formIssueData.description = description;
    formIssueData.priority = priority;
    formIssueData.condition = condition;

    return (
        <>
            <Button variant="warning mx-3" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitData}>
                        <Form.Group controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="number"
                                name="summary"
                                value={formIssueData.id}
                                onChange={handleChangeData}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                type="text"
                                name="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                type="number"
                                name="priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="condition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control
                                type="number"
                                name="condition"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3" onClick={reloadPage}>
                            Edit
                        </Button>
                        <p id="info-message" className="info"></p> {}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditDataIssue;