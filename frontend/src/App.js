import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './App.css';

function AppContent() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (isAuthenticated) {
      setCurrentPage(user?.role === 'admin' ? 'admin' : 'dashboard');
    } else {
      setCurrentPage('home');
    }
  }, [isAuthenticated, user]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Primetrade</h1>
        </div>
        {isAuthenticated && (
          <div className="nav-links">
            <button
              className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </button>
            {user?.role === 'admin' && (
              <button
                className={`nav-btn ${currentPage === 'admin' ? 'active' : ''}`}
                onClick={() => setCurrentPage('admin')}
              >
                Admin Panel
              </button>
            )}
          </div>
        )}
      </nav>

      <main className="app-main">
        {!isAuthenticated && (
          <Home onLoginSuccess={() => setCurrentPage('dashboard')} />
        )}
        {isAuthenticated && currentPage === 'dashboard' && <Dashboard />}
        {isAuthenticated && currentPage === 'admin' && user?.role === 'admin' && <Admin />}
      </main>

      <footer className="app-footer">
        <p>Copyright 2024 - Primetrade. Secure REST API with JWT Authentication</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
