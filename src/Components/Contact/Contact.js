import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  return (
    <div className="container">
      <h2 className="contact-form-heading">Contact Page</h2>
      <form>
        <h5 className="heading">Looking for help?</h5>
        <div className="col-sm-6">
          <label for="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="abc@gmail.com"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <br />
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg" type="button">
              Select your reason
            </button>
            <button
              type="button"
              className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="Login issue">
                  Login Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Signup-issue">
                  Signup Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="site-issue">
                  Site Error
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="products">
                  Products issue
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="d">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div className="col-sm-12">
            <label for="FormControlTextarea" className="form-label">
              Enter your Message here
            </label>
            <textarea
              className="form-control"
              id="FormControlTextarea"
            ></textarea>
          </div>
        </div>
        <br />
        <a href="home" type="button" className="btn btn-primary">
          Submit
        </a>
      </form>
    </div>
  );
};
export default Contact;
