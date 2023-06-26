import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/List.css"
import AddTaskModal from "./AddTaskModal";
import {useIssuesData} from "../API/formHooks";

const List = () => {
    const [taskList, setTaskList] = useState([]);
    // const [taskInput, setTaskInput] = useState('');
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {handleIssues} = useIssuesData();


    // const fetchData = async () => {
    //     try {
    //         const token = localStorage.getItem('Token');
    //         const username = localStorage.getItem('Username');
    //         const response = await axios.post('http://127.0.0.1:5000/allIssues?reporter=' + username + '&jwt=' + token);
    //         setTaskList(response.data.message);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== error.data.message.id));
    //     }
    // };

    // const addTask = async () => {
    //     if (taskInput.trim() !== '') {
    //         try {
    //             await axios.post('your-api-endpoint', { title: taskInput });
    //             fetchData();
    //             setTaskInput('');
    //         } catch (error) {
    //             console.error('Error adding task:', error);
    //         }
    //     }
    // };

    // const deleteTask = async (taskId, taskReporter) => {
    //     try {
    //         const issueDataForDelete = {
    //             id: taskId,
    //             reporter: taskReporter
    //         };
    //         const token = localStorage.getItem('Token');
    //         await axios.post(`http://127.0.0.1:5000/deleteIssue?jwt=` + token, issueDataForDelete);
    //         //fetchData();
    //     } catch (error) {
    //         console.error('Error deleting task:', error);
    //     }
    // };

    const handleAddTask = (taskData) => {
        console.log(taskData);
    };

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
                <AddTaskModal onAddTask={handleAddTask} />
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
                <button className="btn btn-info me-3" onClick={handleIssues}>Show Info</button>
                {console.log(handleIssues)}
                {/*{taskList.map((task) => (*/}
                {/*    <tr key={task.id}>*/}
                {/*        <td className="text-center">{task.id}</td>*/}
                {/*        <td className="text-center">{task.summary.length > 50 ? `${task.summary.slice(0, 50)}...` : task.summary}</td>*/}
                {/*        <td className="text-center">{task.priority}</td>*/}
                {/*        <td className="text-center">{task.condition}</td>*/}
                {/*        <td className="text-center">*/}
                {/*            /!*<button onClick={() => deleteTask(task.id, task.reporter)} className="btn btn-danger me-3">Delete</button>*!/*/}
                {/*            <button className="btn btn-danger me-3">Delete</button>*/}
                {/*            <button className="btn btn-info me-3">Show Info</button>*/}
                {/*            <button className="btn btn-warning">Edit</button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>
        </div>
    );
};

export default List;