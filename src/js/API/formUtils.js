// File: formUtils.js

import {CheckValidationEmail} from "./api";

export const signupFormData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
};

export const loginFormData = {
    username: '',
    password: ''
};

export const issueFormData = {
    summary: '',
    reporter: '',
    description: '',
    priority: ''
};

export const issueFormEditData = {
    id: '',
    summary: '',
    reporter: '',
    description: '',
    priority: '',
    condition: ''
};

export const issuesFormFilterData = {
    reporter: '',
    time: '',
    priority: '',
    condition: ''
}

export const displayErrorMessage = (message) => {
    const errorElement = document.getElementById('info-message');
    if (errorElement) {
        errorElement.className = "badge bg-danger"
        errorElement.innerText = message;
    }
};


export const displaySuccessMessage = (message) => {
    const successElement = document.getElementById('info-message');
    if (successElement) {
        successElement.className = "badge bg-success"
        successElement.innerText = message;
    }
};

export const handleFormChange = (event, formData, setFormData) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};


export const handleSubmitSignupForm = (event, formData, submitFormData, navigate, navigatePath, key) => {
    event.preventDefault();

    submitFormData(formData)
        .then(data => {
            displaySuccessMessage(data.message)
            console.log(data.message);
            setTimeout(() => {
                navigate(navigatePath);
            }, 2000);
        })
        .catch(error => {
            displayErrorMessage(error.response.data.message)
            console.error(error.response.data.message);
        });
};

export const handleSubmitLoginForm = (event, formData, submitFormData, navigate, navigatePath) => {
    event.preventDefault();

    CheckValidationEmail(formData.username)
        .then(data => {
            console.log(data.message)
        })
        .catch(error => {
            navigatePath = "/validation";
            console.error(error.response.data);
        })

    submitFormData(formData)
        .then(data => {
            displaySuccessMessage(data.message)
            console.log(data.message);
            localStorage.setItem('Token', data.jwt);
            localStorage.setItem('Username', formData.username);
            setTimeout(() => {
                navigate(navigatePath);
            }, 2000);
        })
        .catch(error => {
            displayErrorMessage(error.response.data.message)
            console.error(error.response.data.message);
        });
};

export const handleSubmitFormIssue = (event, formData, submitFormData) => {
    event.preventDefault();
    if (formData.priority === '') {
        displayErrorMessage("Please specify the priority")
        return;
    } else
        formData.priority = parseInt(formData.priority);

    submitFormData(formData)
        .then(data => {
            console.log(data.message);
            displaySuccessMessage(data.message);
        })
        .catch(error => {
            console.error(error.response.data.message);
            if (error.response.data.message === false)
                displayErrorMessage("Please login first !");
            else
                displayErrorMessage(error.response.data.message);
        });
};

export const handleSubmitFormIssueEdit = (event, formData, submitFormData) => {
    event.preventDefault();
    formData.id = parseInt(formData.id);
    formData.priority = parseInt(formData.priority);
    formData.condition = parseInt(formData.condition);

    submitFormData(formData)
        .then(data => {
            console.log(data.message);
            displaySuccessMessage(data.message);
        })
        .catch(error => {
            console.error(error.response.data.message);
            displayErrorMessage(error.response.data.message);
        });
};

export const handleSubmitFormIssuesFilter = (event, formData, setFormData, submitFormData) => {
    event.preventDefault();
    const username = localStorage.getItem('Username');
    if (formData.priority === '')
        formData.priority = 0;
    else
        formData.priority = parseInt(formData.priority);
    if (formData.condition === '')
        formData.condition = 0;
    else
        formData.condition = parseInt(formData.condition);
    formData.reporter = username;

    submitFormData(formData)
        .then(data => {
            setFormData(data.message)
        })
        .catch(error => {
            console.error(error);
        });
};