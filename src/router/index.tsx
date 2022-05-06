/**
 * Author: Henrique Gomes
 * Created: May, 03, 2022
 */

import React from 'react';

// Router
import { Route, Routes } from "react-router-dom";

// Import Pages
import Dashboard from '../components/Dashboard';
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
      <Routes>
          <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="home" element={<Home/>}/>
          </Route>
      </Routes>
  );
}

export default Router;