import React from "react";
import burgerImage from "../assets/burger.jpg";
import chickenImage from "../assets/chicken.jpg";
import momoImage from "../assets/momo.jpg";
import paneerImage from "../assets/paneer.jpg";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide carousek-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src={burgerImage}
              className="d-block w-100"
              alt="..."
              height="500px"
              width="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={chickenImage}
              className="d-block w-100"
              alt="..."
              height="500px"
              width="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={momoImage}
              className="d-block w-100"
              alt="..."
              height="500px"
              width="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={paneerImage}
              className="d-block w-100"
              alt="..."
              height="500px"
              width="400px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
