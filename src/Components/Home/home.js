import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
const Home = () => {
  const image = "https://www.mwallpapers.com/download-image/767974/1080x675";
  const image1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYH3zWfGF5-Wd7cIBs3Z1fYtY-ZnPFTrF3A&usqp=CAU";
  const image2 =
    "https://i.pinimg.com/originals/80/d3/64/80d364e09d31fcba8af274926d4332ff.jpg";
  const image3 =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jiffpom-attends-the-3rd-annual-reality-tv-awards-at-avalon-news-photo-473261466-1548694593.jpg";
  return (
    <>
      <div className="container-fluid mt-3" id="main-container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={image}
              className="img-fluid img-thumbnail"
              id="image"
              alt=""
            />
          </div>
          <div className="col-sm-6 text-center pt-5">
            <h2 className="heading">Welcome to DOG-CARE.</h2>
            <h4 className="heading-two">Healthy Dog means happiness.</h4>
            <p className="some-text">Track your DOG's Health.</p>
            <a href="Home" type="button" className="btn">
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-5">
        <div className="row">
          <div className="col-sm-4" id="card-cols">
            <div className="card bg-dark">
              <img
                src={image1}
                className="card-img-top img-fluid img-thumbnail"
                alt="..."
                style={{ height: "30rem" }}
              />
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{ textDecoration: "underline", fontWeight: "600" }}
                >
                  Michael
                </h4>
                <p className="Michael" style={{ fontWeight: "600" }}>
                  Hello! My name is "Michael". I am using DOG-CARE's product
                  from so long and believe me they are the best.
                </p>
                <a href="home" className="btn btn-primary mb-3">
                  Follow me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card bg-dark">
              <img
                src={image2}
                className="card-img-top img-fluid img-thumbnail"
                alt="..."
                style={{ height: "30rem" }}
              />
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{ textDecoration: "underline", fontWeight: "600" }}
                >
                  Maxi
                </h4>
                <p className="Maxi" style={{ fontWeight: "600" }}>
                  Hello! My name is "Maxi". I am using DOG-CARE's product from
                  so long and believe me they are the best.
                </p>
                <a href="home" className="btn btn-primary mb-3">
                  Follow me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card bg-dark">
              <img
                src={image3}
                className="card-img-top img-fluid img-thumbnail"
                alt="..."
                style={{ height: "30rem" }}
              />
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{ textDecoration: "underline", fontWeight: "600" }}
                >
                  Lucy
                </h4>
                <p className="Lucy" style={{ fontWeight: "600" }}>
                  Hello! My name is "Lucy". I am using DOG-CARE's product from
                  so long and believe me they are the best.
                </p>
                <a href="home" className="btn btn-primary mb-3">
                  Follow me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-5" id="container-three">
        <div className="row" id="row">
          <div className="col-sm-4 p-5" id="col">
            <h3 className="products">Products</h3>
            <p className="services" style={{ lineHeight: "30px" }}>
              The pet services , including grooming, boarding, pet hotels, pet
              sitting, day care and other services. To know more about products
            </p>
            <a
              href="https://www.petsworld.in/blog/10-essential-items-every-dog-owner-must-have.html"
              type="button"
              className="btn btn-info"
            >
              Visit here
            </a>
          </div>
          <div className="col-sm-4 p-5" id="col">
            <h3 className="health">Services</h3>
            <p className="services" style={{ lineHeight: "30px" }}>
              The pet services , including grooming, boarding, pet hotels, pet
              sitting, day care and other services. To know more about services.
            </p>
            <a
              href="https://lifestyle.livemint.com/relationships/pets/boarding-services-come-to-the-rescue-of-pet-parents-during-covid19-111619349774721.html"
              type="button"
              className="btn btn-info"
            >
              Visit here
            </a>
          </div>
          <div className="col-sm-4 p-5" id="col">
            <h3 className="choose-us">Why Choose Us?</h3>
            <p className="choose-us-text">
              Because, we provide best services, products, best Diets for your
              DOG! and most important we provide free Health checkups every
              month. So what you are waiting for.
            </p>
            <a href="login" type="button" className="btn btn-info">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark mt-5" id="about-section">
        <div className="row p-5">
          <div className="col-sm-4 text-center text-light">
            <h4 className="company" style={{ textDecoration: "underline" }}>
              Company...
            </h4>
            <br />
            <ul className="offer-list">
              <a href="navbar">
                <li>About</li>
              </a>
            
              <a href="navbar">
                <li>Jobs</li>
              </a>
             
              <a href="navbar">
                <li>Support</li>
              </a>
              <a href="navbar">
                <li>Download our App</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-4 text-center text-light">
            <h4 className="social-links">Follow Us...</h4>
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <FaFacebook style={{ fontSize: "2em" }} />
            </a>
            <br />
            <br />
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <FaInstagram style={{ fontSize: "2em" }} />
            </a>
            <br />
            <br />
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <FaTwitter style={{ fontSize: "2em" }} />
            </a>
          </div>
          <div className="col-sm-4 text-center text-light">
            <h4 className="subscribe">Subscribe...</h4>
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <FaYoutube style={{ fontSize: "2em" }} />
            </a>
            <br />
            <br />
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <FaReddit style={{ fontSize: "2em" }} />
            </a>
            <br />
            <br />
            <a href="https://www.google.com/search?client=firefox-b-d&q=facebook">
              <SiTiktok style={{ fontSize: "2em" }} />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer bg-dark text-center">
        <a href="https://www.google.com" className="text-light">
          Privacy center Legal
        </a>
        <p className="copyright text-light ms-auto">
          Copyright &copy; 2021 DOG-CARE India(English)
        </p>
      </footer>
    </>
  );
};
export default Home;
