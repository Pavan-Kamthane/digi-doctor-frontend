import React, { useState } from 'react';
import axios from 'axios';
import '../styles/diabetes.css'

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    preg: '',
    glucose: '',
    bp: '',
    skin: '',
    insulin: '',
    bmi: '',
    dpf: '',
    age: ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/predict-diabetes', formData);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='diabetes'>
      <h2>Diabetes Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="preg" placeholder="Number of Pregnancies
        (
          0-17)" onChange={handleChange} required/>
        <input type="text" name="glucose" placeholder="Glucose Level 
        (0-199)" onChange={handleChange} required/>
        <input type="text" name="bp" placeholder="Blood Pressure
        (0-122)" onChange={handleChange} required/>
        <input type="text" name="skin" placeholder="Skin Thickness
        (0-99)" onChange={handleChange} required/>
        <input type="text" name="insulin" placeholder="Insulin
        (0-846)" onChange={handleChange} required/>
        <input type="text" name="bmi" placeholder="BMI
        (0-67.1)" onChange={handleChange} required/>
        <input type="text" name="dpf" placeholder="Diabetes Pedigree Function
        (0.078-2.42)" onChange={handleChange} required/>
        <input type="text" name="age" placeholder="Age
        (21-81)" onChange={handleChange} required/>
        <button type="submit">Diabetic test result</button>
      </form>
      {result && <p>The patient is <span>
        
        {result}
        </span>
        </p>}
    </div>
  );
};

export default DiabetesForm;
