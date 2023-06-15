// File: api.js
import axios from 'axios';

export const submitFormData = (formData) => {
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
