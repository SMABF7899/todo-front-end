import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {FilterIssuesData} from "./FilterIssuesData";
import {DeleteIssueData, GetAllIssues} from "../API/api";
import {displayErrorMessage, displaySuccessMessage} from "../API/formUtils";

const DeleteIssue = ({onDeleteIssue}) => {
    const {setFormDataIssuesFilter} = FilterIssuesData()
    const reloadPage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
    const deleteIssue = (id, reporter) => {
        const jsonData = {
            reporter: reporter,
            id: id
        }
        DeleteIssueData(jsonData)
            .then(message => {
                displaySuccessMessage(message);
                reloadPage();
            })
            .catch(error => {
                console.log(error.response.data.message);
                displayErrorMessage(error.response.data.message);
            })
        setTimeout(() => {
            GetAllIssues(setFormDataIssuesFilter)
                .then()
                .catch(error => {
                    console.log("ERROR 2 : " + error.response.data.message);
                })
        }, 250);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger mx-3" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="lead">Are you sure about deleting issue with ID number {onDeleteIssue.id}?</p>
                    <Button className="mx-3 btn-danger px-4" onClick={() => deleteIssue(onDeleteIssue.id, onDeleteIssue.reporter)}>Yes</Button>
                    <Button className="mx-3 btn-primary px-4 mb-2" onClick={handleClose}>No</Button>
                    <div id="info-message" className="" style={{width: '100%', fontSize: '16px'}}></div> {}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteIssue;