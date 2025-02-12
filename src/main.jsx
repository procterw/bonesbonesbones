import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from "react-router";
import './index.css'
import './App.css'
import BonesApp from './BonesApp/index.jsx';
import MusclesApp from './MusclesApp/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <HashRouter>
        <Routes>
          <Route index path="/bones" element={<BonesApp />} />
          <Route index path="/muscles" element={<MusclesApp />} />
          <Route index element={<Navigate to="/bones" />} />
        </Routes>
      </HashRouter>
  </StrictMode>,
)
