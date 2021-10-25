import React from "react";
import Navbar from "./Components/Navbar/navbar.js";
import Home from "./Components/Home/home.js";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/Signup/Signup.js";
import Product from "./Components/Products/Product.js";
import Contact from "./Components/Contact/Contact.js";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Product" component={Product} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
