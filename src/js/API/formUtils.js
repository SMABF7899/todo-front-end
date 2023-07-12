// File: formUtils.js

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

export const displayMessage = (message) => {
    const infoElement = document.getElementById('info-message');
    if (infoElement) {
        infoElement.innerText = message;
    }
};

export const handleFormChange = (event, formData, setFormData) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};


export const handleSubmitForm = (event, formData, submitFormData, navigate, navigatePath, key) => {
    event.preventDefault();

    submitFormData(formData)
        .then(data => {
            displayMessage(data.message)
            console.log(data.message);
            if (key != null && key === 'Token') {
                localStorage.setItem(key, data.jwt);
                localStorage.setItem('Username', formData.username);
            }
            setTimeout(() => {
                navigate(navigatePath);
            }, 2000);
        })
        .catch(error => {
            displayMessage(error.response.data.message)
            console.error(error.response.data.message);
        });
};

export const handleSubmitFormIssue = (event, formData, submitFormData) => {
    event.preventDefault();
    if (formData.priority === '') {
        displayMessage("Please specify the priority")
        return;
    } else
        formData.priority = parseInt(formData.priority);

    submitFormData(formData)
        .then(data => {
            console.log(data.message);
            displayMessage(data.message);
        })
        .catch(error => {
            console.error(error.response.data.message);
            displayMessage(error.response.data.message);
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
            displayMessage(data.message);
        })
        .catch(error => {
            console.error(error.response.data.message);
            displayMessage(error.response.data.message);
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