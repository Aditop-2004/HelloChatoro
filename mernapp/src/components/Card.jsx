import React,{useState,useRef, useEffect} from "react";
import burgerImage from "../assets/burger.jpg";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    let food=[]
    for(const item of data){
      if(item.id===foodItem._id){
        food=item;
        break;
      }
    }
    if(food.length!==0){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})
        return
      }
      else if(food.size!==size){
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          name: foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return
        //console.log(data);
      }
    
      return
    }
    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    
  };
  let finalPrice=qty*parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  },[])
  return (
    <>
      <span
        className="card mt-3"
        style={{
          width: "18rem",
          maxHeight: "360px",
          objectFit: "contain !important",
        }}
      >
        <img
          src={foodItem.img}
          className="card-img-top"
          alt="Placeholder"
          style={{ height: "140px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from({ length: 6 }, (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              defaultValue={"full"}
              className="m-2 h-100  bg-success rounded"
              onChange={(e) => setSize(e.target.value)}
              ref={priceRef}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </span>
    </>
  );
}
