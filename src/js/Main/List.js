import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/List.css"

const List = () => {
    const [taskList, setTaskList] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('Token')
            const response = await axios.post('http://127.0.0.1:5000/allIssues?reporter=ma.banifatemi&jwt=' + token);
            setTaskList(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addTask = async () => {
        if (taskInput.trim() !== '') {
            // ارسال درخواست POST به API برای افزودن وظیفه جدید
            try {
                await axios.post('your-api-endpoint', { title: taskInput }); // جایگزین کنید با آدرس API واقعی
                fetchData(); // بازیابی اطلاعات بروز شده از سرور
                setTaskInput('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    const deleteTask = async (taskId) => {
        // ارسال درخواست DELETE به API برای حذف وظیفه
        try {
            await axios.delete(`your-api-endpoint/${taskId}`); // جایگزین کنید با آدرس API واقعی
            fetchData(); // بازیابی اطلاعات بروز شده از سرور
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="mb-4">Todo List</h1>
            <div className="mb-3">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Add a new task"
                    className="form-control"
                />
            </div>
            <button onClick={addTask} className="btn btn-primary mb-3">Add Task</button>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Summary</th>
                    <th scope="col" className="text-center">Priority</th>
                    <th scope="col" className="text-center">Condition</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {taskList.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.summary.length > 50 ? `${task.summary.slice(0, 50)}...` : task.summary}</td>
                        <td className="text-center">{task.priority}</td>
                        <td className="text-center">{task.condition}</td>
                        <td>
                            <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;