// File: api.js
import axios from 'axios';

export const submitFormSignupData = (formData) => {
    const formDataJson = JSON.stringify(formData);

    return axios.post('http://127.0.0.1:5000/signup', formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const submitFormLoginData = (formData) => {
    const formDataJson = JSON.stringify(formData);

    return axios.post('http://127.0.0.1:5000/login', formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const GetAllIssues = (setDataIssues) => {
    const username = localStorage.getItem('Username');
    const token = localStorage.getItem('Token')
    return axios.post('http://127.0.0.1:5000/allIssues?reporter=' + username + '&jwt=' + token, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            setDataIssues(response.data.message);
        })
        .catch(error => {
            throw error;
        })
};

export const DeleteIssueData = (formData) => {
    const token = localStorage.getItem('Token');
    const formDataJson = JSON.stringify(formData);
    return axios.post('http://127.0.0.1:5000/deleteIssue?jwt=' + token, formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response.data.message)
        })
        .catch(error => {
            throw error;
        })
};

export const submitFormIssueData = (formData) => {
    const formDataJson = JSON.stringify(formData);
    const token = localStorage.getItem('Token');
    return axios.post('http://127.0.0.1:5000/createIssue?jwt=' + token, formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const submitFormIssueEditData = (formData) => {
    const formDataJson = JSON.stringify(formData);
    const token = localStorage.getItem('Token');
    return axios.post('http://127.0.0.1:5000/editIssue?jwt=' + token, formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const SubmitFormIssuesFilterData = (formData) => {
    const formDataJson = JSON.stringify(formData);
    const token = localStorage.getItem('Token');
    return axios.post('http://127.0.0.1:5000/filterIssues?jwt=' + token, formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};