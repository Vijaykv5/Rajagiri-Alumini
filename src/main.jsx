import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import App from './app';
import './index.css';
import Profile from './components/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
