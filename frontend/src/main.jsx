import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// 🔹 Title Scroll Logic
const text = "Urmila Bhupathiraju Industries — Flexible Roto Print & Pack ";
let index = 0;

setInterval(() => {
  document.title = text.slice(index) + text.slice(0, index);
  index = (index + 1) % text.length;
}, 250); // change speed here (lower = faster)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)