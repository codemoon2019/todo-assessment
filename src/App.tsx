import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

const App: FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
