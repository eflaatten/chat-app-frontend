import React from "react";
import { Toaster } from "react-hot-toast";

import { BrowserRouter } from "react-router-dom";
import Router from './Routes';


const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;