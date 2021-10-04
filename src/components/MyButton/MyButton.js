import React from "react";
import { useHistory } from "react-router";

const MyButton = (props) => {
  const history = useHistory();
  const handleButton = (link) => {
    history.push(link);
  };
  const myButton = {
    padding: "7px 15px",
    color: "white",
    backgroundColor: "#f50057",
    borderRadius: "5px",
    border: "1px solid #f50057",
  };
  return (
    <button onClick={() => handleButton(props.link)} style={myButton}>
      {props.children}
    </button>
  );
};

export default MyButton;
