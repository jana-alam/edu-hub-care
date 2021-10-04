import React from "react";
import MyButton from "../MyButton/MyButton";
import confirmed from "../../images/order-confirmed.png";

const Confirmed = () => {
  return (
    <div>
      <div className="w-50 m-auto p-5 mt-5">
        <img className="img-fluid" src={confirmed} alt="Order Confirmed" />
      </div>
      <div className="m-5 text-center">
        <MyButton>Go Home</MyButton>
      </div>
    </div>
  );
};

export default Confirmed;
