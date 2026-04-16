import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './Login';
import Register from './Register';
import '../styles/Home.css';

const Home = ({ onLoginSuccess }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('login');

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Primetrade Task Manager</h1>
        <p>Secure, scalable REST API with JWT authentication and role-based access</p>
      </div>

      <div className="auth-tabs">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'login' && (
            <Login onLoginSuccess={onLoginSuccess} />
          )}
          {activeTab === 'register' && (
            <Register onRegisterSuccess={() => setActiveTab('login')} />
          )}
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>JWT Authentication</li>
          <li>Role-Based Access Control (User/Admin)</li>
          <li>CRUD Operations for Tasks</li>
          <li>Input Validation & Error Handling</li>
          <li>Secure Token Management</li>
          <li>Production-Ready Architecture</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
