import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ContactUs from './pages/ContactUs.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import ThankYou from './pages/ThankYou.tsx';
import Upsell1 from './pages/upsell1/index.tsx';
import Upsell2 from './pages/upsell2/index.tsx';
import Upsell3 from './pages/upsell3/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/upsell1" element={<Upsell1 />} />
        <Route path="/upsell2" element={<Upsell2 />} />
        <Route path="/upsell3" element={<Upsell3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
