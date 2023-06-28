import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import "../../css/List.css"
import AddTaskModal from "./AddTaskModal";

const List = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        const username = localStorage.getItem('Username');
        const token = localStorage.getItem('Token')
        return axios.post('http://localhost:5000/allIssues?reporter=' + username + '&jwt=' + token, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        fetchData()
    }, []);

    return (
        <div className="container">
            <h1 className="mb-4">Todo List</h1>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search task ..."
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <AddTaskModal/>
            </div>
            <table className="table">
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
                {data.map((task) => (
                    <tr key={task.id}>
                        <td className="text-center">{task.id}</td>
                        <td className="text-center">{task.summary.length > 50 ? `${task.summary.slice(0, 50)}...` : task.summary}</td>
                        <td className="text-center">{task.priority}</td>
                        <td className="text-center">{task.condition}</td>
                        <td className="text-center">
                            {/*<button onClick={() => deleteTask(task.id, task.reporter)} className="btn btn-danger me-3">Delete</button>*/}
                            <button className="btn btn-danger me-3">Delete</button>
                            <button className="btn btn-info me-3">Show Info</button>
                            <button className="btn btn-warning">Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;