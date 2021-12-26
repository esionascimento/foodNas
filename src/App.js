import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';
import { Register } from './components/register';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound/notFound'
import { RoutePrivate } from './services/privateLogin'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<RoutePrivate />} >
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route exact path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
