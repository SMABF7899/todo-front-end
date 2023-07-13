// File: api.js
import axios from 'axios';
import {API_ADDRESS} from "../../configs";

export const submitFormSignupData = (formData) => {
    const formDataJson = JSON.stringify(formData);

    return axios.post(API_ADDRESS + 'signup', formDataJson, {
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

    return axios.post(API_ADDRESS + 'login', formDataJson, {
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
    return axios.post(API_ADDRESS + 'allIssues?reporter=' + username + '&jwt=' + token, {
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
    return axios.post(API_ADDRESS + 'deleteIssue?jwt=' + token, formDataJson, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response.data.message);
            return response.data.message;
        })
        .catch(error => {
            throw error;
        })
};

export const submitFormIssueData = (formData) => {
    const formDataJson = JSON.stringify(formData);
    const token = localStorage.getItem('Token');
    return axios.post(API_ADDRESS + 'createIssue?jwt=' + token, formDataJson, {
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
    return axios.post(API_ADDRESS + 'editIssue?jwt=' + token, formDataJson, {
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
    return axios.post(API_ADDRESS + 'filterIssues?jwt=' + token, formDataJson, {
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

export const CheckToken = () => {
    const username = localStorage.getItem('Username');
    const token = localStorage.getItem('Token')
    return axios.post(API_ADDRESS + 'checkJWT?username=' + username + '&jwt=' + token, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
             return response.data;
        })
        .catch(error => {
            throw error;
        })
};