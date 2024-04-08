import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import classNames from "classnames"
import Home from './Routes/Home'

const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
  );
};

export default App;
