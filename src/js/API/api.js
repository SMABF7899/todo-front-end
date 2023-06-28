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