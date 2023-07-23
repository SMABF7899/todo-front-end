import React, {useEffect, useRef} from 'react';
import "../../css/List.css"
import AddDataIssue from "./AddDataIssue";
import ShowInfoIssue from "./ShowInfoIssue";
import EditDataIssue from "./EditDataIssue";
import DeleteIssue from "./DeleteIssue";
import {GetAllIssues, CheckToken, CheckValidationEmail} from "../API/api";
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import {FilterIssuesData} from "./FilterIssuesData";
import { useNavigate } from "react-router-dom";


const List = () => {
    const {
        sortByTime,
        sortByPriority,
        sortByCondition,
        handleSelectTime,
        handleSelectPriority,
        handleSelectCondition,
        handleSubmitData,
        formDataIssuesFilter,
        setFormDataIssuesFilter
    } = FilterIssuesData();
    const navigate = useNavigate();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setTimeout(() => {
            CheckToken()
                .then(data => {
                    console.log(data);
                    CheckValidationEmail(localStorage.getItem('Username'))
                        .then(data => {
                            console.log(data)
                            GetAllIssues(setFormDataIssuesFilter)
                                .then()
                                .catch(error => {
                                    console.log("ERROR 1 : " + error.response.data.message);
                                })
                        })
                        .catch(error => {
                            navigate('/validation');
                            console.error(error.response.data);
                        })
                })
                .catch(error => {
                    console.error(error.response.data.message);
                    navigate('/');
                })
        }, 50);
    }, [setFormDataIssuesFilter, navigate]);

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

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <body className="dark-mode">
        <div style={{height: '100vh'}}>
            <Button variant="dark" className="m-4 logo-font btn-lg" onClick={goToHomePage}>
                TODO
            </Button>
            {(formDataIssuesFilter.length === 0) ?
                <div className="container justify-content-center align-items-center dark-mode">
                    <div className="text-center glass mb-5">
                        <Row>
                            <Col>
                                <AddDataIssue/>
                            </Col>
                            <Col>
                                <Dropdown onSelect={handleSelectTime}>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                        {sortByTime}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <React.Fragment>
                                            <Dropdown.Item eventKey="">None</Dropdown.Item>
                                            <Dropdown.Item eventKey="new">Newest</Dropdown.Item>
                                            <Dropdown.Item eventKey="old">Oldest</Dropdown.Item>
                                        </React.Fragment>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown onSelect={handleSelectPriority}>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                        {sortByPriority}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <React.Fragment>
                                            <Dropdown.Item eventKey="">None</Dropdown.Item>
                                            <Dropdown.Item eventKey={1}>Low</Dropdown.Item>
                                            <Dropdown.Item eventKey={2}>Medium</Dropdown.Item>
                                            <Dropdown.Item eventKey={3}>High</Dropdown.Item>
                                        </React.Fragment>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown onSelect={handleSelectCondition}>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                        {sortByCondition}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <React.Fragment>
                                            <Dropdown.Item eventKey="">None</Dropdown.Item>
                                            <Dropdown.Item eventKey={1}>To Do</Dropdown.Item>
                                            <Dropdown.Item eventKey={2}>In Progress</Dropdown.Item>
                                            <Dropdown.Item eventKey={3}>Done</Dropdown.Item>
                                        </React.Fragment>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Button className="btn btn-light" onClick={handleSubmitData}>
                                    Filter Issue
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <figure>
                        <blockquote className="blockquote">
                            <h3 className="text-center display-3">You have no Issue</h3>
                        </blockquote>
                    </figure>
                </div> :
                <div className="container justify-content-center align-items-center dark-mode text-center glass">
                    <Row>
                        <Col>
                            <AddDataIssue/>
                        </Col>
                        <Col>
                            <Dropdown onSelect={handleSelectTime}>
                                <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                    {sortByTime}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <React.Fragment>
                                        <Dropdown.Item eventKey="">None</Dropdown.Item>
                                        <Dropdown.Item eventKey="new">Newest</Dropdown.Item>
                                        <Dropdown.Item eventKey="old">Oldest</Dropdown.Item>
                                    </React.Fragment>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown onSelect={handleSelectPriority}>
                                <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                    {sortByPriority}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <React.Fragment>
                                        <Dropdown.Item eventKey="">None</Dropdown.Item>
                                        <Dropdown.Item eventKey={1}>Low</Dropdown.Item>
                                        <Dropdown.Item eventKey={2}>Medium</Dropdown.Item>
                                        <Dropdown.Item eventKey={3}>High</Dropdown.Item>
                                    </React.Fragment>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown onSelect={handleSelectCondition}>
                                <Dropdown.Toggle variant="outline-light" id="dropdown-custom">
                                    {sortByCondition}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <React.Fragment>
                                        <Dropdown.Item eventKey="">None</Dropdown.Item>
                                        <Dropdown.Item eventKey={1}>To Do</Dropdown.Item>
                                        <Dropdown.Item eventKey={2}>In Progress</Dropdown.Item>
                                        <Dropdown.Item eventKey={3}>Done</Dropdown.Item>
                                    </React.Fragment>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button className="btn btn-light" onClick={handleSubmitData}>
                                Filter Issue
                            </Button>
                        </Col>
                    </Row>
                    <hr className="line"/>
                    <table className="table dark-mode mt-3">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col" className="text-center">ID</th>
                            <th scope="col" className="text-center">Summary</th>
                            <th scope="col" className="text-center">Priority</th>
                            <th scope="col" className="text-center">Condition</th>
                            <th scope="col" className="text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {formDataIssuesFilter.map((issue) => (
                            <tr key={issue.id}>
                                <td className="text-center">{issue.id}</td>
                                <td className="text-center">{issue.summary.length > 50 ? `${issue.summary.slice(0, 50)}...` : issue.summary}</td>
                                <td className="text-center">{PriorityShow(issue.priority)}</td>
                                <td className="text-center">{ConditionShow(issue.condition)}</td>
                                <td className="text-center">
                                    <DeleteIssue onDeleteIssue={issue}/>
                                    <ShowInfoIssue onViewIssue={issue}/>
                                    <EditDataIssue onEditIssue={issue}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
        </body>
    );
};

export default List;