import React from "react";
import burgerImage from "../assets/burger.jpg";
export default function Card() {
  return (
    <>
      <span
        className="card"
        style={{
          width: "18rem",
          maxHeight: "360px",
          objectFit: "contain !important",
        }}
      >
        <img src={burgerImage} className="card-img-top" alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from({ length: 6 }, (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              defaultValue={"full"}
              className="m-2 h-100  bg-success rounded"
            >
              <option value={"half"}>Half</option>
              <option value={"full"}>Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total items</div>
          </div>
        </div>
      </span>
    </>
  );
}
