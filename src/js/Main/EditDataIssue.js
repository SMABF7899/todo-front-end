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
                            <Form.Label className="mb-0">ID</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="number"
                                name="summary"
                                value={formIssueData.id}
                                onChange={handleChangeData}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="summary">
                            <Form.Label className="mb-0">Summary</Form.Label>
                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="priority">
                            <Form.Label className="mb-0">Priority</Form.Label>
                            <Form.Control
                                className="mb-3"
                                as="select"
                                name="priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value={""}>Select</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="condition">
                            <Form.Label className="mb-0">Condition</Form.Label>
                            <Form.Control
                                as="select"
                                name="condition"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                            >
                                <option value={""}>Select</option>
                                <option value="1">To Do</option>
                                <option value="2">In Progress</option>
                                <option value="3">Done</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3 my-2" onClick={reloadPage}
                                disabled={formIssueData.summary === "" || formIssueData.description === "" || formIssueData.condition === "" || formIssueData.priority === ""}>
                            Edit
                        </Button>
                        <div id="info-message" className="" style={{width: '100%', fontSize: '16px'}}></div> {}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditDataIssue;