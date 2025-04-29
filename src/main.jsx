import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate, useLocation, Link } from "react-router";
import './index.css'
import './App.css'
import BonesApp from './BonesApp/index.jsx';
import MusclesApp from './MusclesApp/index.jsx';
import NeuroApp from './NeuroApp/index.jsx';
import CVApp from './CVApp/index.jsx';

const Tabs = () => {
  const { pathname } = useLocation();

  const linkStyle = (s) => {
    return {
      padding: '7px 12px',
      background: s === pathname ? 'white' : '#eee',
      // background: 'white',
      color: 'black',
      border: '1px solid #BBB',
      borderBottom: s === pathname ? '1px solid white' : '1px solid #BBB',
      marginBottom: -1,
    };
  };

  return (
    <nav style={{
      background: '#eee',
      fontSize: 12,
      display: 'flex',
      justifyContent: 'center',
      gap: 15,
      borderBottom: '1px solid #BBB',
      marginBottom: 12,
      paddingTop: 4,
    }}>
      <Link
        to="/bones"
        style={linkStyle('/bones')}
      >
        Study Bones 🦴
      </Link>
      <Link
        to="/muscles"
        style={linkStyle('/muscles')}
      >
        Study Muscles 💪
      </Link>
      <Link
        to="/neuro"
        style={linkStyle('/neuro')}
      >
        Study Neuro 🧠
      </Link>
      <Link
        to="/cv"
        style={linkStyle('/cv')}
      >
        Study CV ❤️
      </Link>
    </nav>
  )
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <HashRouter>
        <Tabs />
        <Routes>
          <Route index path="/bones" element={<BonesApp />} />
          <Route index path="/muscles" element={<MusclesApp />} />
          <Route index path="/neuro" element={<NeuroApp />} />
          <Route index path="/cv" element={<CVApp />} />
          <Route index element={<Navigate to="/bones" />} />
        </Routes>
      </HashRouter>
  </StrictMode>,
)
