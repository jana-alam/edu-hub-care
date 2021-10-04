import React from "react";
import "./PageBanner.css";

const PageBanner = (props) => {
  return (
    <div className="page-banner">
      <h1>{props.children}</h1>
    </div>
  );
};

export default PageBanner;
