import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../styles/dashboard.css';
import diabetics from '../assets/sugar-blood-level.png';
import heart from '../assets/heart-disease.png';
import cancer from '../assets/lung-cancer.png';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
        {/* Personalized welcome message */}
        <h1>
          Welcome to <span>Digi-Doctor</span>, {currentUser?.name}
        </h1>
      <p>
         Your one-stop solution for all your health-related queries. We provide a variety of tools to help you keep track of your health. Get started by selecting one of the options below.
      </p>
      <h3>
        Choose one of the following:
      </h3>
      <ul>
        <li>
          <Link to="/diabetes">
            <img src={diabetics} alt="Diabetes Prediction" />
            <br />
            Diabetes Prediction
          </Link>
        </li>
        <li>
          <Link to="/heart-disease">
            <img src={heart} alt="Heart Disease Prediction" />
            <br />
            Heart Disease Prediction
          </Link>
        </li>
        <li>
          <Link to="/breast-cancer">
            <img src={cancer} alt="Breast Cancer Prediction" />
            <br />
            Breast Cancer Prediction
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
