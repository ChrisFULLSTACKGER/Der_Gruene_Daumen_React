import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import classNames from "classnames"
import Home from './Routes/Home'
import './App.css';


const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
  );
};

export default App;
