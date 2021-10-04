import React from "react";
import notFound from "../../images/not-found.svg";
import MyButton from "../MyButton/MyButton";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="w-50 m-auto p-5 mt-5">
        <img className="img-fluid" src={notFound} alt="Not Found" />
      </div>
      <div className="m-5 text-center">
        <MyButton>Go Home</MyButton>
      </div>
    </div>
  );
};

export default NotFound;
