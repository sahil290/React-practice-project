import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Product = () => {
  const image1 = "https://cdn.shopify.com/s/files/1/0453/0824/8214/products/WoofWell-german-shepherd-Breed-Specific-Dog-Health-supplement_2000x.png?v=1628722909";
  const image2 = "./Images/image2.webp";
  const image3 = "./Images/image3.webp";
  const image4 = "./Images/image4.webp";
  const image5 = "./Images/image5.jpg";
  const image6 = "./Images/image6.jpg";
  const desc = "This is our latest and  most used product for DOGS health  in recent days. I highly recommend this product for your Dog.";
  const price = "Rs: 550";
  return (
    <>
      <div className="container-fluid bg-dark text-dark text-center">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img src={image1} className="card-img-top img-responsive" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src={image2} className="card-img-top img-fluid img-thumbnail" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src={image3} className="card-img-top img-fluid img-thumbnail" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-info text-dark text-center">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img src={image4} className="card-img-top img-fluid img-thumbnail" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src={image5} className="card-img-top img-fluid img-thumbnail" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src={image6} className="card-img-top img-fluid img-thumbnail" alt="..." />
              <div className="card-body">
                <p className="card-title">{desc}</p>
                <h5>{price}</h5>
                <a href="home" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
