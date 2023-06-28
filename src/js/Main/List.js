import React, {useState, useEffect, useRef} from 'react';
import "../../css/List.css"
import AddTaskModal from "./AddTaskModal";
import {GetIssuesData, DeleteIssueData} from "../API/api";

const List = () => {
    const [dataIssues, setDataIssues] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        GetIssuesData(setDataIssues)
            .then()
            .catch(error => {
                console.log("ERROR 1 : " + error.response.data.message);
            })
    }, []);

    const deleteIssue = (id, reporter) => {
        const jsonData = {
            reporter: reporter,
            id: id
        }
        DeleteIssueData(jsonData)
        setTimeout(() => {
            GetIssuesData(setDataIssues)
                .then()
                .catch(error => {
                    console.log("ERROR 2 : " + error.response.data.message);
                    window.location.reload();
                })
        }, 250);
    }

    return (
        <body className="dark-mode">
        <div className="container justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <h1 className="mb-4">Todo List</h1>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search Issue ..."
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <AddTaskModal/>
            </div>
            {(dataIssues.length === 0) ?
                <figure>
                    <blockquote className="blockquote">
                        <h3 className="text-center display-3">You have no Issue</h3>
                    </blockquote>
                    <figcaption className="display-6 text-center">
                        Click on <cite title="Source Title">Add Issue</cite>
                    </figcaption>
                </figure> :
                <table className="table dark-mode">
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
                    {dataIssues.map((task) => (
                        <tr key={task.id}>
                            <td className="text-center">{task.id}</td>
                            <td className="text-center">{task.summary.length > 50 ? `${task.summary.slice(0, 50)}...` : task.summary}</td>
                            <td className="text-center">{task.priority}</td>
                            <td className="text-center">{task.condition}</td>
                            <td className="text-center">
                                <button className="btn btn-outline-danger me-3"
                                        onClick={() => deleteIssue(task.id, task.reporter)}>Delete
                                </button>
                                <button className="btn btn-outline-info me-3">Show Info</button>
                                <button className="btn btn-outline-warning">Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
        </div>
        </body>
    );
};

export default List;