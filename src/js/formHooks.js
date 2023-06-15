// File: formHooks.js

import { useState } from 'react';
import { initialFormData, handleFormChange, handleSubmitForm } from './formUtils';
import { submitFormData } from './api';

export const useForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        handleFormChange(event, formData, setFormData);
    };

    const handleSubmit = (event) => {
        handleSubmitForm(event, formData, submitFormData);
    };

    return { formData, handleChange, handleSubmit };
};