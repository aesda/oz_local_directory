import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/login.jsx';
import Register from './pages/Register.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      
    <Routes>
      <Route path="/" element={<App />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-Password" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        
     </Route> 
    </Routes>
  </BrowserRouter>
    
  </StrictMode>
)


