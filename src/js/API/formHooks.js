// File: formHooks.js

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signupFormData, loginFormData, handleFormChange, handleSubmitForm} from './formUtils';
import {submitFormSignupData, submitFormLoginData} from './api';

export const useFormSignup = () => {
    const navigate = useNavigate();
    const navigatePath = '/login';
    const [formSignupData, setFormSignupData] = useState(signupFormData);

    const handleChange = (event) => {
        handleFormChange(event, formSignupData, setFormSignupData);
    };

    const handleSubmit = (event) => {
        handleSubmitForm(event, formSignupData, submitFormSignupData, navigate, navigatePath);
    };

    return {formSignupData, handleChange, handleSubmit};
};

export const useFormLogin = () => {
    const navigate = useNavigate();
    const navigatePath = '/dashboard';
    const [formLoginData, setFormLoginData] = useState(loginFormData);

    const handleChange = (event) => {
        handleFormChange(event, formLoginData, setFormLoginData);
    };

    const handleSubmit = (event) => {
        handleSubmitForm(event, formLoginData, submitFormLoginData, navigate, navigatePath, 'Token');
    };

    return {formLoginData, handleChange, handleSubmit};
};