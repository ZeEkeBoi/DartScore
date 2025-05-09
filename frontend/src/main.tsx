import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu';
import Killer from './pages/killer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="501" element={<h1>501</h1>} />
      <Route path="killer" element={<Killer />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
  // </StrictMode>
);
