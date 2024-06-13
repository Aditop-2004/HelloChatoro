import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-body-tertiary text-center"
      style={{ backgroundColor: "#FFF5E1" }}
    >
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* Facebook */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          {/* Twitter */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          {/* Google */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Link>

          {/* Instagram */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          {/* Linkedin */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>

          {/* Github */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-github rounded"></i>
          </Link>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ color: "red" }}>
        © 2024 Copyright:
        <Link className="text-body" to="https://mdbootstrap.com/">
          <span style={{ color: "red" }}> HelloChatoro</span>
        </Link>
      </div>
      {/* Copyright */}
    </footer>
  );
}
