import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='container'>
    <App />
    <ToastContainer/>
    </div>
  </BrowserRouter>,
)
