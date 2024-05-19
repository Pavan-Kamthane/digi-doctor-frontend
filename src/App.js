import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import DiabetesForm from './components/DiabetesForm';
import HeartDiseaseForm from './components/HeartDiseaseForm';
import BreastCancerForm from './components/BreastCancerForm';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './styles/theme.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* public screen */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* private screen */}
          <Route path="/dashboard" 
            element={
              <ProtectedRoute element={<Dashboard />} />
            } 
          />
          <Route path="/diabetes" element=
            {
              <ProtectedRoute element={<DiabetesForm />}/>
            }
          />

          <Route path="/heart-disease"
           element={
            <ProtectedRoute element={<HeartDiseaseForm />} />
           }
          />

          <Route path="/breast-cancer"
           element={
            <ProtectedRoute element={<BreastCancerForm />} />
           } 
          />
        </Routes>
        <Footer/>
      </AuthProvider>
    </Router>
  );
};

export default App;
