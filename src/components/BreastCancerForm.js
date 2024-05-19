import React, { useState } from 'react';
import axios from 'axios';
import '../styles/cancer.css'

const BreastCancerForm = () => {
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    perimeter_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: '',
    concave_points_mean: '',
    symmetry_mean: '',
    fractal_dimension_mean: ''
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
      const response = await axios.post('/api/predict-breast-cancer', formData);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='cancer'>
      <h2>Breast Cancer Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="radius_mean" placeholder="Radius Mean(6.981-28.11" onChange={handleChange} required/>
        <input type="text" name="texture_mean" placeholder="Texture Mean(9.71-39.28)" onChange={handleChange} required/>
        <input type="text" name="perimeter_mean" placeholder="Perimeter Mean(43.79-188.5)" onChange={handleChange} required/>
        <input type="text" name="area_mean" placeholder="Area Mean(143.5-2501)" onChange={handleChange} required/>
        <input type="text" name="smoothness_mean" placeholder="Smoothness Mean(0.053-0.163)" onChange={handleChange} required/>
        <input type="text" name="compactness_mean" placeholder="Compactness Mean(0.019-0.345)" onChange={handleChange} required/>
        <input type="text" name="concavity_mean" placeholder="Concavity Mean(0-0.427)" onChange={handleChange} required/>
        <input type="text" name="concave_points_mean" placeholder="Concave Points Mean(0-0.201)" onChange={handleChange} required/>
        <input type="text" name="symmetry_mean" placeholder="Symmetry Mean(0.106-0.304)" onChange={handleChange} required/>
        <input type="text" name="fractal_dimension_mean" placeholder="Fractal Dimension Mean(0.05-0.097)" onChange={handleChange} required/>

        <button type="submit">Breast Cancer test result</button>
      </form>
      {result && <p>The tumor is {result}</p>}
    </div>
  );
};

export default BreastCancerForm;
