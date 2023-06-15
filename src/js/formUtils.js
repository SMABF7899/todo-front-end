// File: formUtils.js
import { useState } from 'react';
import data from "bootstrap/js/src/dom/data";

export const initialFormData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
};

export const displayError = (error) => {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.innerText = error;
    }
};

export const handleFormChange = (event, formData, setFormData) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};


export const handleSubmitForm = (event, formData, submitFormData) => {
    event.preventDefault();

    submitFormData(formData)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            displayError(error.response.data.message)
            console.error(error.response.data.message);
        });
};