import React, { useState } from 'react';
import axios from 'axios';
import '../styles/heart.css'

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'Male',
    cp: 'Typical Angina',
    trestbps: '',
    chol: '',
    fbs: '>120 mg/dl',
    restecg: 'Normal',
    thalach: '',
    exang: 'No',
    oldpeak: '',
    slope: 'Upsloping',
    ca: '0',
    thal: 'Normal'
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
      const response = await axios.post('/api/predict-heart-disease', formData);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='heart'>
      <h2>Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="age" placeholder="Age(
          29-77
        )" onChange={handleChange} required/>
        <select name="sex" onChange={handleChange} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="cp" onChange={handleChange}required>
          <option value="Typical Angina">Typical Angina</option>
          <option value="Atypical Angina">Atypical Angina</option>
          <option value="Non-anginal Pain">Non-anginal Pain</option>
          <option value="Asymptomatic">Asymptomatic</option>
        </select>
        <input type="text" name="trestbps" placeholder="Resting Blood Pressure(
          94-200
        )" onChange={handleChange} required/>
        <input type="text" name="chol" placeholder="Cholesterol Level(
          126-564
        )" onChange={handleChange} required/>
        <select name="fbs" onChange={handleChange} required>
          <option value=">120 mg/dl">Greater than 120 mg/dl</option>
          <option value="<120 mg/dl">Less than 120 mg/dl</option>
        </select>
        <select name="restecg" onChange={handleChange} required>
          <option value="Normal">Normal</option>
          <option value="ST-T wave abnormality">ST-T wave abnormality</option>
          <option value="Left ventricular hypertrophy">Left ventricular hypertrophy</option>
        </select>
        <input type="text" name="thalach" placeholder="Maximum Heart Rate(
          71-202
        )" onChange={handleChange} required/>
        <select name="exang" onChange={handleChange} required>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <input type="text" name="oldpeak" placeholder="ST Depression Induced by Exercise(
          0-6.2
        
        )" onChange={handleChange} required/>
        <select name="slope" onChange={handleChange} required>
          <option value="Upsloping">Upsloping</option>
          <option value="Flat">Flat</option>
          <option value="Downsloping">Downsloping</option>
        </select>
        <select name="ca" onChange={handleChange} required>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select name="thal" onChange={handleChange} required>
          <option value="Normal">Normal</option>
          <option value="Fixed Defect">Fixed Defect</option>
          <option value="Reversible Defect">Reversible Defect</option>
        </select>
        <button type="submit">Heart Disease test result</button>
      </form>
      {result && <p>The patient has 
        <span>
          {result}
          </span>
          
        </p>}
    </div>
  );
};

export default HeartDiseaseForm;
