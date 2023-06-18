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

export const displayMessage = (message) => {
    const infoElement = document.getElementById('info-message');
    if (infoElement) {
        infoElement.innerText = message;
    }
};

export const handleFormChange = (event, formData, setFormData) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};


export const handleSubmitForm = (event, formSignupData, submitFormSignupData, navigate, navigatePath, key) => {
    event.preventDefault();

    submitFormSignupData(formSignupData)
        .then(data => {
            displayMessage(data.message)
            console.log(data.message);
            if (key != null)
                localStorage.setItem(key, data.jwt)
            setTimeout(() => {
                navigate(navigatePath);
            }, 2000);
        })
        .catch(error => {
            displayMessage(error.response.data.message)
            console.error(error.response.data.message);
        });
};