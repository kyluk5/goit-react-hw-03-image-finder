import React from "react";
import "./Button.css";

const Button = ({ loadMore }) => {
  return (
    <div className="load_more">
      <button className="Button" type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default Button;
