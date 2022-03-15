import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Error from "./Pages/Error";
import Header from "./components/Header";
import About from "./Pages/About";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header/>
        <Router>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
