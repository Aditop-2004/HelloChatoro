import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div
        className="mt-5 mb-5"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
